import React from 'react'
import { useState } from 'react'

function Kontakt() {

  const [n2itaTelSten, muudaN2itaTelSten] = useState(false);

  return (
    <div>
        <div className='gradient'>
            <span>ajakirjanik Mari: </span>
            <span>mari@setteriuudised.ee</span> 
            {false && <span>+372 5782900</span>}
            <span onClick={() => muudaN2itaTelSten(!n2itaTelSten)}>ajakirjanik Sten: </span>
            <span>sten@setteriuudised.ee</span>
            {n2itaTelSten && <span>+372 5782900</span>}
        </div>
        <div className='tere'>info@setteriuudised.ee</div>
        <img alt='koerake' className='kutsu' src='https://animals.net/wp-content/uploads/2019/02/English-Setter-4-650x425.jpg'/>
    </div>
  )
}

export default Kontakt