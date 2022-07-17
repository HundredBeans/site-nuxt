<template>
  <main class="prose mx-auto text-center pb-12">
    <div class="px-6">
      <h1>Projects</h1>
      <p class="opacity-80">
        List of projects that I have created and have been published.
      </p>
    </div>
    <div class="flex flex-wrap gap-8 py-4 px-6 justify-center">
      <ContentList v-slot="{ list }" path="/projects">
        <ProjectCard
          v-for="project in list"
          :key="project.id"
          class="w-full"
          :url="project._path"
          v-bind="project"
        />
      </ContentList>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: "Projects",
});
</script>
