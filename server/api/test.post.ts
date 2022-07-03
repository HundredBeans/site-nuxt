import { Test } from "../src/test"

const test = new Test()

export default defineEventHandler(async (event) => {
  const body = await useBody(event)
  await test.insert(body)
  return {
    message: 'success',
    body
  }
})