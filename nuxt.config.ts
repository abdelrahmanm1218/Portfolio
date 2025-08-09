// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '~/assets/css/colors.css'
  ],
  plugins: [
    '~/plugins/vuetify.ts',
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  app: {
    head: {
      link:[
        {rel: 'icon', type: 'image/x-icon', href: '/am-logo.png'}, //change this to my logo
      ]
    }
  }

})
