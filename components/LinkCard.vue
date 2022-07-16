<template>
  <BaseCard>
    <div class="flex flex-col text-left">
      <div class="relative">
        <BaseTagIcon
          :tag-icon="tagIcon"
          :tag="tag"
          class="absolute right-2 top-2"
          @tagIconClick="$emit('tagIconClick')"
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
defineProps({
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: false,
    default: "",
  },
  tagIcon: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  thumbnail: {
    type: String,
    required: true,
  },
});
</script>
