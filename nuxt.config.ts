// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  routeRules: {
    "/contact": { prerender: true }
  },

  modules: ['nuxt-gtag', '@nuxt/image'],

  image: {
    provider: 'netlify'
  },

  gtag: {
    id: 'G-B8VRZVTMNY'
  },

});
