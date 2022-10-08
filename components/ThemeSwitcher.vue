<template>
  <BaseButtonIcon
    :icon="themeIcon"
    name="Theme Switcher"
    @click="toggleDark()"
  ></BaseButtonIcon>
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
    return "gg:sun";
  } else {
    return "gg:moon";
  }
});
</script>
