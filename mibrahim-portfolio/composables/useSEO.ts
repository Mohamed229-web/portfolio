import { useHead, useRuntimeConfig } from "nuxt/app";

export const useSEO = (config?: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}) => {
  const runtimeConfig = useRuntimeConfig();
  const siteUrl = runtimeConfig.public.siteUrl || "https://votre-domaine.com";

  const title =
    config?.title || "Mohamed DJIBRILA - Développeur FullStack TypeScript";
  const description =
    config?.description ||
    "Portfolio de Mohamed DJIBRILA, développeur web FullStack spécialisé en TypeScript (React, Vue.js, NestJS), Ruby on Rails et DevOps. Ouvert au CDI et missions freelance.";
  const image = config?.image || `${siteUrl}/og-image.jpg`;
  const url = config?.url || siteUrl;

  useHead({
    title,
    meta: [
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: image },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    link: [{ rel: "canonical", href: url }],
  });
};
