import React from 'react'
import Skill from '../Skill/Skill';
import Title from '../Title/Title';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import styles from './Skills.css';

export default () => {
  return (
    <div>
      <Title text="Usługi"/> 
      <div className={styles.skills}>
        <Skill text="PIT" icon={faPercent}/>
        <Skill text="CIT" icon={faPercent}/>
        <Skill text="ZUSOL" icon={faPercent}/>
      </div>
    </div>
  )
}
