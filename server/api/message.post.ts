import { Message } from "../src/message";

const message = new Message();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const resp = await message.insert(body);
  // TODO: Notify to Telegram
  return {
    message: "Message Sent!",
    data: resp,
  };
});
