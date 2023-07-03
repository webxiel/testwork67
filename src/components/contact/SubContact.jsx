import styles from './contact.module.css';
import telephone from '../../assets/icons/telephoneicon.svg';
import mail from '../../assets/icons/mailicon.svg'

function SubContact() {
  return (
    <div className={`flex flex-col gap-xs ${styles.subcontact}`}>
      <h2>Contact Details</h2>
      <div className='flex flex-col gap-sm'>
        <h3>Contact info</h3>
        <p><img src={telephone} alt="phone"/>09021526497</p>
        <p><img src={mail} alt="mail"/> webxiel@gmail.com</p>
      </div>
    </div>
  )
}

export default SubContact