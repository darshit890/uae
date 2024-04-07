import { client } from '@/app/lib/sanity';
import { SanityProduct } from '@/lib/inventory';
import { groq } from 'next-sanity';
import { ProductFilters } from "@/components/productfilters";
import { ProductGrid } from "@/components/productgrid";
import { ProductSort } from '@/components/product-sort';

const revalidate = 30

interface props {
  searchParams: {
    date?: string
    price?: string
    color?: string
    categories?: string
    size?: string
    search?: string
  }
}

const FilterPage = async ({ searchParams }: props) => {
  console.log(searchParams)
  const { color, date, price, categories, size, search } = searchParams
  const priceOrder = price ? `| order(price ${price})` : ""
  const dateorder = date ? `| order(_createdAt ${date})` : ""
  const order = `${priceOrder}${dateorder}`

  const productFilter = `_type == "product"`
  const colorFilter = color ? `&& "${color}" in colors` : ""
  const sizeFilter = size ? `&& "${size}" in sizes` : ""
  const categoryFilter = categories ? `&& "${categories}" in categories` : ""
  const searchFilter = search ? `&& name match "${search}"` : ""
  const filter = `*[${productFilter}${colorFilter}${categoryFilter}${sizeFilter}${searchFilter}]`
  
  const products = await client.fetch<SanityProduct[]>(groq` ${filter} ${order} {
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
    categories,
    review,
    reviewno
  }`)
  console.log(products)
  return (
    <section className='max-w-7xl mx-auto px-6 flex  md:flex-row'>
        <aside className='w-[300px] sticky left-0 px-6 py-10 lg:block hidden'>
        <ProductFilters  />
        </aside>
        <div className='w-[600px] md:w-[800px] m-10 '>
          <ProductSort />
        <ProductGrid products={product} />
        </div>
    </section>
  )
}

export default FilterPage
