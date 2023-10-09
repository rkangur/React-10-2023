import React, { useRef, useState } from 'react'

function LisaToode() {

  const [sonum, uuendaSonum] = useState("Lisa toode!");
  const inputLuger = useRef();

  // function lisa () {
  //   if (inputLuger.current.value === "") {
  //     uuendaSonum("Tühja nimetusega toodet ei saa lisada");
  //   }
  //   else {
  //     uuendaSonum("Toode lisatud: " + inputLuger.current.value);
  //   }
  // }

  const lisa = () => {
    if (inputLuger.current.value === "") {
      uuendaSonum("Tühja nimetusega toodet ei saa lisada");
    }
    else {
      uuendaSonum("Toode lisatud: " + inputLuger.current.value);
    }
  }

  return (
    <div>
      <label>Toote nimi</label> <br />
      <input ref={inputLuger} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
      <div>{sonum}</div>
    </div>
  )
}

export default LisaToode