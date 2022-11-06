<template>
  <main class="prose mx-auto text-left pb-12">
    <div class="px-6">
      <h1>Hello World —</h1>
      <br />
      <div id="about" class="relative px-4">
        <span class="absolute text-7xl font-extrabold opacity-20 -top-8 -left-4"
          >01</span
        >
        <span class="text-4xl font-extrabold">About</span>
        <p class="opacity-80">
          A <b>software engineer</b> or <b>web developer</b> that has a
          background in Petroleum and Geothermal Engineering based in West Java,
          <b>Indonesia (GMT +7)</b>. T-Shaped developer specializing in
          <b>front-end engineering</b> and cross-discipline competencies in
          <b>backend development</b> and <b>serverless architecture</b>.
        </p>
        <BaseLink to="https://read.cv/hundredbeans" target="_blank">
          See full CV
        </BaseLink>
      </div>
      <br />
      <br />
      <br />
      <div id="projects" class="relative px-4">
        <span class="absolute text-7xl font-extrabold opacity-20 -top-8 -left-4"
          >02</span
        >
        <span class="text-4xl font-extrabold">Projects</span>
        <p class="opacity-80">
          List of projects that I have created and have been published.
        </p>
        <div class="flex flex-wrap gap-8 justify-center">
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
      </div>
      <br />
      <br />
      <br />
      <div class="relative px-4">
        <span class="absolute text-7xl font-extrabold opacity-20 -top-8 -left-4"
          >03</span
        >
        <span class="text-4xl font-extrabold">Bookmarks</span>
        <p class="opacity-80">
          List of resources, articles, videos, tools, and other links that I
          find interesting. Updated via personal Telegram and its Webhook API.
          <BaseLink
            to="https://github.com/HundredBeans/site-nuxt/blob/main/server/api/telegram.post.ts"
            target="_blank"
            >Source Code</BaseLink
          >
        </p>
        <BaseLink to="bookmarks">See All Bookmarks</BaseLink>
      </div>
      <br />
      <br />
      <br />
      <div class="relative px-4">
        <span class="absolute text-7xl font-extrabold opacity-20 -top-8 -left-4"
          >04</span
        >
        <span class="text-4xl font-extrabold">Contact</span>
        <p class="opacity-80">
          You can contact me through
          <BaseLink to="https://linkedin.com/in/mohammad-daffa" target="_blank"
            >LinkedIn</BaseLink
          >
          or
          <BaseLink to="mailto:gm.daffa100@gmail.com" target="_blank"
            >Email</BaseLink
          >. See my code on
          <BaseLink to="https://github.com/hundredbeans" target="_blank"
            >Github</BaseLink
          >. I am always open for any job oportunities either it is a freelance
          or a full-time job
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: "Home",
});
</script>
