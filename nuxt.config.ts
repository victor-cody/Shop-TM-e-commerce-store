// import { RuntimeConfig } from "nuxt/schema";

export default defineNuxtConfig({
  app: {
    head: {
      title: "E-commerce Shope with Nuxt and Storyblok",
      link: [
        { rel: "preconnect", href: "https://app.snipcart.com" },
        { rel: "preconnect", href: "https://cdn.snipcart.com" },
        {
          rel: "stylesheet",
          href: "https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css",
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
      script: [
        { src: "https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js" },
      ],
    },
  },
  css: ["@/assets/css/tailwind.css"],
  runtimeConfig: {
    storyblokAccessToken: process.env.NUXT_STORYBLOK_API_ACCESS_TOKEN,
    public: {
      storyblokAppMode: process.env.NUXT_PUBLIC_STORYBLOK_APP_MODE,
      snipcartApiKey: process.env.NUXT_PUBLIC_SNIPCART_API_KEY,
    },
  },
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
  vite: {
    optimizeDeps: { exclude: ["fsevents"] },
  },
});
