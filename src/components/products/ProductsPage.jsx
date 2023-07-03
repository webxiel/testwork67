import Layout from '../layouts/Layout'
import ProductHero from './ProductHero'
import ProductSection2 from './ProductSection2'
import ProductSection3 from './ProductSection3'
import ProductSection4 from './ProductSection4'
import ProductSection5 from './ProductSection5'
import ProductsSection1 from './ProductsSection1'
import Testimonials from '../Home/testimonials/Testimonials'

function ProductsPage() {
  return (
    <Layout>
    <ProductHero/>
    <ProductsSection1/>
    <ProductSection2/>
    <ProductSection3/>
    <ProductSection4/>
    <ProductSection5/>
    <Testimonials/>
    </Layout>
  )
}

export default ProductsPage