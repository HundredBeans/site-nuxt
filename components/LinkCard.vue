<template>
  <BaseCard>
    <div class="flex flex-col text-left">
      <div class="relative">
        <BaseTagIcon
          :tag-icon="tagIcon"
          :tag="tag"
          class="absolute right-2 top-2"
        ></BaseTagIcon>
        <img
          class="!m-0 rounded-t-md h-36 w-full object-cover"
          :src="thumbnail"
        />
      </div>
      <div class="p-4 flex flex-col">
        <BaseLink
          :to="url"
          target="_blank"
          class="prose-lg font-bold truncate no-underline"
          :title="title"
        >
          {{ title }}
        </BaseLink>
        <p class="prose-sm !m-0 truncate" :title="description">
          {{ description }}
        </p>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
const props = defineProps({
  url: {
    type: String,
  },
  title: {
    type: String,
  },
  tag: {
    type: String,
  },
  tagIcon: {
    type: String,
  },
  description: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
});
</script>
