<script setup lang="ts">
import { useRouter } from 'vue-router'
import { images } from '@/assets/images'

const router = useRouter()

const openingHours = [
  { day: 'Montag', hours: '09:00 – 12:00' },
  { day: 'Dienstag', hours: 'Geschlossen' },
  { day: 'Mittwoch', hours: '15:00 – 18:00' },
  { day: 'Donnerstag', hours: 'Geschlossen' },
  { day: 'Freitag', hours: '09:00 – 18:00' },
  { day: 'Samstag', hours: '09:00 – 15:00' },
  { day: 'Sonntag', hours: 'Geschlossen' },
]
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-col">
        <div class="footer-logo" @click="router.push('/')">
          <img :src="images.logo" alt="Hofladen" />
        </div>
        <p class="footer-text">
          Frische Produkte direkt vom Bauernhof – natürlich, regional und lecker.
        </p>
      </div>

      <div class="footer-col">
        <h4 class="footer-heading">Öffnungszeiten</h4>
        <div v-for="entry in openingHours" :key="entry.day" class="footer-row">
          <span class="footer-day">{{ entry.day }}:</span>
          <span>{{ entry.hours }}</span>
        </div>
      </div>

      <div class="footer-col">
        <h4 class="footer-heading">Kontakt</h4>
        <p class="footer-text">Tel.: +43 676/3115331</p>
        <p class="footer-text">E-Mail: bernhardfruehwirth&#64;gmx.at</p>
        <p class="footer-text">Hauptstraße 18, 3442 Asparn</p>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p>&copy; 2026 Fam. Frühwirth</p>
        <div class="legal-links">
          <button class="legal-link" @click="router.push('/impressum')">Impressum</button>
          <span class="divider">|</span>
          <button class="legal-link" @click="router.push('/datenschutz')">Datenschutz</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #2d3436;
  color: #dfe6e9;
  margin-top: auto;
}

[data-theme="dark"] .footer {
  background: #1a1a1a;
}

.footer-inner {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr;
  gap: 40px;
  padding: 24px 0;
  align-items: center;
}

.footer-logo {
  cursor: pointer;
  margin-bottom: 12px;
}

.footer-logo img {
  height: 50px;
  width: auto;
}

.footer-heading {
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer-text {
  line-height: 1.7;
  font-size: 0.9rem;
  color: #b2bec3;
}

.footer-row {
  display: flex;
  gap: 8px;
  font-size: 0.9rem;
  padding: 4px 0;
}

.footer-day {
  color: #b5cc3a;
  font-weight: 500;
  min-width: 90px;
}

.footer-bottom {
  border-top: 1px solid #636e72;
  padding: 16px 0;
  font-size: 0.85rem;
  color: #b2bec3;
}

[data-theme="dark"] .footer-bottom {
  border-top-color: #3a3a3a;
}

.footer-bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.legal-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.legal-link {
  background: none;
  border: none;
  color: #b2bec3;
  cursor: pointer;
  font-size: 0.85rem;
  padding: 0;
  transition: color 0.2s;
}

.legal-link:hover {
  color: #7c9128;
}

.divider {
  color: #636e72;
}

@media (max-width: 768px) {
  .footer-inner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-logo {
    display: flex;
    justify-content: center;
  }

  .footer-row {
    justify-content: center;
  }

  .footer-bottom-inner {
    flex-direction: column;
    gap: 8px;
  }
}
</style>