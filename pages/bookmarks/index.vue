<template>
  <div>
    <div class="px-6">
      <h1>Bookmarks</h1>
      <p class="opacity-80">
        List of resources, articles, tools, and other links that I saved
        personally
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
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/bookmarks");
const { bookmarks } = data.value;
</script>
