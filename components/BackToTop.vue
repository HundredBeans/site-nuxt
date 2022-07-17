<template>
  <BaseLink @click="backToTop">
    <span class="flex items-center">
      Back to top
      <i class="icon-arrow-up ml-2"></i>
    </span>
  </BaseLink>
</template>

<script setup>
const backToTop = () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>
