// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
  ],
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
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Abdelrahman Mahmoud | Frontend Developer',
      link:[
        {rel: 'icon', type: 'image/x-icon', href: '/am-logo.png'}, //change this to my logo
        { rel: 'canonical', href: 'https://abdelrahman-mahmoud-portfolio.vercel.app' }, // Replace with your actual URL
      ],
      meta:[
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: "I'm Abdelrahman Mahmoud, Frontend Developer with 2 years of hands-on experience in Web Development using Vue, Nuxt, Angular, TypeScript, and modern web technologies. Helping Businesses to build scalable and responsive UI, also I have experience as a Backend Developer using Python, Django, MVT, API, Go, Swagger, apidog, MySQL" },
        { name: 'keywords', content: 'frontend developer, vue.js, nuxt.js, angular, typescript, javascript, python, django, api, backend development, web developer, portfolio, abdelrahman mahmoud,' },
        { name: 'author', content: 'Abdelrahman Mahmoud' },
        { name: 'robots', content: 'index, follow' },
        { name: 'google-site-verification', content: '-lv4_8Y8Rs2jxCu57EeSYVkhdSfTz6BhK42HnyBJGjU' },
        
        // Mobile browser bar color (theme-color)
        { name: 'theme-color', content: '#123524' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },

        //og graph
        { property: 'og:title', content: 'Abdelrahman Mahmoud | Frontend Developer' },
        { property: 'og:description', content: 'Frontend Developer with experience in Vue, Nuxt, Angular, TypeScript to build scalable and responsive User Interfaces' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://abdelrahman-mahmoud-portfolio.vercel.app' },
        { property: 'og:image', content: '/am-logo.png' },
        { property: 'og:site_name', content: 'Abdelrahman Mahmoud Portfolio' },

        //twitter card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Abdelrahman Mahmoud - Frontend Developer Portfolio' },
        { name: 'twitter:description', content: 'Frontend Developer with experience in Vue, Nuxt, Angular, TypeScript' },
        { name: 'twitter:image', content: '/am-logo.png' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Abdelrahman Mahmoud',
            jobTitle: 'Frontend Developer',
            description: 'Frontend Developer with experience in Vue, Nuxt, Angular, TypeScript',
            url: 'https://abdelrahman-mahmoud-portfolio.vercel.app', 
            sameAs: [
              // Add your social media profiles here
              'https://www.linkedin.com/in/abdelrahman-mahmoud-63031522a',
              'https://github.com/abdelrahmanm1218',

            ],
            knowsAbout: ['Vue.js', 'Nuxt.js', 'Angular', 'TypeScript', 'JavaScript', 'Web Development', 'Frontend Development',  'Vuetify', 'Bootstrap', 'Ant-Design', "Git", 'Github', 'Pyhton', 'Django', 'APIs', 'REST API', 'SQL', 'MySQL', 'Backend Development', 'Swagger', 'Apidog'],
            alumniOf: 'Computer Engineering'
          })
        }
      ]
    }
  }, 
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },

})
