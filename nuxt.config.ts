import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // App configuration
  app: {
    baseURL: "/portfolio/",
    buildAssetsDir: "/_nuxt/",
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
          content: "https://mohamed-djibrila.info/portfolio/profile.jpg",
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
        { rel: "icon", type: "image/x-icon", href: "/portfolio/favicon.ico" },
        { rel: "canonical", href: "https://mohamed-djibrila.info" },
      ],
    },
  },

  // CSS
  css: ["~/assets/css/main.css"],

  // PostCSS
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Modules
  modules: [
    [
      "@nuxtjs/tailwindcss",
      {
        cssPath: "~/assets/css/tailwind.css",
        configPath: "tailwind.config",
        exposeConfig: false,
        viewer: true,
      },
    ],
    [
      "@nuxt/image",
      {
        quality: 80,
        formats: ["webp", "avif", "jpeg", "png"],
        provider: "static",
      },
    ],
  ],

  // SSR configuration
  ssr: false,

  // Nitro configuration
  nitro: {
    preset: "static",
    output: {
      publicDir: ".output/public",
    },
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ["/"],
      failOnError: false,
    },
  },

  // Runtime config
  runtimeConfig: {
    public: {
      siteUrl: "https://mohamed-djibrila.info",
    },
  },

  // Experimental features
  experimental: {
    payloadExtraction: false,
  },

  // TypeScript
  typescript: {
    strict: true,
    shim: false,
  },

  // Build configuration
  build: {
    transpile: ["gsap"],
  },

  // Vite configuration pour les chemins d'assets
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
    base: "/portfolio/",
  },

  // Performance optimizations
  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2025-01-24",
});
