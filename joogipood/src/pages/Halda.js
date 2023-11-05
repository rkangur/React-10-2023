import React, { useRef, useState } from 'react'

function Halda() {
    const [joogid, uuendaJooke] = useState(["Põltsamaa", "Aura", "Värska", "Kadarbik", "Saku"]);
    const inputiLuger = useRef();

    const kustuta = (indeks) => {
        joogid.splice(indeks, 1);
        uuendaJooke(joogid.slice());
    }

    const lisaUusJook = () => {
        joogid.push(inputiLuger.current.value);
        uuendaJooke(joogid.slice());
    }

    return (
        <div>
            { joogid.map((jook, indeks) => 
            <div key={indeks}>
            {jook}
            <button onClick={() => kustuta(indeks)}>X</button>
            </div> )}

            <label>Lisa uus jook</label>
            <input ref={inputiLuger} type="text" /> <br />
            <button onClick={lisaUusJook}>Sisesta</button>
        </div>
    )
}

export default Halda