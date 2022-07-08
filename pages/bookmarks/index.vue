<template>
  <main class="prose mx-auto text-center pb-12">
    <div class="px-6">
      <h1>Bookmarks</h1>
      <p class="opacity-80">
        List of resources, articles, books, and other links that I saved
        personally. I use this to keep track of things I find interesting.
        <BaseLink
          to="https://github.com/HundredBeans/site-nuxt/blob/main/server/api/telegram.post.ts"
          target="_blank"
          class="hover:underline"
          >Source Code</BaseLink
        >
      </p>
    </div>
    <div class="flex flex-wrap gap-4 justify-center pt-4">
      <LinkCard
        class="h-full w-72"
        v-for="bookmark in bookmarks"
        :key="bookmark.id"
        :url="bookmark.url"
      ></LinkCard>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: "Bookmarks",
});
const { data } = await useFetch("/api/bookmarks");
const { bookmarks } = data.value;
</script>
