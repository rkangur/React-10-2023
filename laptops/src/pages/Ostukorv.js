import React, { useState } from 'react'

function Ostukorv() {
    const [ostukorv, uuendaOstukorv] = useState(JSON.parse(localStorage.getItem("cartLaptops")) || []);

    const kustuta = (index) => {
        ostukorv.splice(index, 1);
        uuendaOstukorv(ostukorv.slice());
        localStorage.setItem("cartLaptops", JSON.stringify(ostukorv));
    }

    return (
        <div> <div>Ostukorvis on järgmised tooted:</div> 
            { ostukorv.map((arvuti, index) =>
                <div key={index}>
                    <div>{arvuti.mark} </div> <br />
                    <div>{arvuti.mudel} </div> <br />
                    <div>{arvuti.maksumus} </div> <br />
                    <button onClick={() => kustuta(index)}>X</button>
                </div>)}
        </div>
    )
}

export default Ostukorv