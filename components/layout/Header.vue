<template>
  <header class="flex gap-6 p-4 fixed blur-md w-full">
    <BaseSpacer />
    <BaseLink
      v-for="route in headerRoutes"
      :key="route.label"
      v-bind="route"
      :active="route.to === routePath"
    >
      {{ route.label }}
    </BaseLink>
    <BaseDivider />
    <ThemeSwitcher />
  </header>
</template>

<script setup>
const route = useRoute();
const routePath = route.path;

const headerRoutes = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/projects",
    label: "Projects",
  },
  {
    to: "/bookmarks",
    label: "Bookmarks",
  },
  {
    to: "/about",
    label: "About",
  },
];
</script>
