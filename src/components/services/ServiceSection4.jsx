
import Container from '../ui/Container'
import SectionCard from '../ui/SectionCard'
import TextHolder from '../ui/TextHolder'
import image1 from '../../assets/images/likeemoji.svg'
import styles from './services.module.css';

function ServiceSection4() {
  return (
    <Container>
    <SectionCard className={`align-y gap-lg ${styles.section4}`}>
    <img className={styles.section4img} src={image1} alt=""/>
   
    <TextHolder
    className={styles.section4card}
    heading='Websites and Webapps'
    subtext='We deliver quality websites and web applications for your business'
   />
     </SectionCard>
   </Container>
  )
}

export default ServiceSection4