import React from 'react'
import styles from './Title.css'

export default (props) => {
  return (
    <div className={styles.title}>
      {props.text}
    </div>
  )
}
