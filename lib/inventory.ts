import { Image } from "sanity"

export interface InventoryProduct {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  sizes: string[]
  colors: string[]
  price: number
  discound: number
  off: number
  description: string
  sku: string
  youtubelink: string
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
    _id: string
    _createdAt: Date
    slug: string
    images: Image[]
    discount: number
    off: number
    categories: string[]
    description: string
    youtubelink: string
}

