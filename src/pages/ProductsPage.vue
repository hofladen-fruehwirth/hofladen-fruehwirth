<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { Category, Product } from '@/types'
import { fetchProducts } from '@/services/products'
import { getAuthError } from '@/services/auth'
import { showError } from '@/services/notifications'
import ProductCard from '@/components/ProductCard.vue'
import CategoryNav from '@/components/CategoryNav.vue'

const route = useRoute()
const products = ref<Product[]>([])
const loading = ref(true)
const activeCategory = ref<Category | undefined>(
  (route.query.category as Category) || undefined,
)

onMounted(async () => {
  const authErr = getAuthError()
  if (authErr) {
    showError('Fehler: Firebase ist nicht konfiguriert (API-Key fehlt)')
    loading.value = false
    return
  }
  try {
    products.value = await fetchProducts()
  } catch (e: any) {
    showError(e?.message || 'Fehler beim Laden der Produkte')
  }
  loading.value = false
})

const filtered = computed(() => {
  const visible = products.value.filter((p) => !p.hidden)
  if (!activeCategory.value) return visible
  return visible.filter((p) => p.category === activeCategory.value)
})

function selectCategory(cat: Category | undefined) {
  activeCategory.value = cat
}
</script>

<template>
  <section class="page">
    <div class="container">
      <h1 class="page-title">Unsere Produkte</h1>
      <p class="page-subtitle">
        Entdecke unsere vielfältige Auswahl an regionalen Spezialitäten.
      </p>

      <CategoryNav :active="activeCategory" @select="selectCategory" />

      <div v-if="loading" class="loading">Lädt...</div>

      <div v-else-if="filtered.length === 0" class="empty">
        <p>Keine Produkte in dieser Kategorie gefunden.</p>
      </div>

      <div v-else class="products-grid">
        <ProductCard v-for="product in filtered" :key="product.id" :product="product" />
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
  margin-bottom: 32px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.loading,
.empty {
  text-align: center;
  padding: 48px;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>