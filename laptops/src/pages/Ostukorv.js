import React, { useState } from 'react'

function Ostukorv() {
    const [ostukorv, uuendaOstukorv] = useState(JSON.parse(localStorage.getItem("cartLaptops")) || []);

    const kustuta = (index) => {
        ostukorv.slpice(index, 1);
        uuendaOstukorv(ostukorv.slice());
        localStorage.setItem("cartLaptops", JSON.stringify(ostukorv));
    }

    return (
        <div>
            { ostukorv.map((arvuti, index) =>
                <div key={index}>
                    <div>{arvuti.mark} </div> <br />
                    <button onClick={kustuta(index)}>X</button>
                    <div>{arvuti.mudel} </div> <br />
                    <button onClick={kustuta(index)}>X</button>
                    <div>{arvuti.maksumus} </div> <br />
                    <button onClick={kustuta(index)}>X</button>
                </div>)}
        </div>
    )
}

export default Ostukorv