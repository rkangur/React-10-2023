import React, { useEffect, useRef, useState } from 'react';
import config from "../data/config.json"

function Lisa() {
    const inputiLuger = useRef();
    const [joogid, setJoogid] = useState([]);

    useEffect(() => {
        fetch(config.joogidDbUrl)
            .then(res => res.json())
            .then(json => setJoogid(json || []));
    }, []);

    const lisaUusJook = () => {
        joogid.push({"nimi": inputiLuger.current.value});
        fetch(config.joogidDbUrl, {"method": "PUT", "body": JSON.stringify(joogid)});
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