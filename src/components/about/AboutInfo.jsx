
import SectionCard from '../ui/SectionCard'
import video from '../../assets/images/Video.svg';
import dotss from '../../assets/images/dots1.svg';
import styles from './about.module.css';

function AboutInfo() {
  return (
    <SectionCard className={`${styles.aboutinfo}`}>
      <div className='flex flex-col gap-sm align-x'>
        <h2>
          Our Story
        </h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem totam ab maxime molestias, tempore doloribus dolorem pariatur assumenda voluptas perspiciatis placeat quo nostrum autem rem atque cum accusantium minus suscipit.</p>
      </div>
      <div>
        <img className={styles.video} src={video} alt='video'/>
        <img src={dotss} alt="dots"/>
      </div>
    </SectionCard>
  )
}

export default AboutInfo