import { Bookmarks } from "../src/bookmarks";

const runtimeConfig = useRuntimeConfig();
const telegramToken = runtimeConfig.telegram.token;
const bookmarkToken = runtimeConfig.telegram.bookmarkToken;
const whitelistedUsername = ["Fadafuq"];

const bookmark = new Bookmarks();

const handleBookmarkBot = async (message) => {
  const { text } = message;
  const isUrl = text.match(
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  );
  if (isUrl) {
    const url = isUrl[0];
    const title = text.replace(url, "").trim();
    const returnedBookmark = await bookmark.addBookmark({ url, title });
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
    const bookmarkResult = await handleBookmarkBot(message);
    return reply(bookmarkResult);
  }
  // TODO: Parse message
  return reply("Hello world");
});
