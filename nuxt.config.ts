// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    css: ['@/assets/css/styles.css'],
    build: {
        transpile: ['gsap'],
      },

    tailwindcss: {
      // Options
    }
})
