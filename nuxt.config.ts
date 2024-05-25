// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@vee-validate/nuxt",
    "notivue/nuxt",
  ],
  css: [
    'notivue/notification.css',
    'notivue/animations.css',
    'notivue/notification-progress.css'
  ],
  notivue: {
    position: 'bottom-right',
    limit: 4,
    enqueue: true,
    avoidDuplicates: true,
    notifications: {
      global: {
        duration: 2000
      }
    }
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  veeValidate: {
    autoImports: true,
  },
  runtimeConfig: {
    public: {
      app_id: process.env.APP_ID,
    },
  },
});
