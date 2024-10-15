// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxthub/core',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/icon'
  ],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-10-14'
})