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
    uuendaKogus(kogus - 1)
    uuendaSonum("Vähendasid kogust!");
  }

  function nulli() {
    uuendaKogus(false)
    uuendaSonum("Nullis!");
  }

  return (
    <div>
      <span>{laigitud === false && 0}</span>
      <span>{laigitud === true && 1}</span>
      {laigitud === false && <button onClick={() => uuendaLaigitud(true)}>Laigituks</button>}
      {laigitud === true && <button onClick={() => uuendaLaigitud(false)}>Mitte laigitud</button>}

      <br/>
      <br/>

      <div>{sonum}</div>
      {kogus !== 0 && <button onClick={() => nulli()}>Tagasi nulli</button>}
      <button onClick={() => vahenda()}>-</button>
      <span>{kogus}</span>
      <button onClick={() => suurenda()}>+</button>
    </div>
  )
}

export default Avaleht