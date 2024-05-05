// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@vee-validate/nuxt"],
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
