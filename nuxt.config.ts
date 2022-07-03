import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    firebase: {
      projectId: '',
      clientEmail: '',
      privateKey: ''
    },
    telegram: {
      token: '',
      bookmarkToken: ''
    }
  },
  modules: [
    'nuxt-windicss',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    classSuffix: ''
  },
  router: {
    options: {
      linkActiveClass: 'opacity-100',
    }
  }
})
