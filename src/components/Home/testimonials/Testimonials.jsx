import { useState } from 'react';
import testimonials from '../../utils/testimonials'
import arrowLeft from '../../../assets/images/arrowleft.svg';
import arrowRight from '../../../assets/images/arrowright.svg';
import styles from './testimonial.module.css';
import Container from '../../ui/Container';

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);
  const { length } = testimonials

  const prevSlide = () => {
    if (activeIndex === 1) {
      setActiveIndex(length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
    console.log('hello')
  }

  const nextSlide = () => {
    if (activeIndex > length - 1) {
      setActiveIndex(1);
    } else {
      setActiveIndex(activeIndex + 1);
    }
    console.log('hello')
  }

  const currentIndex = (index) => {
   
    setActiveIndex(index + 1);
    console.log(index);
    console.log(index + 1);

  }

  return (
    <Container className={`flex center flex-col gap-sm ${styles.testimonial}`}>
      <h2>Testimonial</h2>
      <p>See what our clients are saying about webxiel</p>
      <div className={`flex center gap ${styles.testimonialCard}`}>
      <span className={styles.nav} onClick={prevSlide}>
        <img src={arrowLeft} alt="left_arrow"/>
      </span>
      {testimonials.map((test)=> (
        test.id === activeIndex ? 
          <div key={test.id} className={`flex flex-col gap-sm ${styles.card}`}>
          <p>{test.text}</p>
          <div className='flex center gap-sm'>
          <img className="circle" src={test.image} alt={test.name}/>
          <span className='flex flex-col'>
          <p>{test.name}</p>
          <p>{test.position}</p>
          </span>
          </div>
        </div> : ''
      ))}
       <span className={styles.nav} onClick={nextSlide}>
        <img src={arrowRight} alt="right_arrow"/>
      </span>
      </div>
      
      <div className={`flex gap-sm ${styles.testimonialPagination}`}>
        {testimonials.map((test, index)=> (
          <span className={styles.dot} onClick={() => currentIndex(index)} key={test.id}>
          <span className={test.id === activeIndex ? styles.active : ''} />
          </span>
        ))}
      </div>
    </Container>
  )
}

export default Testimonials