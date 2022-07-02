<template>
  <NuxtLink
    class="text-hard opacity-70 hover:opacity-100 transition-opacity duration-150"
    :class="active ? 'opacity-100' : 'opacity-70'"
    v-bind="$attrs"
  >
    <slot />
  </NuxtLink>
</template>

<script setup>
defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>
