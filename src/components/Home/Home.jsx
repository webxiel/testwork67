import Layout from '../layouts/Layout'
import Herosection from './Herosection';
import AboutSection from './AboutSection.jsx';
import TrustedBy from './TrustedBy';
import AppSection from './appSection/AppSection';
import Services from './Services/Services';
import Testimonials from './testimonials/Testimonials';
import ContactSection from './ContactSection';

function Home() {
  return (
    <Layout>
      <Herosection/>
      <TrustedBy/>
      <AboutSection />
      <AppSection/>
      <Testimonials/>
      <Services/>
      <ContactSection/>
    </Layout>
  )
}

export default Home