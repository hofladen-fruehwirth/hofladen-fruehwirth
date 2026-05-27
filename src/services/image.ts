const MAX_WIDTH = 800
const MAX_HEIGHT = 800
const QUALITY = 0.8
const MAX_FILE_SIZE = 5 * 1024 * 1024
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp']

export class ImageError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ImageError'
  }
}

export function validateImage(file: File): void {
  if (!ALLOWED_TYPES.includes(file.type)) {
    throw new ImageError('Nur JPEG, PNG und WebP werden unterstützt')
  }
  if (file.size > MAX_FILE_SIZE) {
    throw new ImageError('Das Bild darf maximal 5 MB groß sein')
  }
}

export function compressImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    validateImage(file)

    const reader = new FileReader()
    reader.onload = () => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        let { width, height } = img

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width
            width = MAX_WIDTH
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height
            height = MAX_HEIGHT
          }
        }

        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d')
        if (!ctx) {
          reject(new ImageError('Canvas konnte nicht initialisiert werden'))
          return
        }
        ctx.drawImage(img, 0, 0, width, height)
        resolve(canvas.toDataURL('image/jpeg', QUALITY))
      }
      img.onerror = () => reject(new ImageError('Bild konnte nicht geladen werden'))
      img.src = reader.result as string
    }
    reader.onerror = () => reject(new ImageError('Datei konnte nicht gelesen werden'))
    reader.readAsDataURL(file)
  })
}
