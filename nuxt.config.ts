// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
      title: 'Todo App Example in Nuxt | Can Korkmaz'
    }
  },
  devtools: { enabled: true },

  css:[
    '~/assets/css/global.scss'
  ],
  modules:[
    'nuxt-icon'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins:[

  ]
})
