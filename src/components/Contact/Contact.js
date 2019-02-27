import React from 'react'
import Map from '../../containers/Map/Map'
import Title from '../Title/Title'
import ContactInfo from '../../containers/ContactInfo/ContactInfo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faAt, faCalendarWeek, faMobileAlt, 
  faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import styles from './Contact.css'
// ZAMIENIC NA IKONKI
export default () => {
  return (
    <>
    <Title text='Kontakt' />
    <div className={styles.container}>
      <ContactInfo title="Adres biura" >
        <FontAwesomeIcon icon={faBuilding} color='#159957'/>Strzelno, Ostrowo 4 <br />
        <FontAwesomeIcon icon={faEnvelopeSquare} color='#159957'/>88-320
      </ContactInfo>
      <ContactInfo title="Kontakt">
      <FontAwesomeIcon icon={faAt} color='#159957'/><a href="mailto:alicja.ziolkowska29@gmail.com">alicja.ziolkowska29@gmail.com</a><br />
      <FontAwesomeIcon icon={faMobileAlt} color='#159957'/> <a href="tel:884211566">884 211 566 </a>
      <FontAwesomeIcon icon={faFacebookSquare} color='#159957'/> <a href='https://www.facebook.com/vatpitostrowo/'>VatPitOstrowo</a>
      </ContactInfo>
      <ContactInfo title="Godziny otwarcia">
      <FontAwesomeIcon icon={faCalendarWeek} color='#159957'/> pon-pt: 8-16
      </ContactInfo>
    </div>
      <Map />
    </>
  )
}
