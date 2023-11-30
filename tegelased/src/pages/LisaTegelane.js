import React, { useRef, useState } from 'react';

function LisaTegelane() {

  const [sonum, uuendaSonum] = useState("");
  const nimiRef = useRef();
  const perenimiRef = useRef();
  const elukohtRef = useRef();
  const vanusRef = useRef();

  const lisaUusTegelane = () => {
  if (nimiRef.current.value === "") {
    uuendaSonum("Tühja nimega ei saa sisestada");
  }else {
    uuendaSonum("Tegelane lisatud!"); <br />
    const tegelased = JSON.parse(localStorage.getItem("tegelased")) || [];
    tegelased.push({
      "eesnimi": nimiRef.current.value,
      "perenimi": perenimiRef.current.value,
      "elukoht": elukohtRef.current.value,
      "vanus": vanusRef.current.value,
    })
    localStorage.setItem("tegelased", JSON.stringify(tegelased));
    }
  }

  return (
    <div>
        <div>{sonum}</div>
        <label>Tegelase nimi</label> <br />
        <input ref={nimiRef} type="text" /> <br />
        <label>Tegelase perenimi</label> <br />
        <input ref={perenimiRef} type="text" /> <br />
        <label>Tegelase elukoht</label> <br />
        <input ref={elukohtRef} type="text" /> <br />
        <label>Tegelase vanus aastates</label> <br />
        <input ref={vanusRef} type="text" /> <br />
        <button onClick={lisaUusTegelane}>Lisa uus</button>

    </div>
  )
}

export default LisaTegelane