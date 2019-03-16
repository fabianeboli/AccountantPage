import React from 'react';
import Title from '../../components/Title/Title';
import styles from '../Whom/Whom.css'
import Enterprise from './Enterprise/Enterprise'; 
import farmImg from '../../Images/pexels-photo-farmS-min.jpeg';
import buildingImg from '../../Images/pexels-photo-building-min.jpeg';
import peopleImg from '../../Images/pexels-photo-together-resized-min.jpeg';

export default () => {
  return (
    <div className={styles.container}>
      {/* <Title text='Współpracuje'/> */}
       <Enterprise image={farmImg} alt='rolnicy' text='Rolnicy'/>
       <Enterprise image={buildingImg} alt='Przedsiębiorstwa' text='Przedsiębiorstwa'/>
       <Enterprise image={peopleImg} alt='stowarzyszenia i fundacje' text='Stowarzyszenia i fundacje'/>
    </div>
  )
}
