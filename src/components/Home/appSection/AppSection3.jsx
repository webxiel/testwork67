import styles from "./appsection.module.css";
import PhonePicture from "../../../assets/images/PhonePicture.svg";
import pinkimage from "../../../assets/images/pinkgrame.svg";
import yellowimage from "../../../assets/images/yellowFrame.svg";

function AppSection3() {
  return (
    <div className={`flex flex-col full-width gap-xlg center ${styles.app3container}`}>
     <div>
      <img
        className={styles.phonePicture}
        src={PhonePicture}
        alt="picture_of_work"
      />
      <img className={styles.phonePic1} src={yellowimage} alt="pink" />
      <img className={styles.phonePic2} src={pinkimage} alt="yellow" />
     </div>
      <div>
        <h2>School Manager</h2>
        <p>
        Wash now is a laundry app which helps user find Laundry stores near them. The user can also pay and get there laundry picked up and delivered when the service is done. {" "}
        </p>
      </div>
    </div>
  )
}

export default AppSection3