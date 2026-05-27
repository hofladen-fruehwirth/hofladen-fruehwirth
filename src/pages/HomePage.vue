<script setup lang="ts">
import { useRouter } from 'vue-router'
import { categories } from '@/data/products'
import { categoryImages, images } from '@/assets/images'

const router = useRouter()
</script>

<template>
  <section class="hero" :style="{ backgroundImage: `url(${images.background})` }">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <h1 class="hero-title">
        Frisch vom Hof<br />
        <span class="hero-highlight">auf deinen Tisch</span>
      </h1>
      <p class="hero-subtitle">
        Frische Produkte direkt vom Bauernhof –<br />
        natürlich, regional, lecker.
      </p>
      <div class="hero-buttons">
        <button class="btn btn-primary btn-lg" @click="router.push('/products')">
          Produkte entdecken
        </button>
        <button class="btn btn-outline btn-lg" @click="router.push('/about')">
          Mehr erfahren
        </button>
      </div>
    </div>
  </section>

  <section class="section featured">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Unsere Produkte</span>
        <h2 class="section-title">Entdecke unsere Vielfalt</h2>
        <img :src="images.underline" alt="" class="section-underline" />
        <p class="section-desc">
          Von frischem Fleisch und Wurstwaren über Eier und Obst bis zu erlesenen Geschenken
        </p>
      </div>
      <div class="categories-grid">
        <button
          v-for="cat in categories"
          :key="cat.id"
          class="category-card"
          @click="router.push(`/products?category=${cat.id}`)"
        >
          <div class="category-card-image">
            <img :src="categoryImages[cat.id]" :alt="cat.label" />
          </div>
          <span class="category-card-label">{{ cat.label }}</span>
        </button>
      </div>
    </div>
  </section>

  <section class="section banner">
    <div class="container">
      <div class="banner-card">
        <div class="banner-bg">
          <img :src="images.bannerBackground" alt="" />
        </div>
        <div class="banner-content">
          <span class="banner-badge">Saisonale Angebote</span>
          <h2 class="banner-title">Frische Ernte<br />aus unserem Garten</h2>
          <p>
            Jetzt in der Saison: Obst und Gemüse direkt vom Feld.
            Unbehandelt, aromatisch und voller Vitamine.
          </p>
          <button class="btn btn-primary" @click="router.push('/products?category=obst')">
            Zur Ernte
          </button>
        </div>
        <div class="banner-image">
          <img :src="images.discountBg" alt="Angebot" />
        </div>
      </div>
    </div>
  </section>

  <section class="section about-preview">
    <div class="container">
      <div class="about-grid">
        <div class="about-text-col">
          <span class="section-badge">Über uns</span>
          <h2 class="section-title">
            Direkt vom Hof<br />
            <span class="text-green">auf den Tisch</span>
          </h2>
          <img :src="images.underline" alt="" class="section-underline" />
          <p>
            Seit vier Generationen führen wir unseren Familienbetrieb mit Leidenschaft
            und Respekt vor der Natur. Unsere Tiere leben artgerecht, unser Obst und
            Gemüse wächst ohne Chemie.
          </p>
          <ul class="check-list">
            <li>
              <img :src="images.checkIcon" alt="" class="check-icon" />
              Artgerechte Tierhaltung
            </li>
            <li>
              <img :src="images.checkIcon" alt="" class="check-icon" />
              Biologischer Anbau
            </li>
            <li>
              <img :src="images.checkIcon" alt="" class="check-icon" />
              Kurze Transportwege
            </li>
          </ul>
          <button class="btn btn-primary" @click="router.push('/about')">
            Mehr über uns
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="section contact-cta">
    <div class="container">
      <div class="cta-card">
        <h2>Hast du Fragen?</h2>
        <p>Wir freuen uns auf deine Nachricht – persönlich, per Telefon oder E-Mail.</p>
        <button class="btn btn-primary btn-lg" @click="router.push('/contact')">
          Kontakt aufnehmen
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: calc(100vh - 91px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--hero-overlay-start) 0%, var(--hero-overlay-end) 100%);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 20px;
}

.hero-highlight {
  color: #b5cc3a;
}

.hero-subtitle {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #dfe6e9;
  margin: 0 auto 36px;
  max-width: 600px;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.section {
  padding: 80px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-badge {
  display: inline-block;
  background: var(--accent-soft);
  color: var(--accent-light);
  padding: 6px 18px;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-heading);
  text-align: center;
  margin-bottom: 12px;
  line-height: 1.2;
}

.section-underline {
  display: block;
  margin: 0 auto 16px;
  height: 8px;
}

.section-desc {
  color: var(--text-muted);
  font-size: 1.05rem;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
}

.text-green {
  color: var(--accent);
}

.featured {
  background: var(--bg-soft);
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 24px;
}

.category-card {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 20px;
  padding: 36px 20px 24px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.category-card:hover {
  border-color: var(--accent);
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(124, 145, 40, 0.18);
}

.category-card-image {
  width: 80px;
  height: 80px;
  margin: 0 auto 16px;
}

.category-card-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.category-card-label {
  font-weight: 600;
  color: var(--text-heading);
  font-size: 1rem;
}

.banner {
  background: #2d3436;
}

[data-theme="dark"] .banner {
  background: #1a1a1a;
}

.banner-card {
  position: relative;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  gap: 40px;
  border-radius: 20px;
  overflow: hidden;
  padding: 48px 56px;
}

.banner-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.banner-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.15;
}

.banner-content {
  position: relative;
  z-index: 1;
  color: #fff;
}

.banner-badge {
  display: inline-block;
  background: rgba(181, 204, 58, 0.2);
  color: #b5cc3a;
  padding: 6px 16px;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
}

.banner-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.2;
}

.banner-content p {
  color: #b2bec3;
  line-height: 1.7;
  margin-bottom: 24px;
  max-width: 400px;
}

.banner-image {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
}

.banner-image img {
  max-width: 280px;
  animation: float 3s ease-in-out infinite;
}

.about-preview {
  background: var(--bg);
}

.about-grid {
  display: flex;
  justify-content: center;
}

.about-text-col {
  max-width: 680px;
  text-align: center;
}

.about-text-col p {
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 20px;
}

.check-list {
  list-style: none;
  padding: 0;
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.check-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  font-weight: 500;
  color: var(--text);
}

.check-icon {
  width: 22px;
  height: 22px;
}

.contact-cta {
  background: var(--accent);
  padding: 64px 0;
}

.cta-card {
  text-align: center;
  color: #fff;
}

.cta-card h2 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.cta-card p {
  font-size: 1.05rem;
  opacity: 0.9;
  margin-bottom: 28px;
}

.cta-card .btn-primary {
  background: #fff;
  color: var(--accent);
}

.cta-card .btn-primary:hover {
  background: #f0f4e6;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding: 60px 0;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.05rem;
  }

  .categories-grid {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 16px;
  }

  .banner-card {
    grid-template-columns: 1fr;
    padding: 32px 24px;
  }

  .banner-image {
    order: -1;
  }

  .banner-image img {
    max-width: 200px;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .section {
    padding: 48px 0;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .hero-buttons {
    flex-direction: column;
  }
}
</style>