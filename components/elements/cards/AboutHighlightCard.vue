<template>
  <div class="highlight-card">
    <div class="icon">{{ props.icon }}</div>
    <h3>{{ props.title }}</h3>
    <p>{{ props.description }}</p>
    <p class="sub">{{ props.subDescription }}</p>
  </div>
</template>
<script setup lang="ts">

const props = defineProps<{
  icon: string;
  title: string;
  description: string;
  subDescription: string;
}>();

</script>

<style scoped>
.highlight-card {
  padding: 2rem;
  background: rgba(42, 50, 87, 0.1);
  border: 1px solid rgba(42, 50, 87, 0.3);
  border-radius: 15px;
  transition: all 0.3s ease;
}

.highlight-card:hover {
  background: rgba(42, 50, 87, 0.2);
  transform: translateX(10px);
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.highlight-card h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.highlight-card p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.3rem;
}

.sub {
  font-size: 0.9rem !important;
  color: rgba(255, 255, 255, 0.6) !important;
}

</style>
