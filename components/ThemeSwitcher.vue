<template>
  <BaseButtonIcon
    @click="toggleTheme"
    :icon="isDark ? 'icon-sun' : 'icon-moon'"
  ></BaseButtonIcon>
</template>

<script setup>
const isDark = useDark();

function toggleTheme() {
  isDark.value = !isDark.value;
}
</script>
