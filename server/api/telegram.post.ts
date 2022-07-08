import { parseUrl } from "@/helpers/utils";
import { Bookmarks } from "../src/bookmarks";

const runtimeConfig = useRuntimeConfig();
const telegramToken = runtimeConfig.telegram.token;
const bookmarkToken = runtimeConfig.telegram.bookmarkToken;
const whitelistedUsername = ["Fadafuq"];

const bookmark = new Bookmarks();

/**
 * TODO:
 * [ ] Add bookmark category (article, package, tools, etc.)
 * [ ] Add bookmark type (public or private)
 */
const handleBookmarkBot = async (message) => {
  const { text, message_id: messageId } = message;
  const { isValid, url } = parseUrl(text);
  if (isValid) {
    const title = text.replace(url, "").trim();
    const returnedBookmark = await bookmark.addBookmark({
      url,
      title,
      messageId,
    });
    return `Bookmark added with id: ${returnedBookmark.id}`;
  } else {
    return "Please input a valid url";
  }
};

export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  const { message } = body;
  const query = useQuery(event);
  const { token } = query;
  console.log("body", body);

  if (token !== telegramToken && token !== bookmarkToken) {
    return {
      message: "Token is not match",
    };
  }
  const reply = (text: string) => ({
    method: "sendMessage",
    chat_id: message.chat.id,
    text,
  });
  if (!whitelistedUsername.includes(message.from.username)) {
    return reply("You are not allowed to use this bot");
  }
  if (token === bookmarkToken) {
    // const bookmarkResult = await handleBookmarkBot(message);
    return {
      method: "sendMessage",
      chat_id: message.chat.id,
      text: JSON.stringify(message, null, 2),
      reply_markup: {
        keyboard: [
          [
            {
              text: "Testing 1",
            },
            {
              text: "Testing 2",
            },
          ],
        ],
        input_field_placeholder: "Select Category",
      },
      reply_to_message_id: message.message_id
    };
    // return reply(bookmarkResult);
  }
  // TODO: Parse message
  return reply("Hello world");
});
