import styles from "./products.module.css";
import PhonePicture from "../../assets/images/phonePicture2.svg";

function ProductSection5() {
  return (
    <div className={`flex flex-col full-width gap-xlg center ${styles.app3container}`}>
    <div>
     <img
       className={styles.phonePicture}
       src={PhonePicture}
       alt="picture_of_work"
     />
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

export default ProductSection5