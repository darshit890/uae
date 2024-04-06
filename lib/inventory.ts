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
  shipping: string
  sku: string
  youtubelink: string
  review: number
  reviewno: number
  variants: {
    size: string;
    color:string;
    images: string[],
    variant: string
  }
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
    shipping: string
    review: number
    reviewno: number
    variants: {
      map(arg0: (variants: any, index: any) => import("react").JSX.Element): import("react").ReactNode | Iterable<import("react").ReactNode>
      size: string;
      color:string;
      images: string[],
      variant: string
    }
}

export interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  description: any;
  description1: any;
  description2: any;
  images: any;
}

export interface fullBlog {
  currentSlug: string;
  title: string;
  description: any;
  description1: any;
  description2: any;
  images: any;
}