import styles from "./appsection.module.css";
import PhonePicture from "../../../assets/images/PhonePicture.svg";
import pinkimage from "../../../assets/images/pinkgrame.svg";
import yellowimage from "../../../assets/images/yellowFrame.svg";

function AppSection2() {
  return (
    <div className={`flex flex-col full-width center gap-xlg ${styles.app2container}`}>
      <div>
        <h2>Real estate App</h2>
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
      <img className={styles.phonePic1} src={yellowimage} alt="pink" />
      <img className={styles.phonePic2} src={pinkimage} alt="yellow" />
    </div>
    </div>
  );
}

export default AppSection2;
