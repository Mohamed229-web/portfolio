<template>
  <section id="hero" class="hero">
    <div class="hero-bg">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="grid-overlay"></div>
    </div>

    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <p class="greeting">Bonjour, je suis</p>
          <h1 class="hero-title">
            <span class="name">Mohamed DJIBRILA</span>
          </h1>
          <h2 class="hero-subtitle">
            <span class="typing-text">Développeur FullStack TypeScript</span>
          </h2>
          <p class="hero-description">
            Passionné par le développement web avec plus de 4 ans d'expérience. 
            Spécialisé en <span class="highlight">React</span>, <span class="highlight">Vue.js</span>, 
            <span class="highlight">NestJS</span> et <span class="highlight">Ruby on Rails</span>.
            Profil DevOps Junior avec une vision entrepreneuriale forte.
          </p>
          <div class="hero-badges">
            <span class="badge">💼 Ouvert au CDI</span>
            <span class="badge">🚀 Freelance disponible</span>
          </div>

          <div class="hero-cta">
            <a href="#contact" class="btn-primary">Me contacter</a>
            <a href="#projects" class="btn-secondary">Voir mes projets</a>
          </div>

          <div class="hero-socials">
            <a href="https://www.linkedin.com/in/mohamed-ibrahim-djibrila" target="_blank" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            </a>
            <a href="https://github.com/mohamed-djibrila" target="_blank" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
            </a>
            <a href="mailto:djibrilaibrahim14@gmail.com" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
          </div>
        </div>

        <div class="hero-image">
          <div class="image-wrapper">
            <div class="image-glow"></div>
            <img :src="ProfileImage" alt="Mohamed Ibrahim DJIBRILA" />
          </div>
        </div>
      </div>

      <div class="scroll-indicator">
        <span>Scroll</span>
        <div class="mouse">
          <div class="wheel"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import ProfileImage from '~/assets/images/profile.jpg'

onMounted(() => {
  const tl = gsap.timeline()
  
  tl.from('.greeting', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' })
    .from('.hero-title', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.4')
    .from('.hero-subtitle', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.4')
    .from('.hero-description', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.4')
    .from('.hero-badges', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.4')
    .from('.hero-cta', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.4')
    .from('.hero-socials', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.4')
    .from('.hero-image', { opacity: 0, x: 50, duration: 1, ease: 'power3.out' }, '-=1')
  // Animate gradient orbs
  gsap.to('.orb-1', {
    x: 100,
    y: 50,
    duration: 20,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })
  
  gsap.to('.orb-2', {
    x: -100,
    y: -50,
    duration: 15,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })
})
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 8rem 0 4rem;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.3;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #2a3257, transparent);
  top: -10%;
  right: 10%;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #4a5287, transparent);
  bottom: -10%;
  left: 10%;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(42, 50, 87, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(42, 50, 87, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.greeting {
  font-size: 1.1rem;
  color: #2a3257;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.name {
  background: linear-gradient(135deg, #ffffff, #2a3257);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #2a3257;
}

.typing-text {
  display: inline-block;
  border-right: 3px solid #2a3257;
  padding-right: 5px;
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0%, 100% { border-color: transparent; }
  50% { border-color: #2a3257; }
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
}

.highlight {
  color: #2a3257;
  font-weight: 600;
}

.hero-badges {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.badge {
  padding: 0.5rem 1rem;
  background: rgba(42, 50, 87, 0.2);
  border: 1px solid rgba(42, 50, 87, 0.4);
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
  padding: 1rem 2rem;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: linear-gradient(135deg, #2a3257, #4a5287);
  color: #ffffff;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(42, 50, 87, 0.5);
}

.btn-secondary {
  background: transparent;
  color: #ffffff;
  border: 2px solid #2a3257;
}

.btn-secondary:hover {
  background: rgba(42, 50, 87, 0.2);
  transform: translateY(-3px);
}

.hero-socials {
  display: flex;
  gap: 1rem;
}

.hero-socials a {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(42, 50, 87, 0.2);
  border: 1px solid rgba(42, 50, 87, 0.4);
  border-radius: 10px;
  color: #ffffff;
  transition: all 0.3s ease;
}

.hero-socials a:hover {
  background: #2a3257;
  transform: translateY(-3px);
}

.hero-socials svg {
  width: 24px;
  height: 24px;
}

.hero-image {
  position: relative;
}

.image-wrapper {
  position: relative;
  max-width: 400px;
  margin: 0 auto;
}

.image-glow {
  position: absolute;
  inset: -20px;
  background: linear-gradient(135deg, #2a3257, #4a5287);
  border-radius: 20px;
  filter: blur(30px);
  opacity: 0.4;
  z-index: -1;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  border: 2px solid rgba(42, 50, 87, 0.5);
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  animation: bounce 2s infinite;
}

.mouse {
  width: 25px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  position: relative;
}

.wheel {
  width: 3px;
  height: 8px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 1.5s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(10px); }
}

@keyframes scroll {
  0% { top: 8px; opacity: 1; }
  100% { top: 24px; opacity: 0; }
}

@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-image {
    order: -1;
  }

  .image-wrapper {
    max-width: 300px;
  }

  .hero-cta, .hero-socials, .hero-badges {
    justify-content: center;
  }

  .hero {
    padding: 6rem 0 3rem;
  }
}
</style>