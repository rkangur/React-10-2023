import React, { useRef, useState } from 'react'

function Tagasiside() {
    const [tagasiside, maaraTagasisided] = useState(["hea, põnev, halb, igav"]);
    const tagasiSideRef = useRef();

    const kustuta = (indeks) => {
        tagasiside.splice(indeks, 1);
        maaraTagasisided(tagasiside.slice());
    }

    const lisaUusTagasiside = () => {
        tagasiside.push(tagasiSideRef.current.value);
        maaraTagasisided(tagasiside.slice());
    }

    return (
        <div>Tagasisided: 
            { tagasiside.map((element, indeks) => 
            <div>
                <span>{element}</span>
                <button onClick={() => kustuta(indeks)}>Kustuta</button>
            </div>)}
            <br /> <br />
            
            <label>Kirjuta tagasiside: </label>
            <input ref={tagasiSideRef} type="text" />
            <button onClick={() => lisaUusTagasiside()}>Sisesta</button>
        
        </div>
    )
}

export default Tagasiside