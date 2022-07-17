<template>
  <main class="prose mx-auto text-center pb-12">
    <div class="px-6">
      <ContentDoc v-slot="{ doc }" path="/about">
        <h1>{{ doc.title }}</h1>
        <ContentRenderer :value="doc" />
      </ContentDoc>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: "About",
});
</script>
