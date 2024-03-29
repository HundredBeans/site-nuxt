import { defineNuxtConfig } from "nuxt/config";

const BUILD_TIMESTAMP = new Date();

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  routeRules: {
    "/": {
      static: true,
    },
    "/projects": {
      static: true,
    },
    "/projects/**": {
      static: true,
    },
    "/contact": {
      static: true,
    },
  },
  runtimeConfig: {
    firebase: {
      projectId: "",
      clientEmail: "",
      privateKey: "",
    },
    telegram: {
      token: "",
      bookmarkToken: "",
    },
    public: {
      firebase: {
        projectId: "",
        appId: "",
        apiKey: "",
        measurementId: "",
      },
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
          sizes: "180x180",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-32x32.png",
          sizes: "32x32",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-16x16.png",
          sizes: "16x16",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
  },
  modules: [
    "nuxt-windicss",
    "@vueuse/nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "@nuxt/image-edge",
    "nuxt-icon",
  ],
  content: {},
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    classSuffix: "",
  },
  router: {
    options: {
      linkActiveClass: "!opacity-100",
    },
  },
  vite: {
    define: {
      __BUILD_TIMESTAMP__: BUILD_TIMESTAMP,
    },
  },
});
