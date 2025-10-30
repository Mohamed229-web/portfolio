<template>
  <div class="stat-card">
    <div class="stat-number">{{ number }}</div>
    <div class="stat-label">{{ label }}</div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  number: string;
  label: string;
}>();


</script>

<style scoped>
.stat-card {
  text-align: center;
  padding: 2rem 1rem;
  background: rgba(42, 50, 87, 0.1);
  border: 1px solid rgba(42, 50, 87, 0.3);
  border-radius: 15px;
  transition: all 0.3s ease;
}

.stat-card:hover {
  background: rgba(42, 50, 87, 0.2);
  transform: translateY(-5px);
}

.stat-number {
  font-size: 3rem;
  font-weight: 900;
  color: #2a3257;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}
</style>
