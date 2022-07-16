<template>
  <BaseButtonIcon :icon="themeIcon" @click="toggleDark()"></BaseButtonIcon>
</template>

<script setup>
const colorMode = useColorMode();
function toggleDark() {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
}
const themeIcon = computed(() => {
  if (colorMode.unknown) {
    return "";
  }
  if (colorMode.value === "dark") {
    return "icon-sun";
  } else {
    return "icon-moon";
  }
});
</script>
