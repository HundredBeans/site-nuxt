<template>
  <nav
    class="flex gap-4 p-4 px-5 fixed backdrop-blur-md backdrop-filter w-full z-1"
  >
    <BaseSpacer />
    <template class="md:contents hidden">
      <div class="flex gap-6">
        <BaseLink
          v-for="route in headerRoutes"
          :key="route.label"
          v-bind="route"
          :is-nav="true"
        >
          {{ route.label }}
        </BaseLink>
      </div>
      <BaseDivider />
    </template>
    <ThemeSwitcher />
  </nav>
</template>

<script setup>
import { headerRoutes } from "@/helpers/constant";

const route = useRoute();
const routePath = route.path;
console.log("routePath", routePath);
</script>
