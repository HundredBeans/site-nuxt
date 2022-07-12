<template>
  <BaseCard class="p-1 px-2 shadow-md flex items-center">
    <i :class="tagIcon" class="icon-sm"></i>
    <span class="prose-sm font-bold pl-2">{{ tag }} </span>
  </BaseCard>
</template>

<script setup>
defineProps({
  tagIcon: {
    type: String,
  },
  tag: {
    type: String,
  },
});
</script>
