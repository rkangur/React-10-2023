import { useState } from "react";
import React from 'react'

function Kujundus() {
  const [valitud, uuendaValitud] = useState("family");

  return (
    <div>
      <span className={valitud === "family" ? "pakett-aktiivne" :"pakett"} onClick={() => uuendaValitud("family")}>Family</span>
      <span className={valitud === "standard" ? "pakett-aktiivne" :"pakett"} onClick={() => uuendaValitud("standard")}>Family</span>
      <span className={valitud === "mini" ? "pakett-aktiivne" :"pakett"} onClick={() => uuendaValitud("mini")}>Family</span>
    </div>
  )
}

export default Kujundus