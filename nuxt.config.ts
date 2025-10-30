import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || "/",
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Mohamed DJIBRILA - Développeur FullStack TypeScript",
      meta: [
        {
          name: "description",
          content:
            "Portfolio de Mohamed DJIBRILA, développeur web FullStack spécialisé en TypeScript (React, Vue.js, NestJS), Ruby on Rails et DevOps",
        },
        {
          name: "keywords",
          content:
            "développeur fullstack, typescript, react, vue.js, nestjs, ruby on rails, devops, freelance, développeur web",
        },
        { name: "author", content: "Mohamed DJIBRILA" },
        {
          property: "og:title",
          content: "Mohamed DJIBRILA - Développeur FullStack",
        },
        {
          property: "og:description",
          content: "Développeur web FullStack avec 4+ ans d'expérience",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://mohamed-djibrila.info" },
        {
          property: "og:image",
          content: "https://mohamed-djibrila.info/profile.jpg",
        },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Mohamed DJIBRILA - Développeur FullStack",
        },
        {
          name: "twitter:description",
          content: "Développeur web FullStack avec 4+ ans d'expérience",
        },
        { name: "theme-color", content: "#2a3257" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://mohamed-djibrila.info" },
      ],
    },
  },

  css: ["./assets/css/tailwind.css"],

  modules: [
    [
      "@nuxt/image",
      {
        quality: 80,
        formats: ["webp", "avif", "jpeg", "png"],
        provider: "static",
      },
    ],
    ["@nuxtjs/tailwindcss"],
  ],

  ssr: false,

  nitro: {
    preset: process.env.NITRO_PRESET || "github_pages",
  },

  runtimeConfig: { public: { siteUrl: "https://mohamed-djibrila.info" } },

  experimental: { payloadExtraction: false },

  typescript: { strict: true, shim: false },

  vite: {
    build: { assetsInlineLimit: 0 },
  },

  build: {
    transpile: ["gsap"],
  },

  routeRules: { "/": { prerender: true } },

  compatibilityDate: "2025-01-24",
});
