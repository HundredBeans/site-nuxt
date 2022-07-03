const runtimeConfig = useRuntimeConfig()
const telegramToken = runtimeConfig.telegram.token

export default defineEventHandler(async (event) => {
  const body = await useBody(event)
  const query = useQuery(event)
  console.log('telegram webhook called')
  console.log('telegram webhook body', body)
  console.log('telegram webhook query', query)
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