<template>
  <div class="portfolio">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
    <Footer />
    <a
      href="https://wa.me/+33758788010"
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-float"
      aria-label="Contactez-moi sur WhatsApp"
    >
      <img :src="WhatsAppPic" alt="WhatsApp" class="whatsapp-icon" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHead } from "nuxt/app";
import Navbar from "~/components/sections/Navbar.vue";
import Hero from "~/components/sections/Hero.vue";
import About from "~/components/sections/About.vue";
import Skills from "~/components/sections/Skills.vue";
import Projects from "~/components/sections/Projects.vue";
import Experience from "~/components/sections/Experience.vue";
import Contact from "~/components/sections/Contact.vue";
import WhatsAppPic from "~/assets/images/whatsApp.webp";
import Footer from "~/components/sections/Footer.vue";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });
  });
});

useHead({
  title: "Mohamed DJIBRILA - Développeur FullStack TypeScript",
  meta: [
    {
      name: "description",
      content:
        "Portfolio de Mohamed DJIBRILA, développeur FullStack spécialisé en TypeScript, React, Vue.js, NestJS et Ruby on Rails",
    },
  ],
});
</script>

<style scoped>
.portfolio {
  width: 100%;
  overflow-x: hidden;
}

.whatsapp-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 1000;
}

.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.whatsapp-icon {
  width: 30px;
  height: 30px;
  filter: brightness(0) invert(1);
}
</style>
