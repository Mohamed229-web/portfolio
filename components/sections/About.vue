<template>
  <section id="about" ref="aboutSection">
    <div class="section-container">
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
            <AboutStatCard number="4+" label="Années d'expérience" />
            <AboutStatCard number="15+" label="Projets réalisés" />
            <AboutStatCard number="100%" label="Clients satisfaits" />
          </div>
        </div>

        <div class="about-highlights">
          <AboutHighlightCard
            icon="💼"
            title="Statut actuel"
            description="Recherche un poste en CDI"
            subDescription="Ouvert aux missions freelance"
          />
          <AboutHighlightCard
            icon="🚀"
            title="Expertise technique"
            description="FullStack TypeScript (React/Vue + NestJS)"
            subDescription="Ruby on Rails • DevOps Junior"
          />
          <AboutHighlightCard
            icon="🎯"
            title="Vision entrepreneuriale"
            description="Approche produit & business"
            subDescription="Développement stratégique"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutStatCard from "../elements/cards/AboutStatCard.vue";
import AboutHighlightCard from "../elements/cards/AboutHighlightCard.vue";

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

.about-highlights {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
