import { firestore, timestamp } from "../lib/firestore";

export type MessageItem = {
  id: string;
  message: string;
  createdAt: FirebaseFirestore.Timestamp;
  updatedAt: FirebaseFirestore.Timestamp;
};

export class Message {
  async insert(message: string) {
    const docSnapshot = await firestore.collection("messages").add({
      message,
      createdAt: timestamp(),
      updatedAt: timestamp(),
    });
    const itemSnapshot = await docSnapshot.get();
    const itemData = itemSnapshot.data() as Omit<MessageItem, "id">;
    return {
      ...itemData,
      id: itemSnapshot.id,
      createdAt: itemData.createdAt.toDate(),
      updatedAt: itemData.updatedAt.toDate(),
    };
  }
}
