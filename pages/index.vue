<template>
  <main
    class="prose w-full h-full flex justify-center items-center flex-col mx-auto px-6"
  >
    <!-- <NuxtWelcome /> -->
    <div class="px-6 text-center">
      <ContentDoc v-slot="{ doc }" path="/home">
        <h1>Hello World</h1>
        <ContentRenderer :value="doc" />
      </ContentDoc>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: "Home",
});
</script>
