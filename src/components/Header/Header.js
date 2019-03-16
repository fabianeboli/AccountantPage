import React from 'react'
import styles from './Header.css'
import NavBar from '../../containers/Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

export default () => {
  return (
    <section className={styles.image}>
      <div className={styles.text}>
        <div className={styles.companyName}>VAT-PIT</div>
        <div className={styles.ownersName}>Alicja Ziółkowska</div>
      </div>
      <a href='#about'>
        <FontAwesomeIcon className={styles.arrow} icon={faArrowCircleDown} size='4x' color='RGBA(255,250,250,0.3)' />
      </a>
        <NavBar />
    </section>
  )
}
