import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  type FirestoreDataConverter,
} from 'firebase/firestore'
import { app } from '@/lib/firebase'
import type { Product } from '@/types'

const db = getFirestore(app)
const COLLECTION = 'products'

const converter: FirestoreDataConverter<Product> = {
  toFirestore(product: Product) {
    const { id, ...data } = product
    return data
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)!
    return { id: snapshot.id, ...data } as Product
  },
}

const productsCol = collection(db, COLLECTION).withConverter(converter)

export async function fetchProducts(): Promise<Product[]> {
  const snap = await getDocs(productsCol)
  return snap.docs.map((d) => d.data())
}

export async function fetchProduct(id: string): Promise<Product | null> {
  const ref = doc(db, COLLECTION, id).withConverter(converter)
  const snap = await getDoc(ref)
  return snap.exists() ? snap.data() : null
}

export async function addProduct(product: Omit<Product, 'id'>) {
  return addDoc(productsCol, product)
}

export async function updateProduct(id: string, data: Partial<Product>) {
  const ref = doc(db, COLLECTION, id)
  return updateDoc(ref, data)
}

export async function deleteProduct(id: string) {
  const ref = doc(db, COLLECTION, id)
  return deleteDoc(ref)
}
