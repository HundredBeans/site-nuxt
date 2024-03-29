<template>
  <main class="prose mx-auto text-left pb-12 px-6">
    <div class="relative px-4">
      <span class="absolute text-7xl font-extrabold opacity-20 -top-8 -left-4"
        >01</span
      >
      <span class="text-4xl font-extrabold">Bookmarks</span>
      <p class="opacity-80">
        List of resources, articles, videos, tools, and other links that I find
        interesting. Updated via personal Telegram and its Webhook API.
        <BaseLink
          to="https://github.com/HundredBeans/site-nuxt/blob/main/server/api/telegram.post.ts"
          target="_blank"
          >Source Code</BaseLink
        >
      </p>
    </div>
    <div class="flex flex-wrap gap-2 py-4 px-4 justify-center">
      <BaseTagIcon
        tag="All"
        tag-icon="gg:folder"
        class="hover:cursor-pointer"
        :class="
          activeCategory === null ? 'opacity-100' : 'opacity-50 shadow-none'
        "
        @click="setActiveCategory(null)"
      ></BaseTagIcon>
      <BaseTagIcon
        v-for="category in bookmarksCategory"
        :key="category.text"
        :tag="category.text"
        :tag-icon="category.icon"
        class="hover:cursor-pointer"
        :class="
          activeCategory === category.text
            ? 'opacity-100'
            : 'opacity-50 shadow-none'
        "
        @click="setActiveCategory(category.text)"
      ></BaseTagIcon>
    </div>
    <div v-auto-animate class="flex flex-wrap gap-4 justify-center pt-4">
      <LinkCard
        v-for="bookmark in filteredBookmarks"
        :key="bookmark.id"
        class="h-full w-72"
        v-bind="bookmark"
        :tag="bookmark.category"
        :tag-icon="getIcon(bookmark.category)"
        @tagIconClick="setActiveCategory(bookmark.category)"
      ></LinkCard>
    </div>
  </main>
</template>

<script setup>
import { bookmarksCategory } from "@/helpers/constant";

useHead({
  title: "Bookmarks",
});
const { data } = await useAsyncData("bookmarks", () =>
  $fetch("/api/bookmarks")
);
const { bookmarks } = data && data.value;
const getIcon = (category) => {
  const selectedCategory = bookmarksCategory.find(
    ({ text }) => text === category
  );
  return selectedCategory ? selectedCategory.icon : "";
};

const activeCategory = ref(null);
const setActiveCategory = (category) => {
  activeCategory.value = category;
};

const filteredBookmarks = computed(() => {
  if (activeCategory.value === null) {
    return bookmarks;
  }
  return bookmarks.filter(({ category }) => category === activeCategory.value);
});
</script>
