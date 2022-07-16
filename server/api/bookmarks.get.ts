import { Bookmarks } from "../src/bookmarks";

const bookmark = new Bookmarks();

export default defineEventHandler(async () => {
  const bookmarks = await bookmark.getBookmarks();
  return {
    message: "success",
    bookmarks,
  };
});
