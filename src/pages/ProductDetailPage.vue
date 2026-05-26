<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { fetchProduct } from '@/services/products'
import { categoryImages } from '@/assets/images'
import type { Product } from '@/types'

const router = useRouter()
const route = useRoute()
const product = ref<Product | null>(null)
const notFound = ref(false)

const imgSrc = computed(() => categoryImages[product.value?.category || 'fleisch'])

onMounted(async () => {
  const id = route.params.id as string
  const data = await fetchProduct(id)
  if (data) {
    product.value = data
  } else {
    notFound.value = true
  }
})
</script>

<template>
  <section class="page" v-if="product">
    <div class="container">
      <button class="back-btn" @click="router.push('/products')">
        ← Zurück zu den Produkten
      </button>

      <div class="detail">
        <div class="detail-image">
          <img :src="imgSrc" :alt="product.name" />
        </div>
        <div class="detail-body">
          <span class="detail-category">{{ product.category }}</span>
          <h1 class="detail-title">{{ product.name }}</h1>
          <p class="detail-desc">{{ product.description }}</p>
          <p class="detail-price">{{ product.price }}</p>
          <p class="detail-allergen">Bei unverpackten Produkten erhalten Sie Auskunft zu Allergenen und Inhaltsstoffen direkt im Geschäft. Bei vorverpackten Waren finden Sie die Informationen auf dem jeweiligen Etikett.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="page" v-else-if="notFound">
    <div class="container">
      <div class="not-found">
        <h2>Produkt nicht gefunden</h2>
        <p>Das gesuchte Produkt existiert leider nicht.</p>
        <button class="btn btn-primary" @click="router.push('/products')">
          Alle Produkte anzeigen
        </button>
      </div>
    </div>
  </section>

  <section class="page" v-else>
    <div class="container">
      <div class="loading">Lädt...</div>
    </div>
  </section>
</template>

<style scoped>
.page {
  padding: 48px 0;
}

.back-btn {
  background: none;
  border: none;
  color: var(--accent);
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 24px;
  padding: 0;
}

.back-btn:hover {
  text-decoration: underline;
}

.detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

.detail-image {
  background: var(--bg-surface);
  border-radius: 16px;
  overflow: hidden;
}

.detail-image img {
  width: 100%;
  height: auto;
  display: block;
}

.detail-category {
  display: inline-block;
  background: var(--border);
  color: var(--text-muted);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: 12px;
}

.detail-title {
  font-size: 1.75rem;
  color: var(--text-heading);
  margin-bottom: 16px;
}

.detail-desc {
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 20px;
}

.detail-price {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--accent);
}

.detail-allergen {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 12px;
  font-style: italic;
}

.not-found {
  text-align: center;
  padding: 64px 0;
}

.not-found h2 {
  font-size: 1.5rem;
  color: var(--text-heading);
  margin-bottom: 8px;
}

.not-found p {
  color: var(--text-muted);
  margin-bottom: 24px;
}

.loading {
  text-align: center;
  padding: 64px;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .detail {
    grid-template-columns: 1fr;
  }
}
</style>