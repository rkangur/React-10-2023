import React from 'react'
import { useState } from 'react';

function Avaleht() {
  const [kogus, uuendaKogus] = useState(7); 
  const [laigitud, uuendaLaigitud] = useState(false);
  const [sonum, uuendaSonum] =useState("Uuenda kogust!");

  function suurenda() {
    uuendaKogus(kogus + 1)
    uuendaSonum("Suurendasid kogust!");
  }

  function vahenda() {
    uuendaKogus(kogus - 1);
    if (kogus === 1) {
  	  uuendaSonum("Kogus on nullitud!")
    } else {
      uuendaSonum("Vähendasid kogust!");
    }
  }

  function nulli() {
    uuendaKogus(false)
    uuendaSonum("Nullis!");
  }

  return (
    <div>
      <span>{laigitud === false && <img src="/mittelaigitud.svg" alt=''/>}</span>
      <span>{laigitud === true && <img src="/laigitud.svg" alt=''/>}</span>
      {laigitud === false && <button onClick={() => uuendaLaigitud(true)}>Laigituks</button>}
      {laigitud === true && <button onClick={() => uuendaLaigitud(false)}>Mitte laigitud</button>}

      <br/>
      <br/>

      <div>{sonum}</div>
      {kogus !== 0 && <button onClick={nulli}>Tagasi nulli</button>}
      <button disabled ={kogus=== 0} onClick={vahenda}>-</button>
      <span className={kogus >= 10 ? "kuldne" : undefined}>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht