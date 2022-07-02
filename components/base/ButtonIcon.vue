<template>
  <button
    class="text-hard hover:opacity-50 transition-opacity duration-150 flex align-middle w-6 h-6 justify-center"
    v-bind="$attrs"
  >
    <i v-if="icon" :class="icon"></i>
    <template v-else>...</template>
  </button>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
  },
});
</script>
