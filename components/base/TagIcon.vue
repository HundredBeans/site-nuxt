<template>
  <BaseCard
    class="p-1 px-2 shadow-md flex items-center hover:cursor-pointer"
    @click="$emit('tagIconClick')"
  >
    <icon :name="tagIcon" class="icon-sm"></icon>
    <span class="prose-sm font-bold pl-2">{{ tag }} </span>
  </BaseCard>
</template>

<script setup>
defineProps({
  tagIcon: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
});
</script>
