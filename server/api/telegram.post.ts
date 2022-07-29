import { Bookmarks } from "../src/bookmarks";
import { parseUrl } from "@/helpers/utils";
import { bookmarksCategory } from "@/helpers/constant";

const runtimeConfig = useRuntimeConfig();
const telegramToken = runtimeConfig.telegram.token;
const bookmarkToken = runtimeConfig.telegram.bookmarkToken;
const whitelistedUsername = ["Fadafuq"];
const bookmarkCategories = bookmarksCategory.map((category) => category.text);
const bookmark = new Bookmarks();

/**
 * TODO:
 * [X] Add bookmark category (article, package, tools, etc.)
 * [ ] Handle types
 */
const handleBookmarkBot = async (message) => {
  const { text, message_id: messageId } = message;
  const { isValid, url } = parseUrl(text);
  const [, command, ...params] = text.split(" ");
  if (command === "select_category") {
    const [id] = params;
    const { url: bookmarkUrl } = (await bookmark.getBookmark(id)) as any;
    // Do something
    return {
      text: `Select the bookmark category for ${bookmarkUrl}`,
      options: {
        reply_markup: {
          inline_keyboard: [
            bookmarkCategories.map((category) => {
              return {
                text: category,
                switch_inline_query_current_chat: `update_category ${id} ${category}`,
              };
            }),
          ],
        },
      },
    };
  }
  if (command === "update_title") {
    const [id, ...rest] = params;
    try {
      const title = rest.join(" ");
      await bookmark.updateBookmark(id, { title });
      return {
        text: `Update title for ${id} success`,
        options: {},
      };
    } catch (error) {
      return {
        text: `Update title for ${id} failed: ${error.message}`,
        options: {},
      };
    }
  }
  if (command === "update_description") {
    const [id, ...rest] = params;
    try {
      const description = rest.join(" ");
      await bookmark.updateBookmark(id, { description });
      return {
        text: `Update description for ${id} success`,
        options: {},
      };
    } catch (error) {
      return {
        text: `Update description for ${id} failed: ${error.message}`,
        options: {},
      };
    }
  }
  if (command === "update_category") {
    const [id, category] = params;
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
      const response = await fetch(
        `https://jsonlink.io/api/extract?url=${url}`
      );
      const linkData = await response.json();
      const bookmarkData = {
        url,
        title: title || linkData.title || "No Title",
        description: linkData.description || "No Description",
        thumbnail: linkData.images.length ? linkData.images[0] : "",
        messageId,
      };
      const addedBookmark = await bookmark.addBookmark(bookmarkData);
      return {
        text: `Retrieved URL with title: ${bookmarkData.title}, description: ${bookmarkData.description}, thumbnail: ${bookmarkData.thumbnail}. Update data for ${url}`,
        options: {
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Title",
                  switch_inline_query_current_chat: `update_title ${addedBookmark.id}`,
                },
                {
                  text: "Description",
                  switch_inline_query_current_chat: `update_description ${addedBookmark.id}`,
                },
                {
                  text: "Category",
                  switch_inline_query_current_chat: `select_category ${addedBookmark.id}`,
                },
              ],
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
