import React, { Component } from 'react'
import styles from './About.css'
import Title from '../Title/Title'
import WithWhom from '../Whom/Whom';

export default class About extends Component {
  render() {
    return (
      <>
      <Title text="O mnie"/>
      <div className={styles.container}>
      {/* Lewa kolumna */}
      <p className={styles.bio}>
      Na imię mi Alicja Nazwisko. Jestem absolwentką Podyplomowego Studium Rachunkowości Uniwersytetu Ekonomicznego w Poznaniu. 
      Pochodzę z rodziny o tradycjach księgowych.
      Firmę prowadzę od 2011 roku. 
      Zajmuję się prowadzeniem rachunkowości mikro i małych firm ( księgi handlowe, PKPIR, ryczałt od przychodów ewidencjonowanych), 
      prowadzę również rozliczenia z ZUSem i sprawy kadrowe. 
      Oprócz firm prowadzę również rozliczenia rolników - podatników VAT oraz księgowość stowarzyszeń i fundacji. 
      Zajmuję się również rozliczaniem deklaracji podatkowych osób fizycznych nieprowadzących działalności.
      </p>
      {/* Tutaj wrzucic ToWhom. Prawa kolumna  */}
      <WithWhom className={styles.whom}/>
      </div>
     
      </>
    )
  }
}

// Jestem absolwentką Podyplomowego Studium Rachunkowości Uniwersytetu Ekonomicznego w Poznaniu. Pochodzę z rodziny o tradycjach księgowych.
// Firmę prowadzę od 2011 roku. Zajmuję się prowadzeniem rachunkowości mikro i małych firm.

//( księgi handlowe, PKPIR, ryczałt od przychodów ewidencjonowanych), 
// prowadzę również rozliczenia z ZUSem i sprawy kadrowe. 
//Oprócz firm prowadzę również rozliczenia rolników- podatników VAT oraz księgowość stowarzyszeń i fundacji. 
//(minimum 100 zł, jednak cena uzgadniana jest przeważnie indywidualnie, zależna od ilości rachunków, pracowników itd.)
// Zajmuję się również rozliczaniem deklaracji podatkowych osób fizycznych nieprowadzących działalności gospodarczej 
//(cena 20 zł za osobę indywidualną, 30 za PIT małżonków, 50 zł za PIT z dochodów zagranicznych -PIT 36 z załącznikiem ZG)