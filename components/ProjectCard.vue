<template>
  <BaseCard class="p-6 text-left flex flex-col">
    <h2 class="!mt-0 !mb-4 !text-2xl">{{ title }}</h2>
    <span class="opacity-80">{{ categories.join(" • ") }}</span>
    <p class="!mt-4 !mb-0">
      {{ description }}
    </p>
  </BaseCard>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  categories: {
    type: Array,
    required: true,
  },
});
</script>
