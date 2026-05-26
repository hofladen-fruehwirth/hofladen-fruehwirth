import { addProduct } from './products'
import { products as seedData } from '@/data/products'

export async function seedProducts() {
  for (const p of seedData) {
    await addProduct(p)
  }
}
