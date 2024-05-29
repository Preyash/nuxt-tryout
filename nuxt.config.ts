// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@vee-validate/nuxt',
    "vue3-carousel-nuxt"
  ],
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  veeValidate: {
    autoImports: true,
  },
  runtimeConfig: {
    public: {
      app_id: process.env.APP_ID,
    },
  },
  router: {
    middleware: ['auth'],
  },
  globalMiddleware: [
    async (to, from, next) => {
      console.log('Global middleware')
      next()
    },
  ],
  auth: {
    except: ['/vuelidate'],
  },
})