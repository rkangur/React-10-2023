import React, { useState } from 'react'

function Meist() {

  const [kontakt, n2itaKontakt] = useState("");

  return (
    <div>
    <div className='mari'>
        <h2>Mari</h2>
        {/* <button>+37253009872</button> */}
        Mari on tegelenud ajakirjandusega 15 aastat. Ta on väga kogenud koerte uudiste valdkonnas.
        Tema igapäevatöö hõlmab nii näituste kui ka nendeks ettevalmistamise kajastamist.
        Sündmuste infoga saab tutvuda uudiste lehel.
        <br></br>
        <button onClick={() => n2itaKontakt("+37253072072")}>Võta ühendust</button>
    </div>
    <div className='sten'>
        <h2>Sten</h2>
        {/* <button>+37253072872</button> */}
        Sten on kogenud ajakirjanik, koolitaja ja ka koeraomanik. Tal on inglise setteri tõugu koerte kennel.
        Sten pakub kuuletus ja agilty koolitusi. 
        <br></br>
        <button onClick={() => n2itaKontakt("+37253072872")}>Võta ühendust</button>
    </div>
    { kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
    </div>
  )
}

export default Meist