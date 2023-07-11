export default defineNuxtConfig({
  app: {
    head: {
      title: "E-commerce Shope with Nuxt and Storyblok",
    },
  },
  css: ["@/assets/css/tailwind.css"],
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.NUXT_STORYBLOK_API_ACCESS_TOKEN,
        apiOptions: {
          region: "", // Set 'US" if your space is created in US region (EU default)
        },
      },
    ],
    "@nuxtjs/tailwindcss",
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  devtools: { enabled: true },
  vite: {
    optimizeDeps: { exclude: ["fsevents"] },
  },
});
