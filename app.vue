<template>
  <div>
    <LayoutHeader />
    <LayoutNavigation />
    <!-- Back To Top Button -->
    <div class="hidden md:block fixed bottom-4 right-8 z-1 flex gap-4">
      <BackToTop />
    </div>
    <NuxtLoadingIndicator
      :color="$colorMode.value === 'dark' ? '#f5f5f5' : '#262626'"
    />
    <NuxtPage />
  </div>
</template>

<script setup>
import useAnalytics from "@/composables/analytics";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} — Hundred Beans` : "Hundred Beans";
  },
  bodyAttrs: {
    class: "bg-hard transition-all duration-250 min-h-full",
  },
});

useAnalytics();
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap");
/* CSS Reset from https://www.joshwcomeau.com/css/custom-css-reset/#the-css-reset */
/*
  1. Use a more-intuitive box-sizing model.
*/
*,
*::before,
*::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html,
body,
#__nuxt,
#__nuxt > div {
  height: 100%;
}
#__nuxt > div > main {
  padding-top: 5rem;
}

/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input,
button,
textarea,
select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root,
#__nuxt {
  isolation: isolate;
}

.prose a {
  text-decoration: none;
}
.prose {
  max-width: 90ch;
}
</style>
