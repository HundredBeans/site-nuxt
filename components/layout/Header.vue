<template>
  <nav
    class="flex gap-4 p-4 px-5 fixed backdrop-blur-md backdrop-filter w-full z-1"
  >
    <BaseSpacer />
    <div class="md:contents hidden">
      <div class="flex gap-6">
        <BaseLink
          v-for="headerRoute in headerRoutes"
          :key="headerRoute.label"
          v-bind="headerRoute"
          :is-nav="true"
        >
          {{ headerRoute.label }}
        </BaseLink>
      </div>
      <BaseDivider />
    </div>
    <ThemeSwitcher />
  </nav>
</template>

<script setup>
import { headerRoutes } from "@/helpers/constant";
</script>
