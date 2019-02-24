import React, { Component } from 'react'
import styles from './About.css'
import Title from '../Title/Title'
export default class About extends Component {
  render() {
    return (
      <>
      <Title text="O mnie"/>
      <p className={styles.bio}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia enim sed condimentum pretium. 
        In porta, neque nec dictum interdum, orci nisl varius mauris, quis interdum tortor leo molestie enim. 
        Aliquam a ipsum hendrerit, aliquam mi quis, fermentum ex. Cras ac felis fermentum urna aliquet tempus eu quis purus. 
        Phasellus cursus ligula sed orci sollicitudin, nec congue ex commodo. Donec quis posuere nulla. 
        Nullam vulputate urna in condimentum iaculis. Nunc consectetur ac tortor eget fringilla. Quisque in augue velit. 
      </p>
      <p className={styles.bio}>
       Suspendisse nec tempus ex. Proin a dolor augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
       Quisque vel faucibus felis, et laoreet risus. Nulla facilisi. Nulla sed mauris aliquet, rhoncus felis vitae, euismod eros. 
       In dictum sem quis nisi pellentesque, suscipit tincidunt justo mattis. Cras ultrices, nunc ac gravida finibus,
       magna augue accumsan quam, quis tristique felis massa varius justo. Etiam tortor quam, condimentum a felis in, vulputate viverra quam. 
      </p>
      </>
    )
  }
}

