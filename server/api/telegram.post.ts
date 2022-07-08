import { parseUrl } from "@/helpers/utils";
import { Bookmarks } from "../src/bookmarks";

const runtimeConfig = useRuntimeConfig();
const telegramToken = runtimeConfig.telegram.token;
const bookmarkToken = runtimeConfig.telegram.bookmarkToken;
const whitelistedUsername = ["Fadafuq"];
const bookmarkCategories = ["Article", "Resource", "Tool", "Video", "Other"];

const bookmark = new Bookmarks();

/**
 * TODO:
 * [ ] Add bookmark category (article, package, tools, etc.)
 * [ ] Add bookmark type (public or private)
 */
const handleBookmarkBot = async (message) => {
  const { text, message_id: messageId } = message;
  const { isValid, url } = parseUrl(text);
  const splittedText = text.split(" ");
  if (splittedText[0] === "update_category") {
    const category = splittedText[1];
    const id = splittedText[2];
    const data = {
      category,
    };
    try {
      await bookmark.updateBookmark(id, data);
      return {
        text: `Update category for ${id} success`,
        options: {},
      };
    } catch (error) {
      return {
        text: `Update category for ${id} failed: ${error.message}`,
        options: {},
      };
    }
  }
  if (isValid) {
    const title = text.replace(url, "").trim();
    try {
      const addedBookmark = await bookmark.addBookmark({
        url,
        title,
        messageId,
      });
      return {
        text: `Select the bookmark category for ${url}`,
        options: {
          reply_markup: {
            inline_keyboard: [
              bookmarkCategories.map(category => {
                return {
                  text: category,
                  switch_inline_query_current_chat: `update_category: ${category} ${addedBookmark.id}`,
                }
              })
            ],
          },
        },
      };
    } catch (error) {
      return {
        text: `Add bookmark failed: ${error.message}`,
        options: {},
      };
    }
  }
  return { text: "Message not valid", options: {} };
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
  const reply = (text: string, options?: any) => ({
    method: "sendMessage",
    chat_id: message.chat.id,
    text,
    ...options,
  });
  if (!whitelistedUsername.includes(message.from.username)) {
    return reply("You are not allowed to use this bot");
  }
  if (token === bookmarkToken) {
    const bookmarkResult = await handleBookmarkBot(message);
    return reply(bookmarkResult.text, bookmarkResult.options);
  }
  // TODO: Parse message
  return reply(JSON.stringify(body, null, 2));
});
