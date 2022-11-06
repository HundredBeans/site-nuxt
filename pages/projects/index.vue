<template>
  <main class="prose mx-auto text-left pb-12 px-6 pt-24">
    <div class="relative px-4">
      <span class="absolute text-7xl font-extrabold opacity-20 -top-8 -left-4"
        >01</span
      >
      <span class="text-4xl font-extrabold">Projects</span>
      <p class="opacity-80">
        List of projects that I have created and have been published outside of
        my workplace.
      </p>
    </div>
    <div class="flex flex-wrap gap-8 py-4 px-4 justify-center">
      <ContentList v-slot="{ list }" path="/projects">
        <NuxtLink
          v-for="project in list"
          :key="project.id"
          class="w-full"
          :to="project._path"
        >
          <ProjectCard :url="project._path" v-bind="project" />
        </NuxtLink>
      </ContentList>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: "Projects",
});
</script>
