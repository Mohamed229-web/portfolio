<template>
  <section id="projects" class="projects" ref="projectsSection">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Portfolio</span>
        <h2 class="section-title">Mes Projets</h2>
        <p class="section-subtitle">Découvrez mes réalisations récentes</p>
      </div>

      <div class="projects-grid">
        <div
          v-for="(project, index) in projects"
          :key="index" 
          class="project-card"
          @mouseenter="handleHover(index, true)"
          @mouseleave="handleHover(index, false)"
        >
          <div class="project-image">
            <img :src="project.image" :alt="project.title" />
            <div class="project-overlay">
              <a :href="project.demo" target="_blank" class="project-link" v-if="project.demo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                Démo
              </a>
              <a :href="project.github" target="_blank" class="project-link" v-if="project.github">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
                Code
              </a>
            </div>
          </div>
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tech">
              <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const projects = ref([
  {
    title: 'Plateforme E-commerce',
    description: 'Application e-commerce complète avec gestion des produits, panier, paiement et dashboard admin. Interface moderne et performante.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop',
    technologies: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Stripe'],
    demo: '#',
    github: '#'
  },
  {
    title: 'Système de Gestion RH',
    description: 'Solution RH complète pour la gestion des employés, congés, recrutements et évaluations. Dashboard analytique avancé.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    technologies: ['Vue.js', 'NestJS', 'MongoDB', 'Redis'],
    demo: '#',
    github: null
  },
  {
    title: 'Application de Streaming',
    description: 'Plateforme de streaming vidéo avec lecture adaptative, système de recommandations et analytics en temps réel.',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop',
    technologies: ['React', 'Redux', 'Ruby on Rails', 'AWS'],
    demo: '#',
    github: '#'
  },
  {
    title: 'Dashboard Analytics',
    description: 'Dashboard interactif avec visualisations de données en temps réel, exports personnalisés et alertes intelligentes.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    technologies: ['Vue.js', 'TypeScript', 'Node.js', 'D3.js'],
    demo: '#',
    github: '#'
  },
  {
    title: 'CMS Custom',
    description: 'Système de gestion de contenu personnalisé avec éditeur WYSIWYG, gestion multi-langue et SEO avancé.',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop',
    technologies: ['React', 'NestJS', 'PostgreSQL', 'GraphQL'],
    demo: null,
    github: '#'
  },
  {
    title: 'API Gateway',
    description: 'Gateway API robuste avec authentification, rate limiting, caching et monitoring des microservices.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    technologies: ['NestJS', 'Redis', 'Docker', 'Traefik'],
    demo: null,
    github: '#'
  }
])

const handleHover = (index: number, isHovering: boolean) => {
  const card = document.querySelectorAll('.project-card')[index]
  if (isHovering) {
    gsap.to(card, { y: -10, duration: 0.3 })
  } else {
    gsap.to(card, { y: 0, duration: 0.3 })
  }
}

const projectsSection = ref<HTMLElement | null>(null)
let ctx: gsap.Context | undefined

function detectScroller(): Element | undefined {
  return (
    document.querySelector('.scroll-container') ||
    document.querySelector('#smooth-content') ||
    document.querySelector('#smooth-wrapper') ||
    document.querySelector('[data-scroll-container]') ||
    undefined
  ) as Element | undefined
}

onMounted(async () => {
  gsap.registerPlugin(ScrollTrigger)
  await nextTick()
  const scroller = detectScroller()

  ctx = gsap.context(() => {
    gsap.from('.project-card', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true,
        invalidateOnRefresh: true,
        scroller,
      }
    })
  }, projectsSection.value || undefined)

  queueMicrotask(() => ScrollTrigger.refresh())
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped>
.projects {
  padding: 8rem 0;
  position: relative;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(42, 50, 87, 0.2);
  border: 1px solid rgba(42, 50, 87, 0.4);
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #2a3257;
  margin-bottom: 1rem;
}

.section-title {
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 900;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
}

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

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
}

.project-description {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
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

@media (max-width: 968px) {
  .projects {
    padding: 5rem 0;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .project-image {
    height: 200px;
  }

  .project-content {
    padding: 1.5rem;
  }
}
</style>