import React from 'react'
import Skill from '../Skill/Skill';
import Title from '../Title/Title';
import { faUser, faBuilding } from '@fortawesome/free-solid-svg-icons';
import styles from './Skills.css';
import Price from '../../components/Skill/Price/Price'

export default () => {
  return (
    <div>
      <Title text="Cennik" />
      <div className={styles.skills}>
        <Skill className={styles.skill} text="Rozliczenia osób fizycznych" icon={faUser}>
          <Price prePrice='' value='20zł' postPrice='za osobę' />
          <Price prePrice='' value='30zł' postPrice='PIT małżonków' />
          <Price prePrice='' value='50zł' postPrice='PIT z dochodów zagranicznych (PIT 36)' />
        </Skill>
        <Skill className={styles.skill} text="Rozliczenia osób prywatnych" icon={faBuilding} >
          <Price prePrice='od' value='100zł' postPrice=' zależna od ilości rachunków, pracowników' />
        </Skill>
      </div>
    </div>
  )
}
