import React from 'react'
import Skill from '../Skill/Skill';
import Title from '../Title/Title';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import styles from './Skills.css';
import Price from '../../components/Skill/Price/Price'

export default () => {
  return (
    <div>
      <Title text="Cennik" />
      <div className={styles.skills}>
        <Skill className={styles.skill} text="Rozliczenia osób fizycznych" icon={faPercent}>
          <Price prePrice='' value='20 zł' postPrice='osobę indiwidualną' />
          <Price prePrice='' value='30 zł' postPrice='PIT małżonków' />
          <Price prePrice='' value='50 zł' postPrice='PIT z dochodów zagranicznych (PIT 36)' />
        </Skill>
        <Skill className={styles.skill} text="Rozliczenia osób prywatnych" icon={faPercent} >
          <Price prePrice='od' value='100 zł' postPrice=' zależna od ilości rachunków, pracowników' />
        </Skill>
      </div>
    </div>
  )
}
