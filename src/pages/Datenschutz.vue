<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'

const router = useRouter()

useHead({
  title: 'Datenschutz – Hofladen Frühwirth',
  meta: [
    { name: 'description', content: 'Datenschutzerklärung des Hofladen Frühwirth in Asparn.' },
  ],
})
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
            <h2>3. Hosting & Backend</h2>
            <p>
              Diese Website wird statisch über <strong>GitHub Pages</strong> (GitHub, Inc.) gehostet. Für dynamische Funktionen (Benutzerauthentifizierung, Produktdaten) nutzen wir <strong>Firebase</strong> (Google LLC).
            </p>
            <p>
              Personenbezogene Daten (z. B. bei Registrierung: E-Mail-Adresse, User-ID) werden auf Servern von Firebase gespeichert, die sich auch in den USA befinden können. Für die Übermittlung in die USA stützt sich der Anbieter auf die Standardvertragsklauseln (SCC) der EU-Kommission, um ein angemessenes Datenschutzniveau sicherzustellen.
            </p>
            <p>
              <strong>Verarbeitete Daten über Firebase:</strong>
            </p>
            <ul>
              <li><strong>Authentifizierung:</strong> E-Mail-Adresse, verschlüsseltes Passwort, User-ID</li>
              <li><strong>Produktdaten:</strong> Öffentlich zugängliche Produktinformationen (keine personenbezogenen Daten)</li>
            </ul>
            <p>
              Hinweis: Wir verwenden Firebase ohne Analytics- und Tracking-Funktionen. Weitere Informationen finden Sie in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">https://policies.google.com/privacy</a>.
            </p>
          </section>

          <section class="legal-section">
            <h2>4. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul>
              <li>Auskunft (Art. 15 DSGVO)</li>
              <li>Berichtigung (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch (Art. 21 DSGVO)</li>
            </ul>
            <p>
              Zusätzlich haben Sie das Recht, sich bei einer Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Die für uns zuständige Aufsichtsbehörde ist die <strong>Österreichische Datenschutzbehörde</strong>, Barichgasse 40–42, 1030 Wien, <a href="https://www.dsb.gv.at" target="_blank" rel="noopener">www.dsb.gv.at</a>.
            </p>
          </section>

          <section class="legal-section">
            <h2>5. Kontakt</h2>
            <p>
              Wenn Sie uns per E-Mail oder über das Kontaktformular kontaktieren, werden Ihre Angaben (Name, E-Mail-Adresse, Nachricht) zum Zweck der Bearbeitung Ihrer Anfrage gespeichert. Diese Daten werden ohne Ihre Einwilligung nicht weitergegeben.
            </p>
            <p>
              <strong>Rechtsgrundlage:</strong> Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung Ihrer Anfrage) und ggf. Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen).
            </p>
          </section>

          <section class="legal-section">
            <h2>6. Speicherdauer</h2>
            <p>
              Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen Verarbeitungszweck erforderlich ist. Bei Kontaktanfragen löschen wir Ihre Daten spätestens sechs Monate nach abschließender Bearbeitung, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section class="legal-section">
            <h2>7. Cookies</h2>
            <p>
              Diese Website verwendet keine Cookies, die der Verarbeitung personenbezogener Daten dienen. Es werden keine Tracking-, Analyse- oder Werbe-Cookies eingesetzt.
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

.legal-section ul {
  color: var(--text-muted);
  line-height: 1.7;
  padding-left: 20px;
}

.legal-section a {
  color: var(--accent);
  text-decoration: underline;
}

.stand {
  color: var(--text-muted);
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