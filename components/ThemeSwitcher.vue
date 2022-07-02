<template>
  <BaseButtonIcon @click="toggleDark()" :icon="themeIcon"></BaseButtonIcon>
</template>

<script setup>
import { isDark } from "@/composables/dark";
import { useToggle } from "@vueuse/core";

const toggleDark = useToggle(isDark);
const themeIcon = computed(() => {
  console.log("isDark", isDark.value);
  if (isDark.value) {
    return "icon-sun";
  } else {
    return "icon-moon";
  }
});
</script>
