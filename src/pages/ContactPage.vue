<script setup lang="ts">
import { images } from '@/assets/images'
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
                Musterstraße 1<br />
                12345 Musterstadt
              </p>
            </div>
          </div>

          <div class="contact-card">
            <div class="contact-icon">
              <img :src="images.callIcon" alt="Telefon" />
            </div>
            <div>
              <h3>Telefon</h3>
              <p>01234 / 56789</p>
            </div>
          </div>

          <div class="contact-card">
            <div class="contact-icon">
              <img :src="images.emailIcon" alt="E-Mail" />
            </div>
            <div>
              <h3>E-Mail</h3>
              <p>info@hofladen.de</p>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <h2>Schreib uns</h2>
          <form class="form">
            <div class="form-group">
              <label for="name">Name</label>
              <input id="name" type="text" class="form-input" placeholder="Dein Name" />
            </div>
            <div class="form-group">
              <label for="email">E-Mail</label>
              <input id="email" type="email" class="form-input" placeholder="Deine E-Mail" />
            </div>
            <div class="form-group">
              <label for="message">Nachricht</label>
              <textarea
                id="message"
                class="form-input form-textarea"
                placeholder="Deine Nachricht"
                rows="5"
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
  color: #2d3436;
  margin-bottom: 8px;
}

.page-subtitle {
  text-align: center;
  color: #636e72;
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
  gap: 16px;
  padding: 20px;
  background: #f5f6fa;
  border-radius: 12px;
  margin-bottom: 16px;
}

.contact-icon {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}

.contact-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.contact-card h3 {
  font-size: 1rem;
  color: #2d3436;
  margin-bottom: 4px;
}

.contact-card p {
  font-size: 0.9rem;
  color: #636e72;
  line-height: 1.5;
}

.contact-form h2 {
  font-size: 1.3rem;
  color: #2d3436;
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
  color: #2d3436;
}

.form-input {
  padding: 10px 14px;
  border: 2px solid #dfe6e9;
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
}

.form-input:focus {
  border-color: #7c9128;
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
