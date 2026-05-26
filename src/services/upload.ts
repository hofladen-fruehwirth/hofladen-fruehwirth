import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { app } from '@/lib/firebase'

const storage = getStorage(app)

export async function uploadProductImage(file: File): Promise<string> {
  const ext = file.name.split('.').pop() || 'jpg'
  const path = `products/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
  const storageRef = ref(storage, path)
  const snap = await uploadBytes(storageRef, file)
  return getDownloadURL(snap.ref)
}
