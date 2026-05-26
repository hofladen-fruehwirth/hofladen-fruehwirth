<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="legal-container">
    <div class="legal-hero">
      <div class="label-wrapper">
        <div class="label-line"></div>
        <span class="top-label">B5 Hofladen</span>
        <div class="label-line"></div>
      </div>
      <h1 class="page-title">Datenschutz</h1>
      <button class="back-link" @click="router.push('/')">← Zurück zur Startseite</button>
    </div>

    <div class="legal-content">
      <div class="container">
        <div class="legal-card">
          <section class="legal-section">
            <h2>1. Datenschutz auf einen Blick</h2>
            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
            <h3>Datenerfassung auf dieser Website</h3>
            <p><strong>Wer ist verantwortlich?</strong> Die Datenverarbeitung erfolgt durch den Websitebetreiber. Dessen Kontaktdaten finden Sie im Impressum.</p>
            <p><strong>Wie erfassen wir Daten?</strong> Ihre Daten werden entweder durch Ihre Eingabe (z. B. Kontaktformular) oder automatisch durch unsere IT-Systeme erfasst.</p>
          </section>

          <section class="legal-section">
            <h2>2. Verantwortlicher</h2>
            <p>
              <strong>Bernhard Frühwirth</strong><br />
              Hauptstraße 18, 3442 Asparn<br />
              Telefon: +43 676 3115331<br />
              E-Mail: bernhardfruehwirth&#64;gmx.at
            </p>
          </section>

          <section class="legal-section">
            <h2>3. Hosting</h2>
            <p>
              Diese Website wird bei einem externen Hosting-Anbieter gehostet (Firebase, Google LLC). Die personenbezogenen Daten werden auf den Servern des Anbieters gespeichert.
            </p>
          </section>

          <section class="legal-section">
            <h2>4. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul>
              <li>Auskunft (Art. 15 DSGVO)</li>
              <li>Berichtigung (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO)</li>
              <li>Widerspruch (Art. 21 DSGVO)</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>5. Kontakt</h2>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zum Zweck der Bearbeitung der Anfrage gespeichert. Diese Daten werden ohne Ihre Einwilligung nicht weitergegeben.
            </p>
          </section>

          <p class="stand">Stand: April 2026</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.legal-hero {
  background: linear-gradient(135deg, #2d3436 0%, #636e72 100%);
  color: #fff;
  text-align: center;
  padding: 64px 20px 48px;
}

.label-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 16px;
}

.label-line {
  width: 40px;
  height: 2px;
  background: #b5cc3a;
}

.top-label {
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 2px;
  color: #b5cc3a;
  font-weight: 600;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.back-link {
  background: none;
  border: none;
  color: #b5cc3a;
  font-size: 0.95rem;
  cursor: pointer;
  padding: 0;
}

.back-link:hover {
  text-decoration: underline;
}

.legal-content {
  padding: 48px 0;
}

.legal-card {
  background: #fff;
  border: 1px solid #eef1f4;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  max-width: 800px;
  margin: 0 auto;
}

.legal-section {
  margin-bottom: 36px;
}

.legal-section:last-child {
  margin-bottom: 0;
}

.legal-section h2 {
  font-size: 1.25rem;
  color: #2d3436;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid #f0f4e6;
}

.legal-section h3 {
  font-size: 1rem;
  color: #2d3436;
  margin: 16px 0 8px;
}

.legal-section p {
  color: #636e72;
  line-height: 1.7;
  margin-bottom: 8px;
}

.legal-section ul {
  color: #636e72;
  line-height: 1.7;
  padding-left: 20px;
}

.legal-section a {
  color: #7c9128;
  text-decoration: underline;
}

.stand {
  color: #b2bec3;
  font-size: 0.85rem;
  margin-top: 32px;
  text-align: center;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 1.75rem;
  }

  .legal-card {
    padding: 24px;
  }
}
</style>
