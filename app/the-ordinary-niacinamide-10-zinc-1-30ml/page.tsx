import BreadCrumbs from './_component/BreadCrumbs'
import { ProductDisplay } from './_component/ProductDisplay'
import { ProductDescription } from './_component/ProductDescription'
import { CommenSection } from './_component/CommenSection'

const ProductPage = () => {


    


    return (
        <section className='max-w-7xl mx-auto  pl-10 pr-5 pt-8 '>
            <BreadCrumbs/>
            <ProductDisplay />
            <ProductDescription />
            <CommenSection />
        </section>
    )
}

export default ProductPage