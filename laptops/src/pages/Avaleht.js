import React from 'react'

function Avaleht() {
  const computers = JSON.parse(localStorage.getItem("laptops")) || [];

  const lisaOstukorvi = (arvuti) => {
    const arvutidLS = JSON.parse(localStorage.getItem("cartLaptops")) || [];
    arvutidLS.push(arvuti);
    localStorage.setItem("cartLaptops", JSON.stringify(arvutidLS));
  }

  return (
    <div className='avaleht-text'>
        <div>Tere</div><br></br>
        <div>Siin lehel saad sülearvuteid vaadata ja lisada</div>
        { computers.map (oneComputer => 
          <div key={oneComputer.mudel}>
            <div>{oneComputer.mark}</div>
            <div>{oneComputer.mudel}</div>
            <div>{oneComputer.maksumus}</div>
            <button onClick={() => lisaOstukorvi(oneComputer)}>Lisa ostukorvi</button>
          </div>)}
    </div>
  )
}

export default Avaleht