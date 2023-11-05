import React, { useRef } from 'react';
import joogidFailist from '../data/joogid.json';

function Lisa() {
    const inputiLuger = useRef();

    const lisaUusJook = () => {
        joogidFailist.push(inputiLuger.current.value);
    }

    return (
        <div>
            <label>Lisa uus jook</label>
            <input ref={inputiLuger} type="text" /> <br />
            <button onClick={lisaUusJook}>Sisesta</button>
        </div>
    )
}

export default Lisa