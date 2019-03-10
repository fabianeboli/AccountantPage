import React from 'react'
import Skill from '../Skill/Skill';
import Title from '../Title/Title';
import { faUser, faBuilding } from '@fortawesome/free-solid-svg-icons';
import styles from './Skills.css';
import Price from '../../components/Skill/Price/Price'

export default () => {
  return (
    <div className={styles.section}>
      <Title text="Cennik rozliczeń" id='offer' />
      <div className={styles.skills}>
        <Skill className={styles.skill} text="Osoby fizyczne" icon={faUser}>
          <Price prePrice='' value='20zł' postPrice='za osobę' />
          <Price prePrice='' value='30zł' postPrice='PIT małżonków' />
          <Price prePrice='' value='50zł' postPrice='PIT z dochodów zagranicznych (PIT 36)' />
        </Skill>
        <Skill className={styles.skill} text="Osoby prywatne" icon={faBuilding} >
          <Price prePrice='od' value='100zł' postPrice=' zależnie od ilości rachunków, pracowników' />
        </Skill>
      </div>
    </div>
  )
}
