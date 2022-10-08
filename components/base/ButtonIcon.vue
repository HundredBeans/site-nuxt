<template>
  <button
    class="text-hard hover:opacity-50 transition-opacity duration-150 flex align-middle w-6 h-6 justify-center items-center"
    v-bind="$attrs"
  >
    <icon v-if="icon" :name="icon" size="1.25em"></icon>
    <template v-else>...</template>
  </button>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
});
</script>
