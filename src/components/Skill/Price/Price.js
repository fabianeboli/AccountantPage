import React from 'react'
import styles from './Price.css'

export default (props) => {
  return (
    <>
       <div className={styles.price}>
         {props.prePrice} <span id={styles.value}>{props.value}</span> <span id={styles.postPrice}> {props.postPrice}</span>
        </div>
    </>
  )
}


