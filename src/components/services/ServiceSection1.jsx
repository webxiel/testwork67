import Container from '../ui/Container'
import SectionCard from '../ui/SectionCard'
import SectionHeader from '../ui/SectionHeader'
import TextHolder from '../ui/TextHolder';
import styles from './services.module.css'
import image from '../../assets/images/laptop.svg'

function ServiceSection1() {
  return (
    <Container>
       <SectionHeader
     heading='Services we deliver'
     />
    <SectionCard className={`center ${styles.section1}`}>
     <TextHolder
     heading='Websites and Webapps'
     subtext='We deliver quality websites and web applications for your business'
    />
   <img src={image} alt="laptop"/>
    </SectionCard>
    </Container>
  )
}

export default ServiceSection1