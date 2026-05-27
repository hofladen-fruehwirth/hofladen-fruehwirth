import { ref } from 'vue'

interface Toast {
  id: number
  message: string
}

const toasts = ref<Toast[]>([])
let nextId = 0

export function showError(message: string) {
  const id = nextId++
  toasts.value.push({ id, message })
  setTimeout(() => {
    toasts.value = toasts.value.filter((t) => t.id !== id)
  }, 6000)
}

export function useToasts() {
  return { toasts }
}
