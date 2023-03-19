<template>
  <main class="prose mx-auto text-left pb-12 px-6 pt-24">
    <div class="relative px-4">
      <span class="absolute text-7xl font-extrabold opacity-20 -top-8 -left-4"
        >01</span
      >
      <span class="text-4xl font-extrabold">Contact</span>
    </div>
    <div class="flex flex-wrap flex-col py-4 px-4">
      <div>
        If you want to reach out to me, you're in the right place. Here's how
        you can get in touch:
        <ul>
          <li>
            Email:
            <BaseLink to="mailto:gm.daffa100@gmail.com" target="_blank">
              gm.daffa100@gmail.com
            </BaseLink>
          </li>
          <li>
            LinkedIn:
            <BaseLink
              to="https://www.linkedin.com/in/mohammad-daffa/"
              target="_blank"
            >
              Mohammad Daffa
            </BaseLink>
          </li>
          <li>
            GitHub:
            <BaseLink to="https://github.com/HundredBeans" target="_blank">
              HundredBeans
            </BaseLink>
          </li>
        </ul>
        Feel free to drop me a line anytime. Whether you have a question, a
        comment, or just want to say hi. Just use the contact form below to send
        me a message.
      </div>
      <br />
      <div>
        <form @submit.prevent="sendMessage">
          <label for="message" class="block mb-2">Message (Anonymous)</label>
          <textarea
            id="message"
            v-model="message"
            rows="4"
            class="block p-2.5 w-full bg-soft rounded-lg border-soft dark:placeholder-gray-400"
            placeholder="Write your message here..."
            @input="response = ''"
          ></textarea>
          <p class="opacity-80 text-sm">
            Please note that any messages sent through the contact form will be
            anonymous, which means I won't know who sent it. If you'd like to
            get a response from me, please make sure to include your contact
            information in the message so I can get back to you!
          </p>
          <div class="py-2 flex justify-end">
            <BaseButton type="submit" class="px-4" :disabled="sending">
              <icon name="gg:comment" /> Send Message
            </BaseButton>
          </div>
          <p v-if="response">{{ response }}</p>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
const message = ref("");
const sending = ref(false);
const response = ref("");

const sendMessage = async () => {
  try {
    sending.value = true;
    const { data } = await useFetch("/api/message", {
      method: "post",
      body: message.value,
    });
    response.value = data.value.message;
  } catch (error) {
    response.value = "Failed to send message";
  } finally {
    sending.value = false;
  }
};

useHead({
  title: "Contact",
});
</script>
