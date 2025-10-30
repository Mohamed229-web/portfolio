<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <a href="#hero" class="logo">
        <span class="logo-initial">M</span>
        <span class="logo-text">DJIBRILA</span>
      </a>
      <div class="nav-links" :class="{ 'active': menuOpen }">
        <a href="#about" @click="closeMenu">À propos</a>
        <a href="#skills" @click="closeMenu">Compétences</a>
        <a href="#projects" @click="closeMenu">Projets</a>
        <a href="#experience" @click="closeMenu">Expériences</a>
        <a href="#contact" @click="closeMenu" class="contact-btn">Contact</a>
      </div>

      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.5rem 0;
  transition: all 0.3s ease;
  background: transparent;
}

.navbar.scrolled {
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  border-bottom: 1px solid rgba(42, 50, 87, 0.3);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.5rem;
  color: #ffffff;
  transition: all 0.3s ease;
}

.logo:hover {
  color: #2a3257;
}

.logo-initial {
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, #2a3257, #4a5287);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 800;
}

.logo-text {
  letter-spacing: 0.5px;
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  transition: all 0.3s ease;
}

.nav-links a:not(.contact-btn)::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #2a3257;
  transition: width 0.3s ease;
}

.nav-links a:not(.contact-btn):hover::after {
  width: 100%;
}

.contact-btn {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #2a3257, #4a5287);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(42, 50, 87, 0.4);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.menu-toggle span {
  width: 25px;
  height: 2px;
  background: #ffffff;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.98);
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    transition: right 0.3s ease;
    backdrop-filter: blur(20px);
  }

  .nav-links.active {
    right: 0;
  }

  .menu-toggle {
    display: flex;
    z-index: 1001;
  }

  .container {
    padding: 0 1.5rem;
  }
}
</style>