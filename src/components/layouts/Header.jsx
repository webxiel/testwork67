import {useState} from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from 'react-router-dom';

import styles from './layout.module.css';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = useLocation.pathname;

const handleMenu = () => {
  setOpenMenu(!openMenu)
}

  const HeaderLinks = [
    { id: 1, name: "Home", link: "/" },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Services",
      link: "/services",
    },
    {
      id: 4,
      name: "Products",
      link: "/products",
    },
    {
      id: 5,
      name: "Contact us",
      link: "/contact",
    },
  ];
  return (
    <section className={`full-width ${styles.navContainer}`}>
      <nav className='flex'>
        <h1>Logo</h1>
        <ul className={`flex gap-sm ${styles.navList} ${
          openMenu ? styles.mobile : ''
        }`}>
          {HeaderLinks.map((links) => (
            <li key={links.id}>
              <Link className={pathname === links.link ? styles.active : ''} to={links.link}>
                {links.name}
              </Link>
            </li>
          ))}
        </ul>

        <button type="button" onClick={handleMenu} className='flex gap flex-col center'>
          <span className={styles.line} />
          <span className={styles.line}/>
          <span className={styles.line} />
        </button>
      </nav>
    </section>
  );
}

export default Header;
