
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import footerLinks from '../utils/footer'
import styles from './layout.module.css';



function Footer() {
  return (
    <section className={`flex flex-col gap-md  ${styles.footer}`}>
      <div className='flex flex-col gap-md'>
      <div className='flex flex-col gap-sm'>
      <h1>
       Webxiel
      </h1>
      <p>Convenient and Professional service</p>
      <ul className='flex gap-lg'>
        {footerLinks.map((link) => (
          <li key={link.id}>
           <a href={link.link}>
            <link.icon/>
           </a>
          </li>
        ))}
      </ul>
      </div>
      <div className='flex flex-col gap-sm'>
        <h2>Contact info</h2>
        <ul className='flex flex-col gap-sm'>
          <li className='flex gap-sm'><FaPhone/> 09021526497</li>
          <li className='flex gap-sm'><FaEnvelope/> webxiel@gmail.com</li>
        </ul>
      </div>
      </div>
      <hr/>
      <div className={`flex ${styles.lastInfo}`}>
          <span>
            &copy;
            {' '}
            {new Date().getFullYear()}
            {' '}
            Webxiel
            All rights reserved.
          </span>
        </div>
    </section>
  )
}

export default Footer