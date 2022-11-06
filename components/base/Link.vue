<template>
  <NuxtLink
    class="text-hard transition-opacity duration-150 hover:underline hover:cursor-pointer"
    :class="
      isNav ? 'opacity-70 hover:opacity-100' : 'opacity-100 hover:opacity-70'
    "
    v-bind="$attrs"
  >
    <slot />
    <icon
      v-if="$attrs.target === '_blank'"
      name="gg:arrow-top-right"
      class="align-top"
    />
  </NuxtLink>
</template>

<script setup>
defineProps({
  isNav: {
    type: Boolean,
    default: false,
  },
});
</script>
