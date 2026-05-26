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
      <h1 class="page-title">Impressum</h1>
      <button class="back-link" @click="router.push('/')">← Zurück zur Startseite</button>
    </div>

    <div class="legal-content">
      <div class="container">
        <div class="legal-card">
          <section class="legal-section">
            <h2>Angaben gemäß § 5 E-Commerce-Gesetz (ECG)</h2>
            <div class="info-grid">
              <div class="info-block">
                <h3>Betreiber</h3>
                <p>
                  <strong>Bernhard Frühwirth</strong><br />
                  Hauptstraße 18<br />
                  3442 Asparn<br />
                  Österreich
                </p>
              </div>
              <div class="info-block">
                <h3>Kontakt</h3>
                <p>
                  <strong>Telefon:</strong> +43 676 3115331<br />
                  <strong>E-Mail:</strong> bernhardfruehwirth&#64;gmx.at
                </p>
              </div>
            </div>
          </section>

          <section class="legal-section">
            <h2>Verantwortlich für den Inhalt</h2>
            <p>
              Bernhard Frühwirth<br />
              Hauptstraße 18<br />
              3442 Asparn<br />
              Österreich
            </p>
          </section>

          <section class="legal-section">
            <h2>Branchenspezifische Angaben</h2>
            <p>
              <strong>Berufsbezeichnung:</strong> Landwirtschaftlicher Betrieb<br />
              <strong>Zuständige Kammer:</strong> Landwirtschaftskammer Niederösterreich
            </p>
          </section>

          <section class="legal-section">
            <h2>Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              <a href="https://consumer-redress.ec.europa.eu" target="_blank" rel="noopener">https://consumer-redress.ec.europa.eu</a>
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section class="legal-section">
            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors.
            </p>
          </section>
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

[data-theme="dark"] .legal-hero {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d3436 100%);
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
  background: var(--accent-light);
}

.top-label {
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 2px;
  color: var(--accent-light);
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
  color: var(--accent-light);
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
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
}

.legal-section {
  margin-bottom: 36px;
}

.legal-section:last-child {
  margin-bottom: 0;
}

.legal-section h2 {
  font-size: 1.25rem;
  color: var(--text-heading);
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--accent-soft);
}

.legal-section h3 {
  font-size: 1rem;
  color: var(--text-heading);
  margin: 16px 0 8px;
}

.legal-section p {
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 8px;
}

.legal-section a {
  color: var(--accent);
  text-decoration: underline;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.info-block h3 {
  font-size: 0.95rem;
  color: var(--text-heading);
  margin-bottom: 8px;
}

.info-block p {
  line-height: 1.7;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 1.75rem;
  }

  .legal-card {
    padding: 24px;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>