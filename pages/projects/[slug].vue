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
        <div class="flex md:flex-row flex-col gap-4 md:gap-12">
          <div>
            <p class="!m-0 opacity-80">Type</p>
            <p class="!m-0">{{ doc.type }}</p>
          </div>
          <div>
            <p class="!m-0 opacity-80">Period</p>
            <p class="!m-0">{{ doc.period }}</p>
          </div>
          <div>
            <p class="!m-0 opacity-80">Links</p>
            <span>
              <!-- eslint-disable-next-line vue/no-v-for-template-key -->
              <template v-for="(link, idx) in doc.links" :key="link.url">
                <BaseLink class="!font-normal" :to="link.url" target="_blank">
                  {{ link.text }}
                </BaseLink>
                {{ idx < doc.links.length - 1 ? " • " : "" }}
              </template>
            </span>
          </div>
        </div>
        <ContentRenderer :value="doc" />
      </ContentDoc>
      <br />
      <BackToTop />
    </div>
  </main>
</template>
