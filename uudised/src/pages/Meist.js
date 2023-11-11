import React, { useState } from 'react'

function Meist() {
  const [kontakt, n2itaKontakt] = useState("");
  const [valitud, uuendaValitud] = useState("");

  const tootajad = [
      { 
          nimi: "    Abra",
          ala: "Psychic",
          telefon: "153422" },
      {
          nimi: "    Kadabra",
          ala: "Psychic",
          telefon: "302223"
      },
      {
          nimi: "    Alakazam",
          ala: "Psychic",
          telefon: "456777"
      },
      {
          nimi: "    Machop",
          ala: "Fighting",
          telefon: "50"
      },

      {
          nimi: "    Mari",
          ala: "Fighting",
          telefon: "50223"
      },

  ];

  const votaYhendust = (tootaja) => {
    n2itaKontakt(tootaja.telefon);
    uuendaValitud(tootaja.nimi);
  }

  return (
    <div>

      <div>
        {tootajad.map((tootaja) =>
        <div key={tootaja.nimi} className={tootaja.nimi === valitud ? 'valitud' : undefined}>
          <div>{tootaja.nimi}</div>
          <div>{tootaja.ala}</div>
          <button onClick={() => votaYhendust(tootaja)}>Võta ühendust</button>
          <br /><br />
        </div>)}
      </div>

    {/* <div>Abra</div>
    <div>Psychic</div>
    <button onClick={() => n2itaKontakt("15")}>Näita defence levelit</button> <br/>

    <div>Kadabra</div>
    <div>Psychic</div>
    <button onClick={() => n2itaKontakt("30")}>Näita defence levelit</button> */}

    { kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
    </div>   
    )
}

export default Meist