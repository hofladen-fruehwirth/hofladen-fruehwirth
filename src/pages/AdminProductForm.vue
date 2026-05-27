<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { onAuthChange } from '@/services/auth'
import { fetchProduct, addProduct, updateProduct } from '@/services/products'
import { categories } from '@/data/products'
import type { Category } from '@/types'

const router = useRouter()
const route = useRoute()

const isEdit = computed(() => !!route.params.id)
const loading = ref(true)
const saving = ref(false)
const error = ref('')

const name = ref('')
const description = ref('')
const price = ref('')
const category = ref<Category>('fleisch')
const hidden = ref(false)
onMounted(async () => {
  onAuthChange((user) => {
    if (!user) router.replace('/admin')
  })

  if (isEdit.value) {
    const product = await fetchProduct(route.params.id as string)
    if (product) {
      name.value = product.name
      description.value = product.description
      price.value = product.price
      category.value = product.category
      hidden.value = product.hidden ?? false
    } else {
      error.value = 'Produkt nicht gefunden'
    }
  }
  loading.value = false
})

async function handleSubmit() {
  if (!name.value || !description.value || !price.value) {
    error.value = 'Bitte alle Felder ausfüllen'
    return
  }

  error.value = ''
  saving.value = true

  try {
    const data = {
      name: name.value,
      description: description.value,
      price: price.value,
      category: category.value,
      hidden: hidden.value,
    }

    if (isEdit.value) {
      await updateProduct(route.params.id as string, data)
    } else {
      await addProduct(data)
    }

    router.push('/admin/dashboard')
  } catch (e: any) {
    error.value = e.message || 'Fehler beim Speichern'
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <section class="page">
    <div class="container">
      <button class="back-btn" @click="router.push('/admin/dashboard')">
        ← Zurück zur Übersicht
      </button>

      <div class="form-card">
        <h1>{{ isEdit ? 'Produkt bearbeiten' : 'Neues Produkt' }}</h1>

        <div v-if="loading" class="loading">Lädt...</div>

        <form v-else @submit.prevent="handleSubmit" class="form">
          <div class="form-group">
            <label for="name">Name</label>
            <input id="name" v-model="name" type="text" class="form-input" required />
          </div>

          <div class="form-group">
            <label for="description">Beschreibung</label>
            <textarea id="description" v-model="description" class="form-input form-textarea" rows="3" required></textarea>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="price">Preis</label>
              <input id="price" v-model="price" type="text" class="form-input" placeholder="z.B. 4,50 € / kg" required />
            </div>
            <div class="form-group">
              <label for="category">Kategorie</label>
              <select id="category" v-model="category" class="form-input">
                <option v-for="cat in categories" :key="cat.id" :value="cat.id">
                  {{ cat.label }}
                </option>
              </select>
            </div>
          </div>

          <div class="form-group form-check">
            <label class="checkbox-label">
              <input type="checkbox" v-model="hidden" class="checkbox" />
              Produkt verstecken (nicht sichtbar für Kunden)
            </label>
          </div>

          <p v-if="error" class="error">{{ error }}</p>

          <div class="form-actions">
            <button type="button" class="btn btn-secondary" @click="router.push('/admin/dashboard')">
              Abbrechen
            </button>
            <button type="submit" class="btn btn-primary" :disabled="saving">
              {{ saving ? 'Wird gespeichert...' : isEdit ? 'Speichern' : 'Produkt anlegen' }}
            </button>
          </div>
        </form>
      </div>
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

.form-card {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 16px;
  padding: 40px;
  max-width: 640px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.form-card h1 {
  font-size: 1.5rem;
  color: var(--text-heading);
  margin-bottom: 24px;
}

.loading {
  text-align: center;
  padding: 32px;
  color: var(--text-muted);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text);
}

.form-input {
  padding: 10px 14px;
  border: 2px solid var(--border);
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
  font-family: inherit;
  background: var(--bg-card);
  color: var(--text);
}

.form-input:focus {
  border-color: var(--accent);
}

.form-textarea {
  resize: vertical;
}

.form-row {
  display: flex;
  gap: 16px;
}

.form-check {
  flex-direction: row;
  align-items: center;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  color: var(--text);
}

.checkbox {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.error {
  color: var(--danger);
  font-size: 0.85rem;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding-top: 8px;
}

@media (max-width: 768px) {
  .form-card {
    padding: 24px;
  }

  .form-row {
    flex-direction: column;
    gap: 16px;
  }

  .form-actions {
    flex-direction: column;
  }

  .form-actions .btn {
    width: 100%;
  }
}
</style>