<template>
  <div class="layout">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app';

// Layout configuration
useHead({
  htmlAttrs: {
    lang: 'fr'
  }
})
</script>

<style scoped>
.layout {
  min-height: 100vh;
  width: 100%;
}
</style>