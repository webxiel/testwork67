import ContactForm from './ContactForm'
import SubContact from './SubContact';
// import SectionCard from '../ui/SectionCard';
import Container from '../ui/Container';
import styles from './contact.module.css';

function ContactSection() {
  return (
    <Container className={`${styles.contactsection}`}>
    <div className={`${styles.contactcard}`}>
      <SubContact/>
     <ContactForm/>
    </div>
    </Container>
  )
}

export default ContactSection