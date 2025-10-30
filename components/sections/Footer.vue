<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="logo">
            <span class="logo-initial">M</span>
            <span class="logo-text">DJIBRILA</span>
          </div>
          <p class="footer-description">
            Développeur FullStack passionné, créant des expériences web modernes
            et performantes.
          </p>
          <div class="footer-socials">
            <a
              href="https://www.linkedin.com/in/mohamed-ibrahim-djibrila"
              target="_blank"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                />
              </svg>
            </a>
            <a
              href="https://github.com/Mohamed229-web"
              target="_blank"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"
                />
              </svg>
            </a>
            <a href="mailto:djibrilaibrahim14@gmail.com" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-links">
          <div class="footer-column">
            <h4>Navigation</h4>
            <a href="#about">À propos</a>
            <a href="#skills">Compétences</a>
            <a href="#projects">Projets</a>
            <a href="#experience">Expériences</a>
          </div>

          <div class="footer-column">
            <h4>Services</h4>
            <a href="#contact">Développement Web</a>
            <a href="#contact">Développement Mobile</a>
            <a href="#contact">DevOps</a>
            <a href="#contact">Consulting</a>
          </div>

          <div class="footer-column">
            <h4>Contact</h4>
            <a href="mailto:djibrilaibrahim14@gmail.com"
              >djibrilaibrahim14@gmail.com</a
            >
            <a href="tel:+33745259857">+33 7 45 25 98 57</a>
            <p>Île-de-France, France</p>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-divider"></div>
        <div class="footer-info">
          <p>
            &copy; {{ currentYear }} Mohamed DJIBRILA. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from "vue";

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
  background: linear-gradient(180deg, transparent, rgba(42, 50, 87, 0.1));
  padding: 4rem 0 2rem;
  margin-top: 4rem;
  border-top: 1px solid rgba(42, 50, 87, 0.3);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer-brand {
  max-width: 400px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  font-size: 1.5rem;
  color: #ffffff;
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

.footer-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.footer-socials {
  display: flex;
  gap: 1rem;
}

.footer-socials a {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(42, 50, 87, 0.2);
  border: 1px solid rgba(42, 50, 87, 0.4);
  border-radius: 10px;
  color: #ffffff;
  transition: all 0.3s ease;
}

.footer-socials a:hover {
  background: #2a3257;
  transform: translateY(-3px);
}

.footer-socials svg {
  width: 20px;
  height: 20px;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.footer-column h4 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2a3257;
}

.footer-column a,
.footer-column p {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  margin-bottom: 0.75rem;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.footer-column a:hover {
  color: #2a3257;
  transform: translateX(5px);
}

.footer-bottom {
  padding-top: 2rem;
}

.footer-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(42, 50, 87, 0.5),
    transparent
  );
  margin-bottom: 2rem;
}

.footer-info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-info p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

.footer-built {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.heart {
  color: #ef4444;
  animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@media (max-width: 968px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .footer-links {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-info {
    flex-direction: column;
    text-align: center;
  }
}
</style>
