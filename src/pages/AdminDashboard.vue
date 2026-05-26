<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { signOut, onAuthChange } from '@/services/auth'
import { fetchProducts, deleteProduct } from '@/services/products'
import { categoryImages } from '@/assets/images'
import type { Product } from '@/types'

const router = useRouter()
const products = ref<Product[]>([])
const loading = ref(true)

onMounted(async () => {
  onAuthChange((user) => {
    if (!user) router.replace('/admin')
  })
  products.value = await fetchProducts()
  loading.value = false
})

function productImage(product: Product) {
  return product.image || categoryImages[product.category]
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
            <tr v-for="product in products" :key="product.id">
              <td>
                <img
                  :src="productImage(product)"
                  :alt="product.name"
                  class="table-img"
                />
              </td>
              <td>{{ product.name }}</td>
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
  color: #2d3436;
}

.header-actions {
  display: flex;
  gap: 8px;
}

.loading,
.empty {
  text-align: center;
  padding: 48px;
  color: #636e72;
}

.table-wrap {
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.table th,
.table td {
  text-align: left;
  padding: 12px 16px;
  font-size: 0.9rem;
}

.table th {
  background: #f5f6fa;
  color: #636e72;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
}

.table td {
  border-bottom: 1px solid #f0f0f0;
}

.table tr:last-child td {
  border-bottom: none;
}

.table-img {
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 6px;
  background: #f5f6fa;
}

.badge {
  display: inline-block;
  background: #f0f4e6;
  color: #7c9128;
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

.btn-secondary {
  background: #f5f6fa;
  color: #2d3436;
  border: 1px solid #dfe6e9;
}

.btn-secondary:hover {
  background: #eef1f4;
}

.btn-danger,
.btn-outline-danger {
  background: #d63031;
  color: #fff;
  border: 1px solid #d63031;
}

.btn-danger:hover {
  background: #b71c1c;
}

.btn-outline-danger {
  background: transparent;
  color: #d63031;
  border: 1px solid #d63031;
}

.btn-outline-danger:hover {
  background: #d63031;
  color: #fff;
}
</style>
