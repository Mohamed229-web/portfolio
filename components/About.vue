<template>
  <section id="about" class="about" ref="aboutSection">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Qui suis-je</span>
        <h2 class="section-title">À propos</h2>
      </div>

      <div class="about-content">
        <div class="about-text">
          <p class="lead">
            Développeur web passionné avec
            <strong>plus de 4 ans d'expérience</strong> dans le développement
            d'applications web modernes et performantes.
          </p>
          <p>
            Ma spécialisation en <strong>TypeScript</strong> me permet de créer
            des architectures robustes et maintenables, que ce soit en frontend
            avec <strong>React</strong> et <strong>Vue.js</strong>, ou en
            backend avec <strong>NestJS</strong>. Je maîtrise également
            <strong>Ruby on Rails</strong> pour des développements rapides et
            efficaces.
          </p>

          <p>
            En tant que <strong>DevOps Junior</strong>, j'assure le déploiement
            complet des solutions web (Docker, Docker Swarm, Traefik, Linux).
            Mon expérience couvre l'intégration de maquettes, le développement
            d'interfaces performantes, la création d'API REST et la mise en
            production.
          </p>

          <p>
            Ma <strong>vision entrepreneuriale</strong> me permet d'appréhender
            les projets avec une approche produit et business. Cette double
            casquette développeur-entrepreneur me permet de mieux comprendre les
            enjeux métier et de proposer des solutions techniques alignées avec
            les objectifs business.
          </p>

          <div class="about-stats">
            <div class="stat-card">
              <div class="stat-number">4+</div>
              <div class="stat-label">Années d'expérience</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">15+</div>
              <div class="stat-label">Projets réalisés</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">100%</div>
              <div class="stat-label">Clients satisfaits</div>
            </div>
          </div>
        </div>

        <div class="about-highlights">
          <div class="highlight-card">
            <div class="icon">💼</div>
            <h3>Statut actuel</h3>
            <p>Recherche CDI dès septembre 2025</p>
            <p class="sub">Ouvert aux missions freelance</p>
          </div>

          <div class="highlight-card">
            <div class="icon">🚀</div>
            <h3>Expertise technique</h3>
            <p>FullStack TypeScript (React/Vue + NestJS)</p>
            <p class="sub">Ruby on Rails • DevOps Junior</p>
          </div>

          <div class="highlight-card">
            <div class="icon">🎯</div>
            <h3>Vision entrepreneuriale</h3>
            <p>Approche produit & business</p>
            <p class="sub">Développement stratégique</p>
          </div>

          <div class="highlight-card">
            <div class="icon">🌍</div>
            <h3>Localisation</h3>
            <p>Île-de-France, France</p>
            <p class="sub">Disponible pour télétravail/hybride</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const aboutSection = ref<HTMLElement | null>(null);
let ctx: gsap.Context | undefined;

onMounted(async () => {
  gsap.registerPlugin(ScrollTrigger);
  await nextTick();

  ctx = gsap.context(() => {
    gsap.from(".about-text", {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 80%",
      },
    });

    gsap.from(".about-highlights", {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-highlights",
        start: "top 80%",
      },
    });

    gsap.from(".stat-card", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: ".about-stats",
        start: "top 95%",
        end: "bottom 70%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  }, aboutSection.value || undefined);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>

<style scoped>
.about {
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

.about-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
}

.lead {
  font-size: 1.3rem !important;
  color: rgba(255, 255, 255, 0.9) !important;
  margin-bottom: 2rem !important;
}

strong {
  color: #2a3257;
  font-weight: 600;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
}

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

.about-highlights {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

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

@media (max-width: 968px) {
  .about {
    padding: 5rem 0;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about-stats {
    grid-template-columns: 1fr;
  }
}
</style>
