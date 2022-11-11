<template>
  <div ref="navbar" class="md:hidden contents">
    <Transition>
      <BaseCard
        v-if="isOpen"
        class="fixed bottom-8 right-4 w-40 mb-8 z-1 shadow-lg"
      >
        <nav class="flex flex-col py-3 text-center">
          <BaseLink
            v-for="route in headerRoutes"
            :key="route.label"
            v-bind="route"
            :is-nav="true"
            class="py-2"
          >
            {{ route.label }}
          </BaseLink>
        </nav>
      </BaseCard>
    </Transition>
    <div class="fixed bottom-4 right-4 z-1 flex gap-4">
      <BackToTop />
      <BaseButton class="w-40 shadow-xl border-soft" @click.stop="toggleOpen">
        {{ !isOpen ? "Show Navigation" : "Hide Navigation" }}
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import { headerRoutes } from "@/helpers/constant";

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
