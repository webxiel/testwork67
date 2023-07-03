
import Container from '../ui/Container';
import playstore from '../../assets/images/Play Store.svg';
import appstore from '../../assets/images/App Store.svg';

import styles from './homepage.module.css';

function ContactSection() {
  return (
    <Container className={`full-width ${styles.contactContainer}`}>
      <div className='grid grid-2 gap-sm'>
        <div className='flex flex-col gap-sm'>
        <h2>Wash now is coming soon on all devices</h2>
        <p>A Private Limited is the most . The limited liabilityis, in fact, the only company allowed by Companies.</p>
      </div>
      <span className='flex gap-xs'>
        <img src={appstore} alt="appstore_image" />
        <img src={playstore} alt="playstore_image"/>
      </span>
      </div>
    </Container>
  )
}

export default ContactSection