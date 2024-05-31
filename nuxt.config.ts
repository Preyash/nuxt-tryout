// https://nuxt.com/docs/api/configuration/nuxt-config

import process from "node:process";

const sw = process.env.SW === "true";

export default defineNuxtConfig({
  devtools: { enabled: false },
  imports: {
    autoImport: true,
  },
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
      strategies: sw ? "injectManifest" : "generateSW",
      srcDir: sw ? "service-worker" : undefined,
      filename: sw ? "sw.ts" : undefined,
      registerType: "autoUpdate",
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    injectManifest: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 3600,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/],
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
