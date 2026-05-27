<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { signOut, onAuthChange, getAuthError } from '@/services/auth'
import { fetchProducts, updateProduct, deleteProduct } from '@/services/products'
import { categoryImages } from '@/assets/images'
import { showError } from '@/services/notifications'
import type { Product } from '@/types'

const router = useRouter()
const products = ref<Product[]>([])
const loading = ref(true)

onMounted(async () => {
  const authErr = getAuthError()
  if (authErr) {
    showError('Fehler: Firebase Auth ist nicht konfiguriert (API-Key fehlt)')
    loading.value = false
    return
  }

  onAuthChange((user) => {
    if (!user) router.replace('/admin')
  })
  try {
    products.value = await fetchProducts()
  } catch (e: any) {
    showError(e?.message || 'Fehler beim Laden der Produkte')
  }
  loading.value = false
})

async function handleToggleHidden(product: Product) {
  await updateProduct(product.id, { hidden: !product.hidden })
  product.hidden = !product.hidden
}

async function handleDelete(id: string, name: string) {
  if (!confirm(`"${name}" wirklich löschen?`)) return
  await deleteProduct(id)
  products.value = products.value.filter((p) => p.id !== id)
}

async function handleLogout() {
  await signOut()
  router.push('/admin')
}
</script>

<template>
  <section class="page">
    <div class="container">
      <div class="header-row">
        <h1>Produkte verwalten</h1>
        <div class="header-actions">
          <button class="btn btn-primary" @click="router.push('/admin/products/new')">
            + Neues Produkt
          </button>
          <button class="btn btn-outline-danger" @click="handleLogout">Logout</button>
        </div>
      </div>

      <div v-if="loading" class="loading">Lädt...</div>

      <div v-else-if="products.length === 0" class="empty">
        <p>Noch keine Produkte vorhanden.</p>
      </div>

      <div v-else class="table-wrap">
        <table class="table">
          <thead>
            <tr>
              <th>Bild</th>
              <th>Name</th>
              <th>Kategorie</th>
              <th>Preis</th>
              <th style="width:160px">Aktionen</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id" :class="{ 'row-hidden': product.hidden }">
              <td>
                <img
                  :src="product.imageBase64 || categoryImages[product.category]"
                  :alt="product.name"
                  class="table-img"
                />
              </td>
              <td>
                {{ product.name }}
                <span v-if="product.hidden" class="badge badge-hidden">Nicht sichtbar</span>
              </td>
              <td><span class="badge">{{ product.category }}</span></td>
              <td>{{ product.price }}</td>
              <td>
                <div class="action-btns">
                  <button
                    class="btn btn-sm btn-secondary"
                    @click="router.push(`/admin/products/${product.id}`)"
                  >
                    Bearbeiten
                  </button>
                  <button
                    class="btn btn-sm"
                    :class="product.hidden ? 'btn-success' : 'btn-warning'"
                    @click="handleToggleHidden(product)"
                  >
                    {{ product.hidden ? 'Einblenden' : 'Ausblenden' }}
                  </button>
                  <button
                    class="btn btn-sm btn-danger"
                    @click="handleDelete(product.id, product.name)"
                  >
                    Löschen
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page {
  padding: 48px 0;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  flex-wrap: wrap;
  gap: 12px;
}

.header-row h1 {
  font-size: 1.5rem;
  color: var(--text-heading);
}

.header-actions {
  display: flex;
  gap: 8px;
}

.loading,
.empty {
  text-align: center;
  padding: 48px;
  color: var(--text-muted);
}

.table-wrap {
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
  background: var(--bg-card);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
}

.table th,
.table td {
  text-align: left;
  padding: 12px 16px;
  font-size: 0.9rem;
}

.table th {
  background: var(--bg-surface);
  color: var(--text-muted);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
}

.table td {
  border-bottom: 1px solid var(--border-light);
}

.table tr:last-child td {
  border-bottom: none;
}

.table-img {
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 6px;
  background: var(--bg-surface);
}

.badge {
  display: inline-block;
  background: var(--accent-soft);
  color: var(--accent);
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: capitalize;
}

.action-btns {
  display: flex;
  gap: 6px;
}

.btn-sm {
  padding: 6px 14px;
  font-size: 0.85rem;
}

.btn-danger {
  background: var(--danger);
  color: #fff;
  border: 1px solid var(--danger);
}

.btn-danger:hover {
  background: var(--danger-hover);
}

.btn-outline-danger {
  background: transparent;
  color: var(--danger);
  border: 1px solid var(--danger);
}

.btn-outline-danger:hover {
  background: var(--danger);
  color: #fff;
}

.btn-warning {
  background: #f39c12;
  color: #fff;
  border: 1px solid #f39c12;
}

.btn-warning:hover {
  background: #e67e22;
}

.btn-success {
  background: #27ae60;
  color: #fff;
  border: 1px solid #27ae60;
}

.btn-success:hover {
  background: #219a52;
}

.row-hidden {
  opacity: 0.55;
}

.badge-hidden {
  background: #f39c12;
  color: #fff;
  font-size: 0.7rem;
  margin-left: 6px;
}

@media (max-width: 768px) {
  .page {
    padding: 24px 0;
  }

  .header-row {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }

  .header-row h1 {
    font-size: 1.25rem;
    text-align: center;
  }

  .header-actions {
    flex-direction: column;
    gap: 8px;
  }

  .header-actions .btn {
    width: 100%;
    justify-content: center;
  }

  .table-wrap {
    overflow: visible;
  }

  .table thead {
    display: none;
  }

  .table,
  .table tbody,
  .table tr,
  .table td {
    display: block;
  }

  .table tr {
    background: var(--bg-card);
    border: 1px solid var(--border-light);
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  .table td {
    border: none;
    padding: 6px 0;
    text-align: center;
  }

  .table td:first-child {
    padding-top: 0;
  }

  .table td:last-child {
    padding-bottom: 0;
  }

  .table-img {
    width: 64px;
    height: 64px;
    margin: 0 auto;
  }

  .action-btns {
    justify-content: center;
    gap: 12px;
  }
}
</style>