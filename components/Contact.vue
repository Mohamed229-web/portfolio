<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Restons en contact</span>
        <h2 class="section-title">Me Contacter</h2>
        <p class="section-subtitle">Intéressé par une collaboration ? Discutons de votre projet !</p>
      </div>

      <div class="contact-content">
        <div class="contact-info">
          <div class="info-header">
            <h3>Parlons de votre projet</h3>
            <p>Je suis ouvert aux opportunités en CDI à partir de septembre 2025 ainsi qu'aux missions freelance.</p>
          </div>

          <div class="contact-cards">
            <a href="mailto:djibrilaibrahim14@gmail.com" class="contact-card">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div class="card-content">
                <div class="card-label">Email</div>
                <div class="card-value">djibrilaibrahim14@gmail.com</div>
              </div>
            </a>

            <a href="tel:+33745259857" class="contact-card">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div class="card-content">
                <div class="card-label">Téléphone</div>
                <div class="card-value">+33 7 45 25 98 57</div>
              </div>
            </a>

            <div class="contact-card">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div class="card-content">
                <div class="card-label">Localisation</div>
                <div class="card-value">Île-de-France, France</div>
              </div>
            </div>

            <a href="https://www.linkedin.com/in/mohamed-ibrahim-djibrila" target="_blank" class="contact-card">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </div>
              <div class="card-content">
                <div class="card-label">LinkedIn</div>
                <div class="card-value">mohamed-ibrahim-djibrila</div>
              </div>
            </a>
          </div>

          <div class="availability">
            <div class="availability-badge">
              <span class="status-dot"></span>
              Disponible pour de nouveaux projets
            </div>
          </div>
        </div>

        <div class="contact-form-wrapper">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <label for="name">Nom complet</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                placeholder="Votre nom"
                required
              />
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                placeholder="votre.email@exemple.com"
                required
              />
            </div>

            <div class="form-group">
              <label for="subject">Sujet</label>
              <input 
                type="text" 
                id="subject" 
                v-model="form.subject" 
                placeholder="Sujet de votre message"
                required
              />
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                rows="6"
                placeholder="Décrivez votre projet ou votre demande..."
                required
              ></textarea>
            </div>

            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              <span v-if="!isSubmitting">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                Envoyer le message
              </span>
              <span v-else>Envoi en cours...</span>
            </button>

            <p v-if="submitMessage" class="submit-message" :class="{ 'success': submitSuccess }">
              {{ submitMessage }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  // Simuler l'envoi du formulaire
  setTimeout(() => {
    isSubmitting.value = false
    submitSuccess.value = true
    submitMessage.value = 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.'
    
    // Réinitialiser le formulaire
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    
    // Effacer le message après 5 secondes
    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
  }, 1500)
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.from('.contact-info', {
    opacity: 0,
    x: -50,
    duration: 1,
    scrollTrigger: {
      trigger: '.contact-content',
      start: 'top 80%',
    }
  })

  gsap.from('.contact-form-wrapper', {
    opacity: 0,
    x: 50,
    duration: 1,
    scrollTrigger: {
      trigger: '.contact-content',
      start: 'top 80%',
    }
  })
})
</script>

<style scoped>
.contact {
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.info-header h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.info-header p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
}

.contact-cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(42, 50, 87, 0.1);
  border: 1px solid rgba(42, 50, 87, 0.3);
  border-radius: 15px;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.contact-card:hover {
  background: rgba(42, 50, 87, 0.2);
  transform: translateX(10px);
}

.card-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #2a3257, #4a5287);
  border-radius: 12px;
  flex-shrink: 0;
}

.card-icon svg {
  width: 24px;
  height: 24px;
  color: #ffffff;
}

.card-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.25rem;
}

.card-value {
  font-size: 1.05rem;
  font-weight: 600;
  color: #ffffff;
}

.availability {
  margin-top: 2rem;
}

.availability-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 25px;
  font-weight: 600;
  color: rgb(34, 197, 94);
}

@media (max-width: 968px) {
  .contact {
    padding: 5rem 0;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .contact-form {
    padding: 2rem;
  }
}

.status-dot {
  width: 10px;
  height: 10px;
  background: rgb(34, 197, 94);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.contact-form {
  background: rgba(42, 50, 87, 0.1);
  border: 1px solid rgba(42, 50, 87, 0.3);
  border-radius: 20px;
  padding: 3rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(42, 50, 87, 0.5);
  border-radius: 10px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #2a3257;
  background: rgba(0, 0, 0, 0.4);
}

.form-group textarea {
  resize: vertical;
  min-height: 150px;
}

.submit-btn {
  width: 100%;
  padding: 1.2rem;
  background: linear-gradient(135deg, #2a3257, #4a5287);
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-weight: 700;
  font-size: 1.05rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(42, 50, 87, 0.5);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-btn svg {
  width: 20px;
  height: 20px;
}

.submit-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  font-weight: 500;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: rgb(239, 68, 68);
}

.submit-message.success {
  background: rgba(34, 197, 94, 0.1);
  border-color: rgba(34, 197, 94, 0.3);
  color: rgb(34,197, 94);
}
</style>

