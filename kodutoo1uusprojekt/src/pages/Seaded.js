import React, { useState } from 'react'

function Seaded() {
  const [kujundus, muudaKujundus] = useState(localStorage.getItem("veebilehe_kujundus") || "light_mode");

  const kujundusTume = () => {
    muudaKujundus("dark_mode");
    localStorage.setItem("veebilehe_kujundus", "dark_mode");
  }

  const kujundusHele = () => {
    muudaKujundus("light_mode");
    localStorage.setItem("veebilehe_kujundus", "light_mode");
  }

  const kujundusSinine = () => {
    muudaKujundus("blue_mode");
    localStorage.setItem("veebilehe_kujundus", "blue_mode");
  }

  return (
    <div>
      { kujundus ==="dark_mode" && <div className='dark'>TUME LEHT</div> }
      { kujundus ==="light_mode" && <div className='light'>HELE LEHT</div> }
      { kujundus ==="blue_mode" && <div className='blue'>SININE LEHT</div> }
      <button onClick={kujundusTume}>Tume lehekülg</button>
      <button onClick={kujundusHele}>Hele lehekülg</button>
      <button onClick={kujundusSinine}>Sinine lehekülg</button>
    </div>
  )
}

export default Seaded
