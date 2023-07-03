
import TrustedBy from '../Home/TrustedBy';
import Layout from '../layouts/Layout';
import AboutHero from './AboutHero';
import AboutInfo from './AboutInfo';
import AboutSection2 from './AboutSection2';
import Aboutteam from './Aboutteam';

function AboutPage() {
  return (
     <>
     <Layout>
     <AboutHero/>
     <AboutInfo/>
     <AboutSection2/>
     <Aboutteam/>
     <TrustedBy/>
     </Layout>
    </>
  )
}

export default AboutPage;