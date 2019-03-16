import React from 'react'
import styles from './Enterprise.css'

export default (props) => {
    return (
        <div className={styles.container}>
            <img src={props.image} alt={props.alt} className={styles.image} />
            <div className={styles.overlay}>
                <div className={styles.text}>{props.text}</div>
            </div>
        </div>
    )
}
