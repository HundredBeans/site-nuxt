<template>
  <main class="prose mx-auto text-center pb-12">
    <div class="px-6">
      <h1>Projects</h1>
      <p class="opacity-80">
        List of projects that I have created and have been published.
      </p>
    </div>
    <div class="flex flex-wrap gap-8 py-4 px-6 justify-center">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        v-bind="project"
      />
    </div>
  </main>
</template>

<script setup>
useHead({
  title: "Projects",
});

const projects = [
  {
    title: "Invitree.id",
    url: "",
    description: `Digital Invitation website where user can create and share their
          invitation. The Invitation cover all the conventational invitation
          needs with many other features.`,
    categories: [
      "Fullstack",
      "Serverless",
      "Product (Digital Invitation - Web)",
    ],
  },
  {
    title: "Tukulsa",
    url: "",
    description: `Online chatbot via LINE platform which can automatically respond to
          users' chat and requests in order to make a purchase of a prepaid
          voucher for all cellular operators within Indonesia. The chatbot uses
          NLP build with TensorFlow (Python).`,
    categories: [
      "Fullstack",
      "Machine Learning",
      "Product (Digital Payment - Chatbot)",
    ],
  },
];
</script>
