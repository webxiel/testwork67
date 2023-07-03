import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import screens from '../utils/screens';
import styles from './products.module.css';

function ProductSection3() {
  return (
    <div>
    <SectionHeader
    heading='Screens'
    />
    <Container className={styles.productcontainer3}>
    <Swiper
    spaceBetween={30}
    breakpoints={{
      280: {
        slidesPerView: 2,
        spaceBetween: 20,
        width: 280,
      },
      360: {
        slidesPerView: 2.5,
        spaceBetween: 20,
        width: 360,
      },
      375: {
        slidesPerView: 1.5,
        spaceBetween: 40,
      },
      580: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      540: {
        slidesPerView: 2.5,
        spaceBetween: 35,
      },
      680: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      820: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
      1024: {
        slidesPerView: 4.5,
        spaceBetween: 45,
      },
      1120: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    }}
    loop={true}
    centeredSlides
  autoplay={{
    delay: 1000,
    disableOnInteraction: true
}}

modules={[Autoplay, Pagination, Navigation]}
  className='mySwiper'>
    {screens.map((screen) => (
      <SwiperSlide className={styles.slide} key={screen.id}>
        <img src={screen.image} alt={screen.name} />
      </SwiperSlide>
    ))}
  </Swiper>
</Container>
</div>
  )
}

export default ProductSection3