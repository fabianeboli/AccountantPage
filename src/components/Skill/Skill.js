import React from 'react'
import styles from './Skill.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default (props) => {
  return (
    <>
      <div className={styles.skill}>
        <FontAwesomeIcon color='RGBA(21, 130, 87, 0.45)' className={styles.icon} icon={props.icon} size='7x' />
       {props.children}
        <div className={styles.text}>{props.text}</div>
      </div>
    </>
  )
}
// color="RGBA(21, 153, 87, 0.5)"

// rachunki 
// od 100 zł 
// (zależna od ilości pracowników)