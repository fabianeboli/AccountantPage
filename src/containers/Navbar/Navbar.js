import React from 'react';
import styles from './Navbar.css';

export default () => {
  return (
    <>
      <nav className={styles.navBar}>
          <li><a href='#about'>O mnie</a></li>
          <li><a href='#offer'>Cennik rozliczeń</a></li>
          <li><a href='#contact'>Kontakt</a></li>
      </nav>
    </>
  )
}
