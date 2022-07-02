<template>
  <header class="flex gap-4 p-4 fixed blur-md w-full">
    <BaseSpacer />
    <template class="md:contents hidden">
      <div class="flex gap-6">
        <BaseLink
          v-for="route in headerRoutes"
          :key="route.label"
          v-bind="route"
          :active="route.to === routePath"
        >
          {{ route.label }}
        </BaseLink>
      </div>
      <BaseDivider />
    </template>
    <ThemeSwitcher />
  </header>
</template>

<script setup>
import { headerRoutes } from "@/helpers/constant";

const route = useRoute();
const routePath = route.path;
</script>
