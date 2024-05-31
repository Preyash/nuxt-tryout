// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@vee-validate/nuxt",
    "notivue/nuxt",
    "@unocss/nuxt",
    "vue3-carousel-nuxt",
    "@vite-pwa/nuxt",
  ],
  pwa: {
    manifest: {
      theme_color: "#000000",
      background_color: "#000000",
      display: "fullscreen",
      scope: "/",
      start_url: "/",
      name: "Nuxt App",
      short_name: "NA",
      description: "Tryout out pwa app",
      icons: [
        {
          src: "icons/icon-120x120.png",
          sizes: "120x120",
          type: "image/png",
        },
        {
          src: "icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icons/icon-256x256.png",
          sizes: "256x256",
          type: "image/png",
        },
        {
          src: "icons/icon-384x384.png",
          sizes: "384x384",
          type: "image/png",
        },
        {
          src: "icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  css: [
    "notivue/notification.css",
    "notivue/animations.css",
    "notivue/notification-progress.css",
  ],
  unocss: {
    attributify: true,
    icons: true,
    components: true,
  },
  notivue: {
    position: "bottom-right",
    limit: 4,
    enqueue: true,
    avoidDuplicates: true,
    notifications: {
      global: {
        duration: 2000,
      },
    },
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
  router: {
    middleware: ["auth"],
  },
  globalMiddleware: [
    async (to, from, next) => {
      console.log("Global middleware");
      next();
    },
  ],
  auth: {
    except: ["/vuelidate"],
  },
});
