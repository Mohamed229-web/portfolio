<template>
  <section id="projects" ref="projectsSection">
    <div class="section-container">
      <div class="section-header">
        <span class="section-tag">Portfolio</span>
        <h2 class="section-title">Mes Projets</h2>
        <p class="section-subtitle">
          Découvrez mes réalisations professionnelles et personnelles
        </p>
      </div>

      <!-- Tabs Navigation -->
      <div class="tabs-navigation">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="{ active: activeTab === tab.id }"
          class="tab-button"
          :aria-label="`Afficher ${tab.title}`"
        >
          <component :is="tab.icon" class="tab-icon" />
          <span class="tab-text">
            <span class="tab-title">{{ tab.title }}</span>
            <span class="tab-desc">{{ tab.description }}</span>
          </span>
          <span class="badge-count">{{ tab.count }}</span>
        </button>
      </div>

      <!-- Tab Content -->
      <transition name="fade" mode="out-in">
        <div :key="activeTab" class="tab-content">
          <div v-if="currentProjects.length > 0" class="projects-grid">
            <ProjectCard
              v-for="(project, index) in currentProjects"
              :key="`${activeTab}-${index}`"
              :identity="`${activeTab}-${index}`"
              v-bind="project"
            />
          </div>
          <ProjectsEmptyState v-else />
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, defineComponent, h, type Component } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "../elements/cards/ProjectCard.vue";
import ProjectsEmptyState from "../elements/ProjectsEmptyState.vue";

// Importation des images
import BeSmartPic from "@/assets/images/projects/bsmart.png";
import CalvaryPic from "@/assets/images/projects/calvary.png";
import ExecutivePic from "@/assets/images/projects/executive.png";
import GloryToGodPic from "@/assets/images/projects/GloryToGod.png";
import RejumedPic from "@/assets/images/projects/rejumed.png";
import TheBoostPic from "@/assets/images/projects/TheBoost.png";

// Types
interface Project {
  title: string;
  type?: string;
  status?: string;
  description: string;
  image: string;
  technologies: string[];
  preview?: string;
  github?: string;
}

interface Tab {
  id: string;
  title: string;
  description: string;
  count: number;
  icon: Component;
}

