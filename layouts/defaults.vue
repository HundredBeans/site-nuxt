<template>
  <main class="text-center bg-hard h-screen w-full transition-all duration-250">
    <LayoutHeader />
    <LayoutNavigation />
    <slot />
  </main>
</template>

<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Hundred Beans` : "Hundred Beans";
  },
});
</script>
