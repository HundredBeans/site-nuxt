<template>
  <div class="relative">
    <span class="absolute text-4xl font-extrabold opacity-20 top-2 left-1">
      {{ props.text }}
    </span>
    <span class="text-4xl font-extrabold">{{ props.text }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>
