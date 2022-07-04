<template>
  <div class="md:hidden contents" ref="navbar">
    <Transition>
      <BaseCard
        class="fixed bottom-8 right-4 w-40 mb-8 z-1 shadow-lg"
        v-if="isOpen"
      >
        <nav class="flex flex-col py-3 text-center">
          <BaseLink
            v-for="route in headerRoutes"
            :key="route.label"
            v-bind="route"
            class="py-2"
          >
            {{ route.label }}
          </BaseLink>
        </nav>
      </BaseCard>
    </Transition>
    <BaseButton
      class="w-40 px-4 fixed bottom-4 right-4 z-1 shadow-lg"
      @click.stop="toggleOpen"
    >
      {{ !isOpen ? "Show Navigation" : "Hide Navigation" }}
    </BaseButton>
  </div>
</template>

<script setup>
import { headerRoutes } from "@/helpers/constant";

const route = useRoute();
const routePath = route.path;

const isOpen = ref(false);
function toggleOpen() {
  isOpen.value = !isOpen.value;
}
const navbar = ref(null);
onClickOutside(navbar, () => {
  isOpen.value = false;
});
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.25s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
