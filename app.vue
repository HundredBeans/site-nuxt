<template>
  <NuxtLayout name="defaults">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { getAnalytics, logEvent } from "firebase/analytics";

const { $firebaseApp } = useNuxtApp();
const route = useRoute();
const analytics = ref();

onMounted(() => {
  analytics.value = getAnalytics($firebaseApp);
  analytics.value.app.automaticDataCollectionEnabled = true;
});

watch(
  () => route.fullPath,
  () => {
    logEvent(analytics.value, "page_view");
  }
);
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap");
</style>
