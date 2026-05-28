<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import { images } from '@/assets/images'

useHead({
  title: 'Kontakt – Hofladen Frühwirth in Asparn',
  meta: [
    { name: 'description', content: 'Kontaktiere den Hofladen Frühwirth in Asparn. Telefon, E-Mail und Adresse auf einen Blick.' },
    { property: 'og:title', content: 'Kontakt – Hofladen Frühwirth' },
  ],
})

const name = ref('')
const email = ref('')
const message = ref('')

function sendMail() {
  const subject = encodeURIComponent(`Nachricht von ${name.value}`)
  const body = encodeURIComponent(
    `Name: ${name.value}\nE-Mail: ${email.value}\n\n${message.value}`
  )
  window.location.href = `mailto:bernhardfruehwirth@gmx.at?subject=${subject}&body=${body}`
}
</script>

<template>
  <section class="page">
    <div class="container">
      <h1 class="page-title">Kontakt</h1>
      <p class="page-subtitle">
        Hast du Fragen oder möchtest mehr über unsere Produkte erfahren? Wir freuen uns auf deine
        Nachricht!
      </p>

      <div class="contact-grid">
        <div class="contact-info">
          <div class="contact-card">
            <div class="contact-icon">
              <img :src="images.pinIcon" alt="Adresse" />
            </div>
            <div>
              <h3>Adresse</h3>
              <p>
                Hauptstraße 18<br />
                3442 Asparn
              </p>
            </div>
          </div>

          <div class="contact-card">
            <div class="contact-icon">
              <img :src="images.callIcon" alt="Telefon" />
            </div>
            <div>
              <h3>Telefon</h3>
              <p>+43 676 / 3115331</p>
            </div>
          </div>

          <div class="contact-card">
            <div class="contact-icon">
              <img :src="images.emailIcon" alt="E-Mail" />
            </div>
            <div>
              <h3>E-Mail</h3>
              <p>bernhardfruehwirth&#64;gmx.at</p>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <h2>Schreib uns</h2>
          <form class="form" @submit.prevent="sendMail">
            <div class="form-group">
              <label for="name">Name</label>
              <input id="name" v-model="name" type="text" class="form-input" placeholder="Dein Name" required />
            </div>
            <div class="form-group">
              <label for="email">E-Mail</label>
              <input id="email" v-model="email" type="email" class="form-input" placeholder="Deine E-Mail" required />
            </div>
            <div class="form-group">
              <label for="message">Nachricht</label>
              <textarea
                id="message"
                v-model="message"
                class="form-input form-textarea"
                placeholder="Deine Nachricht"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Nachricht senden</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page {
  padding: 48px 0;
}

.page-title {
  text-align: center;
  font-size: 2rem;
  color: var(--text-heading);
  margin-bottom: 8px;
}

.page-subtitle {
  text-align: center;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.7;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;
  align-items: start;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 12px;
  margin-bottom: 16px;
}

.contact-icon {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.contact-card h3 {
  font-size: 1rem;
  color: var(--text-heading);
  margin-bottom: 4px;
}

.contact-card p {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.contact-form h2 {
  font-size: 1.3rem;
  color: var(--text-heading);
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text);
}

.form-input {
  padding: 10px 14px;
  border: 2px solid var(--border);
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
  background: var(--bg-card);
  color: var(--text);
}

.form-input:focus {
  border-color: var(--accent);
}

.form-textarea {
  resize: vertical;
  font-family: inherit;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>