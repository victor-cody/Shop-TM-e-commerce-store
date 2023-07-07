// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@storyblok/nuxt",
      { accessToken: process.env.NUXT_STORYBLOK_API_ACCESS_TOKEN },
    ],
  ],
  devtools: { enabled: true },
});
