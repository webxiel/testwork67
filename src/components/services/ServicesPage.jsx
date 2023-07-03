import ServiceHero from './ServiceHero';
import Layout from '../layouts/Layout';
import ServiceSection1 from './ServiceSection1';
import ServiceSection2 from './ServiceSection2';
import ServiceSection3 from './ServiceSection3';
import ServiceSection4 from './ServiceSection4';
import Testimonials from '../Home/testimonials/Testimonials';

function ServicesPage() {
  return (
    <Layout>
    <ServiceHero/>
    <ServiceSection1/>
    <ServiceSection2/>
    <ServiceSection3/>
    <ServiceSection4/>
    <Testimonials/>
    </Layout>
  )
}

export default ServicesPage;