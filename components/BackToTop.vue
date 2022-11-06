<template>
  <BaseButton
    v-if="showScrollTop"
    class="px-4 shadow-xl border-soft"
    @click="scrollTop"
  >
    Back to Top <icon name="gg:arrow-long-up" />
  </BaseButton>
</template>

<script setup>
import useScrollTop from "@/composables/useScrollTop";

const { scrollTop, showScrollTop } = useScrollTop();
</script>
