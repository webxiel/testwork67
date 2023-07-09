
import Container from "../ui/Container";
import performance from "../../assets/images/performance.svg";
import secureTime from "../../assets/images/secure.svg";
import time from "../../assets/images/time.svg";
import Button from "../ui/Button";
import styles from './homepage.module.css';


function AboutSection() {

  return (
    <Container className={`grid grid-2 gap-xs ${styles.aboutContainer}`}>
      <div className='flex flex-col gap-lg'>
        <div className='flex gap-sm'>
          <img src={performance} alt="performance" />
          <span>
            <h2>Best Performance</h2>
            <p>
              We deliver the best products ranging from websites to mobile
              applications
            </p>
          </span>
        </div>
        <div className='flex gap-sm'>
          <img src={time} alt="time" />
          <span>
            <h2>Best Performance</h2>
            <p>
              We deliver the best products ranging from websites to mobile
              applications
            </p>
          </span>
        </div>
        <div className='flex gap-sm'>
          <img src={secureTime} alt="secured_time" />
          <span>
            <h2>Best Performance</h2>
            <p>
              We deliver the best products ranging from websites to mobile
              applications
            </p>
          </span>
        </div>
      </div>
      <div>
        <h3>About Webxiel</h3>
        <h4>We create Modern and High Quality Products for your Business.</h4>
        <p>
          We are a web based company looking at enabling business strive better
          online, using better web technologies.
        </p>
        <Button className={styles.aboutBtn}>Get started</Button>
      </div>
    </Container>
  );
}

export default AboutSection;
