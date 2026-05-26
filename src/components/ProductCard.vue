<script setup lang="ts">
import type { Product } from '@/types'
import { useRouter } from 'vue-router'
import { categoryImages } from '@/assets/images'
import { computed } from 'vue'

const props = defineProps<{ product: Product }>()

const router = useRouter()

const imgSrc = computed(() => props.product.image || categoryImages[props.product.category])
</script>

<template>
  <article class="card" @click="router.push(`/products/${product.id}`)">
    <div class="card-image">
      <img :src="imgSrc" :alt="product.name" />
    </div>
    <div class="card-body">
      <h3 class="card-title">{{ product.name }}</h3>
      <p class="card-desc">{{ product.description }}</p>
      <span class="card-price">{{ product.price }}</span>
    </div>
  </article>
</template>

<style scoped>
.card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #f5f6fa;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  padding: 16px;
}

.card-title {
  font-size: 1.1rem;
  color: #2d3436;
  margin-bottom: 8px;
}

.card-desc {
  font-size: 0.85rem;
  color: #636e72;
  line-height: 1.5;
  margin-bottom: 12px;
}

.card-price {
  display: inline-block;
  background: #7c9128;
  color: #fff;
  padding: 4px 12px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
}
</style>
