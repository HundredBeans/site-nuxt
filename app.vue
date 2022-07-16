<template>
  <NuxtLayout name="defaults">
    <NuxtLoadingIndicator
      :color="$colorMode.value === 'dark' ? '#f5f5f5' : '#262626'"
    />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import useAnalytics from "@/composables/analytics";

useAnalytics();
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap");
</style>
