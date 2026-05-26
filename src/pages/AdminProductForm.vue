<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { onAuthChange } from '@/services/auth'
import { fetchProduct, addProduct, updateProduct } from '@/services/products'
import { uploadProductImage } from '@/services/upload'
import { categories } from '@/data/products'
import { categoryImages } from '@/assets/images'
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
const imageFile = ref<File | null>(null)
const imagePreview = ref<string | null>(null)
const existingImage = ref<string | null>(null)

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
      if (product.image) {
        existingImage.value = product.image
        imagePreview.value = product.image
      }
    } else {
      error.value = 'Produkt nicht gefunden'
    }
  }
  loading.value = false
})

function onFileSelect(e: Event) {
  const input = e.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return
  imageFile.value = file
  imagePreview.value = URL.createObjectURL(file)
}

function removeImage() {
  imageFile.value = null
  imagePreview.value = null
  existingImage.value = null
}

async function handleSubmit() {
  if (!name.value || !description.value || !price.value) {
    error.value = 'Bitte alle Felder ausfüllen'
    return
  }

  error.value = ''
  saving.value = true

  try {
    let imageUrl = existingImage.value || undefined
    if (imageFile.value) {
      imageUrl = await uploadProductImage(imageFile.value)
    }

    const data = {
      name: name.value,
      description: description.value,
      price: price.value,
      category: category.value,
      image: imageUrl,
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

          <div class="form-group">
            <label>Bild</label>
            <div class="upload-area">
              <label class="upload-btn" v-if="!imagePreview">
                <input type="file" accept="image/*" hidden @change="onFileSelect" />
                Bild auswählen
              </label>
              <div v-else class="upload-preview">
                <img :src="imagePreview" alt="Vorschau" />
                <button type="button" class="upload-remove" @click="removeImage">×</button>
              </div>
            </div>
          </div>

          <div class="preview">
            <span class="preview-label">Vorschau (öffentlich):</span>
            <div class="preview-card">
              <img
                :src="imagePreview || categoryImages[category]"
                :alt="name"
                class="preview-img"
              />
              <div>
                <strong>{{ name || 'Produktname' }}</strong>
                <p>{{ price || 'Preis' }}</p>
              </div>
            </div>
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
  color: #7c9128;
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
  background: #fff;
  border: 1px solid #eef1f4;
  border-radius: 16px;
  padding: 40px;
  max-width: 640px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.form-card h1 {
  font-size: 1.5rem;
  color: #2d3436;
  margin-bottom: 24px;
}

.loading {
  text-align: center;
  padding: 32px;
  color: #636e72;
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
  color: #2d3436;
}

.form-input {
  padding: 10px 14px;
  border: 2px solid #dfe6e9;
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
  font-family: inherit;
}

.form-input:focus {
  border-color: #7c9128;
}

.form-textarea {
  resize: vertical;
}

.form-row {
  display: flex;
  gap: 16px;
}

.upload-area {
  display: flex;
  align-items: center;
  gap: 12px;
}

.upload-btn {
  display: inline-block;
  padding: 10px 20px;
  background: #f5f6fa;
  border: 2px dashed #dfe6e9;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  color: #636e72;
  transition: border-color 0.2s, color 0.2s;
}

.upload-btn:hover {
  border-color: #7c9128;
  color: #7c9128;
}

.upload-preview {
  position: relative;
  display: inline-block;
}

.upload-preview img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid #dfe6e9;
}

.upload-remove {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: #d63031;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview {
  background: #f5f6fa;
  border-radius: 8px;
  padding: 16px;
}

.preview-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #636e72;
  display: block;
  margin-bottom: 8px;
}

.preview-card {
  display: flex;
  align-items: center;
  gap: 12px;
}

.preview-img {
  width: 64px;
  height: 64px;
  object-fit: contain;
  background: #fff;
  border-radius: 6px;
}

.preview-card strong {
  display: block;
  color: #2d3436;
}

.preview-card p {
  color: #636e72;
  font-size: 0.9rem;
}

.error {
  color: #d63031;
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
