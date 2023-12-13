import React, { useEffect, useState } from 'react';
import config from '../data/config.json';

function Halda() {
    const [joogid, uuendaJooke] = useState([]);

    useEffect(() => {
        fetch(config.joogidDbUrl)
            .then(res => res.json())
            .then(json => uuendaJooke(json || []));
    }, []);

    const kustuta = (indeks) => {
        joogid.splice(indeks, 1);
        uuendaJooke(joogid.slice());
        fetch(config.joogidDbUrl, {"method": "PUT", "body": JSON.stringify(joogid)});
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