<template>
  <main class="prose mx-auto text-center pb-12">
    <div class="px-6">
      <h1>Bookmarks</h1>
      <p class="opacity-80">
        List of resources, articles, videos, tools, and other links that I saved
        personally. I use this to keep track of things I find interesting. The
        lists here are updated using Telegram and its Webhook API.
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
        v-bind="bookmark"
        :tag="bookmark.category"
        :tag-icon="getIcon(bookmark.category)"
      ></LinkCard>
    </div>
  </main>
</template>

<script setup>
import { bookmarksCategory } from "@/helpers/constant";

useHead({
  title: "Bookmarks",
});
const { data } = await useFetch("/api/bookmarks");
const { bookmarks } = data.value;
const getIcon = (category) => {
  const selectedCategory = bookmarksCategory.find(
    ({ text }) => text === category
  );
  return selectedCategory ? selectedCategory.icon : "";
};
</script>
