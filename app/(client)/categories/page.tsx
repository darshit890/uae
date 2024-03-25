import { client } from '@/app/lib/sanity';
import { SanityProduct } from '@/lib/inventory';
import { groq } from 'next-sanity';
import { ProductFilters } from "@/components/productfilters";
import { ProductGrid } from "@/components/productgrid";

interface Props {
  searchParams: {
    date?: string
    price?: string
    color?: string
    categories?: string
    size?: string
  }
}

const FilterPage = async ({ searchParams }: Props) => {
  const { color, date = "desc", price, categories, size } = searchParams
  const priceOrder = price ? `| order(price ${price})` : ""
  const dateorder = date ? `| order(_createdAt ${date})` : ""
  const order = `${priceOrder}${dateorder}`

  const productFilter = `_type == "product"`
  const colorFilter = color ? `&& "${color}" in colors` : ""
  const sizeFilter = size ? `&& "${size}" in colors` : ""
  const categoryFilter = categories ? `&& "${categories}" in category` : ""
  const filter = `*[${productFilter}${colorFilter}${categoryFilter}${sizeFilter}]`
  
  const products = await client.fetch<SanityProduct[]>(groq`${filter} {
    _id,
    _createdAt,
    name,
    sku,
    images,
    price,
    discount,
    offer,
    "slug": slug.current,
    colors,
    categories
  }`)
  console.log(products)
  return (
    <section className='max-w-7xl mx-auto px-6 flex  md:flex-row'>
        <aside className='w-[300px] sticky left-0 px-6 py-10'>
        <ProductFilters  />
        </aside>
        <div className='w-[600px] md:w-[800px] m-10'>
        <ProductGrid products={products} />
        </div>
    </section>
  )
}

export default FilterPage