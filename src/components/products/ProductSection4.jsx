import styles from "../Home/appSection/appsection.module.css";
import PhonePicture from "../../assets/images/phonePicture2.svg";
import Container from '../ui/Container';

function ProductSection4() {
  return (
    <Container>
    <div className={`flex flex-col full-width center gap-xlg ${styles.app2container}`}>
      <div>
        <h2>School work</h2>
        <p>
        This app helps users locate, rent and buy houses from anywhere, anytime.{" "}
        </p>
      </div>
      <div>
      <img
        className={styles.phonePicture}
        src={PhonePicture}
        alt="picture_of_work"
      />
    </div>
    </div>
    </Container>
  )
}

export default ProductSection4