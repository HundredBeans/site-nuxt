import { firestore } from "../lib/firestore"

export class Test {
  async insert(data: any) {
    return await firestore.collection('test').add(data)
  }
}