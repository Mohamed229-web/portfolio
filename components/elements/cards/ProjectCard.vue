<template>
  <div
    class="project-card"
    @mouseenter="handleHover(identity, true)"
    @mouseleave="handleHover(identity, false)"
  >
    <div class="project-image">
      <img :src="props.image" :alt="props.title" />
      <div class="project-overlay">
        <a
          :href="props.preview"
          target="_blank"
          class="project-link"
          v-if="props.preview"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
            />
            <path
              d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
            />
          </svg>
          Voir
        </a>
        <a
          :href="props.github"
          target="_blank"
          class="project-link"
          v-if="props.github"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"
            />
          </svg>
          Code
        </a>
      </div>
    </div>
    <div class="project-content">
      <div class="project-header">
        <h3 class="project-title">{{ props.title }}</h3>
        <span class="project-type" v-if="props.type">{{ props.type }}</span>
      </div>
      <p class="project-description">{{ props.description }}</p>
      <div class="project-meta" v-if="props.client">
        <div class="meta-item">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span>{{ props.client }}</span>
        </div>
      </div>
      <div class="project-tech">
        <span v-for="tech in props.technologies" :key="tech" class="tech-tag">
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";

const props = defineProps<{
  identity: string;
  title: string;
  description: string;
  image: string;
  preview?: string | null;
  github?: string | null;
  client?: string;
  type?: string;
  technologies: string[];
}>();

const handleHover = (cardKey: string, isHovering: boolean) => {
  const card =
    document.querySelector(`[data-card="${cardKey}"]`) ||
    document.querySelectorAll(".project-card")[parseInt(cardKey.split("-")[1])];
  if (card) {
    gsap.to(card, { y: isHovering ? -10 : 0, duration: 0.3 });
  }
};
</script>

<style scoped>
.project-card {
  background: rgba(42, 50, 87, 0.1);
  border: 1px solid rgba(42, 50, 87, 0.3);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}

.project-card:hover {
  border-color: rgba(42, 50, 87, 0.6);
}

.project-image {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #2a3257;
  color: #ffffff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.project-link:hover {
  background: #4a5287;
  transform: translateY(-2px);
}

.project-link svg {
  width: 20px;
  height: 20px;
}

.project-content {
  padding: 2rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  flex: 1;
}

.project-type,
.project-status {
  padding: 0.4rem 0.8rem;
  background: rgba(42, 50, 87, 0.3);
  border: 1px solid rgba(42, 50, 87, 0.5);
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #2a3257;
  white-space: nowrap;
}

.project-status {
  background: rgba(34, 197, 94, 0.1);
  border-color: rgba(34, 197, 94, 0.3);
  color: rgb(34, 197, 94);
}

.project-description {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
}

.project-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
}

.meta-item svg {
  width: 16px;
  height: 16px;
  color: #2a3257;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  padding: 0.4rem 0.8rem;
  background: rgba(42, 50, 87, 0.3);
  border: 1px solid rgba(42, 50, 87, 0.5);
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #2a3257;
}

@media (max-width: 480px) {
  .project-image {
    height: 200px;
  }

  .project-content {
    padding: 1.5rem;
  }

  .project-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .project-type,
  .project-status {
    align-self: flex-start;
  }
}
</style>
