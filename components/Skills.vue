<template>
  <section id="skills" class="skills">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Stack technique</span>
        <h2 class="section-title">Compétences</h2>
        <p class="section-subtitle">Technologies et outils que je maîtrise</p>
      </div>

      <div class="skills-grid">
        <div class="skill-category">
          <div class="category-header">
            <div class="category-icon">🎨</div>
            <h3>Frontend</h3>
          </div>
          <div class="skills-list">
            <div class="skill-item" v-for="skill in frontendSkills" :key="skill.name">
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="skill-category">
          <div class="category-header">
            <div class="category-icon">⚙️</div>
            <h3>Backend</h3>
          </div>
          <div class="skills-list">
            <div class="skill-item" v-for="skill in backendSkills" :key="skill.name">
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="skill-category">
          <div class="category-header">
            <div class="category-icon">🚀</div>
            <h3>DevOps & Déploiement</h3>
          </div>
          <div class="skills-list">
            <div class="skill-item" v-for="skill in devopsSkills" :key="skill.name">
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="skill-category">
          <div class="category-header">
            <div class="category-icon">🛠️</div>
            <h3>Outils & Autres</h3>
          </div>
          <div class="skills-list">
            <div class="skill-item" v-for="skill in toolsSkills" :key="skill.name">
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tech-stack">
        <h3 class="stack-title">Technologies principales</h3>
        <div class="tech-badges">
          <span class="tech-badge">TypeScript</span>
          <span class="tech-badge">React</span>
          <span class="tech-badge">Vue.js</span>
          <span class="tech-badge">NestJS</span>
          <span class="tech-badge">Ruby on Rails</span>
          <span class="tech-badge">Node.js</span>
          <span class="tech-badge">Laravel</span>
          <span class="tech-badge">Docker</span>
          <span class="tech-badge">Tailwind CSS</span>
          <span class="tech-badge">Redux</span>
          <span class="tech-badge">REST API</span>
          <span class="tech-badge">Git</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const frontendSkills = ref([
  { name: 'React', level: 90 },
  { name: 'Vue.js', level: 90 },
  { name: 'TypeScript', level: 95 },
  { name: 'JavaScript', level: 95 },
  { name: 'HTML5 / CSS3', level: 95 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Redux', level: 85 },
  { name: 'Figma', level: 80 },
])

const backendSkills = ref([
  { name: 'NestJS', level: 85 },
  { name: 'Node.js', level: 85 },
  { name: 'Ruby on Rails', level: 80 },
  { name: 'Laravel (PHP)', level: 75 },
  { name: 'REST APIs', level: 90 },
])

const devopsSkills = ref([
  { name: 'Docker', level: 80 },
  { name: 'Docker Swarm', level: 75 },
  { name: 'Traefik', level: 70 },
  { name: 'Linux (Ubuntu)', level: 80 },
  { name: 'Windows Server', level: 70 },
])

const toolsSkills = ref([
  { name: 'Git', level: 90 },
  { name: 'Strapi (CMS)', level: 85 },
  { name: 'SEO', level: 75 },
])

// Detect a custom scroll container (ScrollSmoother / smooth scroll libs)
function detectScroller(): Element | undefined {
  return (
    document.querySelector('.scroll-container') ||
    document.querySelector('#smooth-content') ||
    document.querySelector('#smooth-wrapper') ||
    document.querySelector('[data-scroll-container]') ||
    undefined
  ) as Element | undefined
}

let ctx: gsap.Context | undefined
onMounted(async () => {
  gsap.registerPlugin(ScrollTrigger);
  await nextTick()
  const scroller = detectScroller()

  ctx = gsap.context(() => {
    gsap.from('.skill-category', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true,
        invalidateOnRefresh: true,
        scroller,
      },
    });

    gsap.from('.skill-progress', {
      width: 0,
      duration: 1.5,
      ease: 'power2.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 75%',
        toggleActions: 'play none none none',
        once: true,
        invalidateOnRefresh: true,
        scroller,
      },
    });

    gsap.from('.tech-badge', {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      stagger: 0.05,
      scrollTrigger: {
        trigger: '.tech-stack',
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true,
        invalidateOnRefresh: true,
        scroller,
      },
    });
  });
  queueMicrotask(() => ScrollTrigger.refresh())
})
</script>

<style scoped>
.skills {
  padding: 8rem 0;
  background: linear-gradient(180deg, transparent, rgba(42, 50, 87, 0.05));
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}

.skill-category {
  background: rgba(42, 50, 87, 0.1);
  border: 1px solid rgba(42, 50, 87, 0.3);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.skill-category:hover {
  background: rgba(42, 50, 87, 0.15);
  transform: translateY(-5px);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.category-icon {
  font-size: 2rem;
}

.category-header h3 {
  font-size: 1.5rem;
  font-weight: 700;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-item {
  width: 100%;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
}

.skill-level {
  color: #2a3257;
  font-weight: 700;
  font-size: 0.9rem;
}

.skill-bar {
  width: 100%;
  height: 8px;
  background: rgba(42, 50, 87, 0.2);
  border-radius: 10px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #2a3257, #4a5287);
  border-radius: 10px;
  transition: width 1.5s ease;
}

.tech-stack {
  text-align: center;
  padding: 3rem;
  background: rgba(42, 50, 87, 0.1);
  border: 1px solid rgba(42, 50, 87, 0.3);
  border-radius: 20px;
}

.stack-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.tech-badge {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #2a3257, #4a5287);
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  cursor: default;
}

.tech-badge:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 10px 25px rgba(42, 50, 87, 0.4);
}

@media (max-width: 968px) {
  .skills {
    padding: 5rem 0;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .tech-stack {
    padding: 2rem 1rem;
  }
}
</style>