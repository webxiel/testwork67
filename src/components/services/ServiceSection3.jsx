
import Container from '../ui/Container'
import SectionCard from '../ui/SectionCard'
import TextHolder from '../ui/TextHolder'
import image1 from '../../assets/images/laptopscreen.svg'
import styles from './services.module.css';

function ServiceSection3() {
  return (
    <Container>
    <SectionCard className={`align-y gap-lg ${styles.section3}`}>
    <TextHolder
    className={styles.section3card}
    heading='Websites and Webapps'
    subtext='We deliver quality websites and web applications for your business'
   />
    <img className={styles.section3img} src={image1} alt=""/>
     </SectionCard>
   </Container>
  )
}

export default ServiceSection3