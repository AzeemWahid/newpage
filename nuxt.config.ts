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
    
  },

  modules: ['nuxt-gtag', '@nuxt/image', '@nuxtseo/module'],

  image: {
    provider: 'netlify'
  },

  gtag: {
    id: 'G-B8VRZVTMNY'
  },
})
