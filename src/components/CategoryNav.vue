<script setup lang="ts">
import type { Category } from '@/types'
import { categories } from '@/data/products'
import { categoryImages } from '@/assets/images'

defineProps<{ active?: Category }>()

const emit = defineEmits<{
  select: [category: Category | undefined]
}>()
</script>

<template>
  <div class="category-nav">
    <button
      class="category-btn"
      :class="{ 'category-btn--active': !active }"
      @click="emit('select', undefined)"
    >
      Alle
    </button>
    <button
      v-for="cat in categories"
      :key="cat.id"
      class="category-btn"
      :class="{ 'category-btn--active': active === cat.id }"
      @click="emit('select', cat.id)"
    >
      <img :src="categoryImages[cat.id]" :alt="cat.label" class="category-icon" />
      {{ cat.label }}
    </button>
  </div>
</template>

<style scoped>
.category-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-bottom: 32px;
}

.category-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border: 2px solid #dfe6e9;
  border-radius: 30px;
  background: #fff;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  color: #636e72;
  transition: all 0.2s;
}

.category-btn:hover {
  border-color: #7c9128;
  color: #7c9128;
}

.category-btn--active {
  background: #7c9128;
  color: #fff;
  border-color: #7c9128;
}

.category-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}
</style>
