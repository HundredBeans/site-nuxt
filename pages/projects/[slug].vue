<template>
  <main class="prose mx-auto text-left pb-12">
    <div class="px-6">
      <BaseLink to="/projects">
        <span class="flex items-center">
          <i class="icon-arrow-left mr-2"></i>
          Back to project list
        </span>
      </BaseLink>
      <br />
      <ContentDoc v-slot="{ doc }" :path="`/projects/${$route.params.slug}`">
        <h1>{{ doc.title }}</h1>
        <ContentRenderer :value="doc" />
      </ContentDoc>
    </div>
  </main>
</template>
