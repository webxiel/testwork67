
import Container from '../ui/Container';
import styles from './homepage.module.css';

import clipArt from '../../assets/images/Clip art.svg';
import Button from '../ui/Button';
import bubble from '../../assets/images/shape.svg';
import fill from '../../assets/images/fillColor.svg';
import greenOutline from '../../assets/images/outlineGreenColor.svg';
import outline from '../../assets/images/outlineFill.svg';
import red from '../../assets/images/smallred.svg';
import yellow from '../../assets/images/smallyellow.svg';

function Herosection() {

  return (
    <Container className={`${styles.hero}`}>
    <div className={`flex flex-fluid center gap-sm ${styles.heroContainer}`}>
      <div className=''>
      <h1>Give your business a smarter way to operate</h1>
      <p>we give image a better way to operate and interact with their customers and clients</p>
    <Button className={styles.heroBtn}>
      Get started
    </Button>
     </div>
    <img className='full-width full-height' src={clipArt} alt="clip_art"/>
    </div>
    <div>
    <img src={fill} alt="fill"/>
    </div>
    <div>
    <img src={greenOutline} alt="greenoutline"/>
    </div>
    <div>
    <img src={outline} alt="outline"/>
    </div>
    <div className={styles.redfill}>
      <img src={red} alt="smallred"/>
    </div>
    <div className={styles.yellowfill}>
    <img src={yellow} alt="smallyellow"/>
    </div>
    <div>
    <img className={styles.circle} src={bubble} alt="bubble" /> 
    </div>
    </Container>
  )
}

export default Herosection