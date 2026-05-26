<script setup lang="ts">
import { images } from '@/assets/images'
</script>

<template>
  <section class="page">
    <div class="container">
      <h1 class="page-title">Über uns</h1>

      <div class="about-grid">
        <div class="about-image">
          <img :src="images.aboutPic" alt="Unser Hof" />
        </div>
        <div class="about-content">
          <h2>Unser Hof</h2>
          <p>
            Unser Familienbetrieb wird bereits seit vier Generationen geführt. Was damals als kleiner
            Bauernhof begann, ist heute ein moderner Hofladen, der regionale Produkte mit
            traditionellem Handwerk verbindet.
          </p>
          <p>
            Wir legen großen Wert auf artgerechte Tierhaltung, nachhaltigen Anbau und kurze
            Transportwege. Unsere Tiere haben viel Auslauf und erhalten ausschließlich heimisches
            Futter. Unser Obst und Gemüse wächst ohne chemische Pestizide.
          </p>
        </div>
      </div>

      <div class="values">
        <h2 class="section-title">Unsere Werte</h2>
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">
              <img :src="images.checkmark" alt="Qualität" />
            </div>
            <h3>Qualität</h3>
            <p>Höchste Qualitätsstandards bei allen unseren Produkten.</p>
          </div>

          <div class="value-card">
            <div class="value-icon">
              <img :src="images.checkmark" alt="Nachhaltigkeit" />
            </div>
            <h3>Nachhaltigkeit</h3>
            <p>Umweltbewusste Landwirtschaft für eine lebenswerte Zukunft.</p>
          </div>

          <div class="value-card">
            <div class="value-icon">
              <img :src="images.checkmark" alt="Regionalität" />
            </div>
            <h3>Regionalität</h3>
            <p>Kurze Wege vom Hof direkt zu dir nach Hause.</p>
          </div>
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
  margin-bottom: 40px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin-bottom: 64px;
}

.about-image img {
  width: 100%;
  border-radius: 12px;
}

.about-content h2 {
  font-size: 1.5rem;
  color: var(--text-heading);
  margin-bottom: 16px;
}

.about-content p {
  line-height: 1.8;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.section-title {
  text-align: center;
  font-size: 1.75rem;
  color: var(--text-heading);
  margin-bottom: 32px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.value-card {
  text-align: center;
  padding: 32px 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 12px;
}

.value-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 16px;
}

.value-icon img {
  width: 100%;
  height: 100%;
}

.value-card h3 {
  font-size: 1.15rem;
  color: var(--text-heading);
  margin-bottom: 8px;
}

.value-card p {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>