import React, { useState } from 'react'
import tegevusedFailist from '../data/tegevused.json'

function Tegevused() {
    const [tegevused, uuendaTegevused] = useState(tegevusedFailist);

    const kuvaId = () => {
        const vastus = tegevused.filter(tegevus => tegevus.userId === 1);
        uuendaTegevused(vastus);
    }

    const kuvaId2 = () => {
        const vastus = tegevused.filter(tegevus => tegevus.userId === 2);
        uuendaTegevused(vastus);
    }

    const kuvaId3 = () => {
        const vastus = tegevused.filter(tegevus => tegevus.userId === 3);
        uuendaTegevused(vastus);
    }


    const kuvaLopetatud = () => {
        const vastus = tegevused.filter(tegevus => tegevus.completed === true);
        uuendaTegevused(vastus);
    }

    const kuvaPooleli = () => {
        const vastus = tegevused.filter(tegevus => tegevus.completed === false);
        uuendaTegevused(vastus);
    }

    const kuvaAlgavadT = () => {
        const vastus = tegevused.filter(tegevus => tegevus.title[0] === "t");
        uuendaTegevused(vastus);
    }

    const kuvaRohkemKui20 = () => {
        const vastus = tegevused.filter(tegevus => tegevus.title.length > 20);
        uuendaTegevused(vastus);
    }

    const originaali = () => {
        uuendaTegevused(tegevusedFailist);
    }

    return (
        <div>

            <div>Tegevuste arv on: { tegevused.length } </div>
            <button onClick={() => kuvaId(tegevused)}>Kuva ID 1 tegevused</button>
            <button onClick={() => kuvaId2(tegevused)}>Kuva ID 2 tegevused</button>
            <button onClick={() => kuvaId3(tegevused)}>Kuva ID 3 tegevused</button>
            <button onClick={() => kuvaLopetatud(tegevused)}>Kuva lõpetatud tegevused</button>
            <button onClick={() => kuvaPooleli(tegevused)}>Kuva pooleliolevad tegevused</button>
            <button onClick={() => kuvaAlgavadT(tegevused)}>Kuva kõik "t"-ga algavad tegevused</button>
            <button onClick={() => kuvaRohkemKui20(tegevused)}>Kuva tegevused, millel on tähemärke rohkem kui 20</button>
            <button onClick={() => originaali(tegevused)}>Kuva originaaltegevused</button>

            {tegevused.map(tegevus =>
                <div key={tegevus.id}>
                    <div>{tegevus.userId}</div>
                    <div>{tegevus.id}</div>
                    <div>{tegevus.title}</div>
                    <div>{tegevus.completed}</div>
                    <br />
                </div>)}
        </div>
    )
}

export default Tegevused