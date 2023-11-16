import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';

function Kontakt() {
  const [n2itaTelSten, muudaN2itaTelSten] = useState(false);
  const { t } = useTranslation();

  return (
    <div>
        <div className='gradient'>
            <span>{t("ajakirjanik")} Mari: </span>
            <span>mari@setteriuudised.ee</span> 
            {false && <span>+372 5782900</span>}
            <span className={n2itaTelSten === true ? "valitud" : undefined} onClick={() => muudaN2itaTelSten(!n2itaTelSten)}>{t("ajakirjanik")} Sten: </span>
            <span>sten@setteriuudised.ee</span>
            {n2itaTelSten && <span className='valitud'>+372 5782900</span>}
        </div>
        <div className='tere'>info@setteriuudised.ee</div>
        <img alt='koerake' className='kutsu' src='https://animals.net/wp-content/uploads/2019/02/English-Setter-4-650x425.jpg'/>
    </div>
  )
}

export default Kontakt