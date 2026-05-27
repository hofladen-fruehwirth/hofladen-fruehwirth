export interface Product {
  id: string
  name: string
  description: string
  price: string
  category: Category
  hidden?: boolean
}

export type Category = 'fleisch' | 'wurst' | 'eier' | 'obst' | 'getraenk' | 'aufstrich' | 'geschenk'

export interface CategoryInfo {
  id: Category
  label: string
}
