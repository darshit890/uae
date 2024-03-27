import BreadCrumbs from './_component/BreadCrumbs'
import { ProductDisplay } from './_component/ProductDisplay'
import { ProductDescription } from './_component/ProductDescription'
import { CommenSection } from './_component/CommenSection'
import { client } from '@/app/lib/sanity'
import { SanityProduct } from '@/lib/inventory'
import { groq } from 'next-sanity'

async function getData(slug: string) {
    const query = `*[_type == "product" && slug.current == "${slug}"][0] {
        _id,
        _createdAt,
        name,
        sku,
        images,
        price,
        discount,
        description,
        off,
        "slug": slug.current,
        colors,
        categories
        }`;
  
    const data = await client.fetch(query);
    return data;
  }
  
  export const dynamic = "force-dynamic";

const ProductPage = async ({
    params,
  }: {
    params: { slug: string };
  }) => {
    const data: SanityProduct = await getData(params.slug);
    console.log(data)
    return (
        <section className='pl-10 pr-5 pt-8 max-w-7xl mx-auto'>
            <BreadCrumbs product={data} />
            <ProductDisplay product={data} />
            <ProductDescription product={data} />
            <CommenSection />
        </section>
    )
}

export default ProductPage