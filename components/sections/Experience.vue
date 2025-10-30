<template>
  <section id="experience" class="experience">
    <div class="section-container">
      <div class="section-header">
        <span class="section-tag">Parcours</span>
        <h2 class="section-title">Expériences Professionnelles</h2>
        <p class="section-subtitle">Mon parcours professionnel</p>
      </div>

      <div class="timeline">
        <div 
          v-for="(exp, index) in experiences" 
          :key="index" 
          class="timeline-item"
          :class="{ 'timeline-left': index % 2 === 0, 'timeline-right': index % 2 !== 0 }"
        >
          <div class="timeline-marker">
            <div class="marker-dot"></div>
          </div>
          <div class="timeline-content">
            <div class="exp-header">
              <div class="exp-period">{{ exp.period }}</div>
              <div class="exp-company">{{ exp.company }}</div>
            </div>
            <h3 class="exp-title">{{ exp.title }}</h3>
            <ul class="exp-tasks">
              <li v-for="(task, idx) in exp.tasks" :key="idx">{{ task }}</li>
            </ul>
            <div class="exp-tech">
              <span v-for="tech in exp.technologies" :key="tech" class="tech-badge">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="education">
        <h3 class="education-title">🎓 Formation</h3>
        <div class="education-card">
          <div class="education-degree">Master Informatique</div>
          <div class="education-speciality">Programmation, Sûreté et Sécurité</div>
          <div class="education-school">Université Sorbonne Paris Nord</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const experiences = ref([
  {
    period: '03/2025 - 08/2025',
    company: 'Canal+ Group',
    title: 'Développeur Web Frontend',
    tasks: [
      'Conception UI/UX via Figma pour améliorer l\'expérience utilisateur',
      'Développement d\'interfaces avec React et Redux Toolkit',
      'Intégration du système d\'authentification via Okta',
      'Optimisation des performances et responsive design'
    ],
    technologies: ['React', 'Redux Toolkit', 'TypeScript', 'Figma', 'Okta']
  },
  {
    period: '05/2022 - 02/2025',
    company: 'B-smart Digital',
    title: 'Développeur Web Freelance',
    tasks: [
      'Intégration de maquettes Figma en HTML/CSS/JS avec Vue.js et React',
      'Développement full-stack avec Laravel et Inertia.js',
      'Mise en place de CMS (Strapi) pour la gestion des contenus',
      'Déploiement complet des projets (Linux, DNS, base de données, serveurs mail)',
      'Gestion de multiples projets clients en parallèle'
    ],
    technologies: ['Vue.js', 'React', 'Laravel', 'Strapi', 'Docker', 'Linux']
  },
  {
    period: '02/2022 - 09/2023',
    company: 'EverPartners',
    title: 'Développeur Web',
    tasks: [
      'Maintenance et refonte de plateformes web existantes',
      'Conception d\'applications complètes avec Ruby on Rails',
      'Communication directe avec les clients pour le recueil des besoins',
      'Implémentation de fonctionnalités complexes et optimisation',
      'Gestion de base de données et API REST'
    ],
    technologies: ['Ruby on Rails', 'PostgreSQL', 'JavaScript', 'REST API']
  },
  {
    period: '03/2021 - 06/2021',
    company: 'DYRA',
    title: 'Développeur Web',
    tasks: [
      'Développement front-end avec Angular',
      'Tâches de support technique informatique',
      'Participation aux sprints agiles',
      'Tests et débogage d\'applications'
    ],
    technologies: ['Angular', 'TypeScript', 'HTML/CSS']
  }
])

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  
  gsap.from('.timeline-item', {
    opacity: 0,
    x: (index) => index % 2 === 0 ? -50 : 50,
    duration: 0.8,
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.timeline',
      start: 'top 80%',
    }
  })

  gsap.from('.education-card', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.education',
      start: 'top 80%',
    }
  })
})
</script>

<style scoped>
.experience {
  background: linear-gradient(180deg, rgba(42, 50, 87, 0.05), transparent);
}

.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto 3rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #2a3257, transparent);
  transform: translateX(-50%);
}

.timeline-item {
  display: flex;
  margin-bottom: 4rem;
  position: relative;
}

.timeline-left {
  flex-direction: row;
}

.timeline-right {
  flex-direction: row-reverse;
}

.timeline-marker {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.marker-dot {
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #2a3257, #4a5287);
  border: 4px solid #000000;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(42, 50, 87, 0.5);
}

.timeline-content {
  width: calc(50% - 40px);
  background: rgba(42, 50, 87, 0.1);
  border: 1px solid rgba(42, 50, 87, 0.3);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.timeline-left .timeline-content {
  margin-right: auto;
}

.timeline-right .timeline-content {
  margin-left: auto;
}

.timeline-content:hover {
  background: rgba(42, 50, 87, 0.15);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(42, 50, 87, 0.3);
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.exp-period {
  padding: 0.4rem 0.8rem;
  background: rgba(42, 50, 87, 0.3);
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #2a3257;
}

.exp-company {
  font-weight: 700;
  color: #2a3257;
  font-size: 1.1rem;
}

.exp-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
}

.exp-tasks {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.exp-tasks li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.exp-tasks li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: #2a3257;
  font-size: 1.2rem;
  font-weight: 700;
}

.exp-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  padding: 0.4rem 0.8rem;
  background: rgba(42, 50, 87, 0.3);
  border: 1px solid rgba(42, 50, 87, 0.5);
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #2a3257;
}

.education {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.education-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.education-card {
  background: rgba(42, 50, 87, 0.1);
  border: 1px solid rgba(42, 50, 87, 0.3);
  border-radius: 20px;
  padding: 3rem;
  transition: all 0.3s ease;
}

.education-card:hover {
  background: rgba(42, 50, 87, 0.15);
  transform: translateY(-5px);
}

.education-degree {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2a3257;
  margin-bottom: 0.5rem;
}

.education-speciality {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;
}

.education-school {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 968px) {
  .timeline::before {
    left: 20px;
  }

  .timeline-item {
    flex-direction: row !important;
  }

  .timeline-marker {
    left: 20px;
  }

  .timeline-content {
    width: calc(100% - 60px);
    margin-left: 60px !important;
  }

  .education-card {
    padding: 2rem;
  }
}
</style>