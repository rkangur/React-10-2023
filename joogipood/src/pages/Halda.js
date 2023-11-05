import React, { useState } from 'react';
import joogidFailist from '../data/joogid.json';

function Halda() {
    const [joogid, uuendaJooke] = useState(joogidFailist);

    const kustuta = (indeks) => {
        joogid.splice(indeks, 1);
        uuendaJooke(joogid.slice());
    }

    return (
        <div>
            { joogid.map((jook, indeks) => 
            <div key={indeks}>
            {jook}
            <button onClick={() => kustuta(indeks)}>X</button>
            </div>)}
        </div>
    )
}

export default Halda