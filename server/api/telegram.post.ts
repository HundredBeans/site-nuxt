const telegramToken = "5534632993:AAGCuzUG0ED98uxruxsQnIt0J8ehg4_5Hkk"

export default defineEventHandler(async (event) => {
  const body = await useBody(event)
  const query = useQuery(event)
  if (query.token !== telegramToken) {
    return {
      message: "Token is not match"
    }
  } else {
    const {message} = body;
    // TODO: Parse message
    return {
      method: "sendMessage",
      chat_id: message.chat.id,
      text: JSON.stringify(message)
    }
  }
})