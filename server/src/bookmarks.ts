import { FieldValue } from "firebase-admin/firestore";
import { firestore } from "../lib/firestore";

export class Bookmarks {
  db = firestore.collection("bookmarks");

  async addBookmark(data: any) {
    return await this.db.add({
      ...data,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });
  }

  async updateBookmark(id: string, data: any) {
    return await this.db.doc(id).update({
      ...data,
      updatedAt: FieldValue.serverTimestamp(),
    });
  }

  async getBookmark(id: string) {
    const bookmarkSnapshot = await this.db.doc(id).get();
    return {
      id: bookmarkSnapshot.id,
      ...bookmarkSnapshot.data(),
    };
  }

  async getBookmarks() {
    const bookmarksSnapshot = await this.db.orderBy("updatedAt", "desc").get();
    return bookmarksSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  }

  async deleteBookmark(id: string) {
    return await this.db.doc(id).delete();
  }
}
