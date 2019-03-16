import React from 'react';
import styles from './ContactInfo.css'

export default (props) => {
  return (
    <div className={styles.container}>
    <h2 id={styles.title}>{props.title}</h2>
    <p id={styles.text}>{props.children}</p>
    </div>
  )
}
