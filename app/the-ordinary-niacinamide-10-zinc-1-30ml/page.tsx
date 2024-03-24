import BreadCrumbs from '../[slug]/_component/BreadCrumbs'
import { ProductDisplay } from '../[slug]/_component/ProductDisplay'
import { ProductDescription } from '../[slug]/_component/ProductDescription'
import { CommenSection } from '../[slug]/_component/CommenSection'

const ProductPage = () => {

    return (
        <section className='pl-10 pr-5 pt-8 max-w-7xl mx-auto'>
            <BreadCrumbs/>
            <ProductDisplay />
            <ProductDescription />
            <CommenSection />
        </section>
    )
}

export default ProductPage