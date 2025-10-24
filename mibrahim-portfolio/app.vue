<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app';

useHead({
  title: 'Mohamed DJIBRILA - Développeur FullStack TypeScript',
  meta: [
    { name: 'description', content: 'Développeur web FullStack spécialisé en TypeScript (React, Vue.js, NestJS), Ruby on Rails et DevOps. Ouvert au CDI et missions freelance.' },
    { name: 'keywords', content: 'développeur fullstack, typescript, react, vue.js, nestjs, ruby on rails, devops, freelance' },
    { property: 'og:title', content: 'Mohamed DJIBRILA - Développeur FullStack TypeScript' },
    { property: 'og:description', content: 'Développeur web FullStack avec 4+ ans d\'expérience' },
    { property: 'og:type', content: 'website' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  background: #b9b9b9;
  color: #ffffff;
  overflow-x: hidden;
}

::selection {
  background: #2a3257;
  color: #ffffff;
}
</style>