// Icônes SVG comme composants
const BriefcaseIcon = defineComponent({
  name: "BriefcaseIcon",
  setup(_, { attrs }) {
    return () =>
      h(
        "svg",
        { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", ...attrs },
        [
          h("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }),
          h("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }),
          h("line", { x1: "12", y1: "22.08", x2: "12", y2: "12" })
        ]
      );
  },
});

const LayersIcon = defineComponent({
  name: "LayersIcon",
  setup(_, { attrs }) {
    return () =>
      h(
        "svg",
        { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", ...attrs },
        [
          h("path", { d: "M12 2L2 7l10 5 10-5-10-5z" }),
          h("path", { d: "M2 17l10 5 10-5M2 12l10 5 10-5" })
        ]
      );
  },
});

// État
const activeTab = ref<string>("clients");
const projectsSection = ref<HTMLElement | null>(null);

// Données des projets
const clientProjects = ref<Project[]>([
  {
    title: "Site Vitrine BeSmart",
    type: "Site Web",
    description:
      "Site vitrine pour BeSmart, intégrant animations modernes, formulaire de contact dynamique et optimisation SEO avancée pour une visibilité accrue en ligne.",
    image: BeSmartPic,
    technologies: ["Nuxt", "TypeScript", "GSAP", "TailwindCSS"],
    preview: "https://bsmartmiami.com",
  },
  {
    title: "Site Vitrine Calvary Church",
    type: "Site Web",
    description:
      "Site vitrine pour Calvary Church, mettant en avant les services offerts, les témoignages et les événements à venir.",
    image: CalvaryPic,
    technologies: ["Laravel", "Inertia.js", "React", "Strapi"],
    preview: "https://calvaryconnect.com",
  },
  {
    title: "Site Vitrine Executive Services",
    type: "Site Web",
    description:
      "Site vitrine pour Executive Services, avec design professionnel, sections interactives et intégration de formulaires de contact pour générer des leads.",
    image: ExecutivePic,
    technologies: ["Laravel", "Inertia.js", "React", "Strapi"],
    preview: "https://executiveservices.fr",
  },
  {
    title: "Site Web Glory To God",
    type: "Site Web",
    description:
      "Site vitrine pour Glory To God, présentant les services offerts, l'équipe médicale et des ressources pour les patients.",
    image: GloryToGodPic,
    technologies: ["Laravel", "Inertia.js", "React", "Strapi"],
    preview: "https://glorytogodppec.com",
  },
  {
    title: "Site Vitrine Rejumed Aesthetic",
    type: "Site Web",
    description:
      "Site vitrine pour Rejumed Aesthetic, intégrant des galeries d'images, des descriptions de services et un système de prise de rendez-vous en ligne.",
    image: RejumedPic,
    technologies: ["Laravel", "Inertia.js", "Vue.js", "Strapi"],
    preview: "https://rejumedaesthetics.com",
  },
  {
    title: "Site Vitrine The Boost",
    type: "Site Web",
    description:
      "Site vitrine pour The Boost, avec design moderne, sections interactives et optimisation SEO pour améliorer la visibilité en ligne.",
    image: TheBoostPic,
    technologies: ["Laravel", "Inertia.js", "Vue.js", "Strapi"],
    preview: "https://theboostrentals.com",
  },
]);

const personalProjects = ref<Project[]>([]);

// Computed
const tabs = computed<Tab[]>(() => [
  {
    id: "clients",
    title: "Projets Clients",
    description: "Sites & applications web",
    count: clientProjects.value.length,
    icon: BriefcaseIcon,
  },
  {
    id: "personal",
    title: "Solutions Numériques",
    description: "Projets personnels & open-source",
    count: personalProjects.value.length,
    icon: LayersIcon,
  },
]);

const currentProjects = computed<Project[]>(() => {
  return activeTab.value === "clients"
    ? clientProjects.value
    : personalProjects.value;
});

// Lifecycle & Animations
let ctx: gsap.Context | undefined;

const detectScroller = (): Element | undefined => {
  return (
    document.querySelector(".scroll-container") ||
    document.querySelector("#smooth-content") ||
    document.querySelector("#smooth-wrapper") ||
    document.querySelector("[data-scroll-container]") ||
    undefined
  ) as Element | undefined;
};

const initAnimations = async () => {
  gsap.registerPlugin(ScrollTrigger);
  await nextTick();
  const scroller = detectScroller();

  ctx = gsap.context(() => {
    gsap.from(".project-card", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 85%",
        toggleActions: "play none none none",
        once: true,
        invalidateOnRefresh: true,
        scroller,
      },
    });
  }, projectsSection.value || undefined);

  queueMicrotask(() => ScrollTrigger.refresh());
};

onMounted(initAnimations);
onUnmounted(() => ctx?.revert());
</script>

<style scoped>
/* Tabs Navigation */
.tabs-navigation {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;
  justify-content: center;
  flex-wrap: wrap;
}

.tab-button {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background: rgba(42, 50, 87, 0.1);
  border: 2px solid rgba(42, 50, 87, 0.3);
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  min-width: 280px;
}

.tab-button::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(42, 50, 87, 0.2),
    transparent
  );
  transform: translateX(-100%);
  transition: transform 0.5s ease;
}

.tab-button:hover::before {
  transform: translateX(100%);
}

.tab-icon {
  width: 32px;
  height: 32px;
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.3s ease;
  flex-shrink: 0;
}

.tab-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  flex: 1;
}

.tab-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s ease;
}

.tab-desc {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.3s ease;
}

.badge-count {
  padding: 0.4rem 0.8rem;
  background: rgba(42, 50, 87, 0.3);
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 700;
  color: #2a3257;
  transition: all 0.3s ease;
}

.tab-button:hover {
  border-color: rgba(42, 50, 87, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(42, 50, 87, 0.3);
}

.tab-button:active {
  transform: translateY(0);
}

.tab-button.active {
  background: linear-gradient(
    135deg,
    rgba(42, 50, 87, 0.3),
    rgba(74, 82, 135, 0.3)
  );
  border-color: #2a3257;
}

.tab-button.active .tab-icon {
  color: #2a3257;
}

.tab-button.active .tab-title {
  color: #ffffff;
}

.tab-button.active .tab-desc {
  color: rgba(255, 255, 255, 0.7);
}

.tab-button.active .badge-count {
  background: #2a3257;
  color: #ffffff;
}

/* Tab Content */
.tab-content {
  animation: fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(400px, 100%), 1fr));
  gap: 2rem;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Responsive */
@media (max-width: 968px) {
  .tabs-navigation {
    flex-direction: column;
    gap: 1rem;
  }

  .tab-button {
    min-width: auto;
    width: 100%;
  }

  .projects-grid {
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .tab-button {
    padding: 1.2rem 1.5rem;
  }

  .tab-icon {
    width: 28px;
    height: 28px;
  }

  .tab-title {
    font-size: 1rem;
  }

  .tab-desc {
    font-size: 0.8rem;
  }

  .projects-grid {
    gap: 1rem;
  }
}

/* Préférence de mouvement réduit */
@media (prefers-reduced-motion: reduce) {
  .tab-button,
  .tab-content,
  .fade-enter-active,
  .fade-leave-active {
    transition: none;
    animation: none;
  }
}
</style>