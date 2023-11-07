import React, { useRef, useState } from 'react';
import nimedFailist from '../data/nimed.json';
import { Link } from 'react-router-dom';

function TagasisideAndjad() {
    const [andjad, uuendaAndjad] = useState(nimedFailist);
    const andjaRef = useRef();

    const filtreeriM = () => {
        const vastus = andjad.filter(andja => andja.startsWith("M"));
        uuendaAndjad(vastus);
    }

    const filtreeri6Tahte = () => {
        const vastus = andjad.filter(andja => andja.length === 6);
        uuendaAndjad(vastus);
    }
    const kustuta = (indeks) => {
        andjad.splice(indeks, 1);
        uuendaAndjad(andjad.slice());
    }

    const filtreeriLoppevadY = () => {
        const vastus = andjad.filter(andja => andja.endsWith("y"));
        uuendaAndjad(vastus);
    }

    const sorteeriZA = () => {
        andjad.sort((a,b) => b.localeCompare(a));
        uuendaAndjad(andjad.slice());
    }

    const kirjutaESTette = () => {
        const vastus = andjad.map(andja => "EST-" + andja);
        uuendaAndjad(vastus);
    }

    const lisa = () => {
        andjad.push(andjaRef.current.value);
        uuendaAndjad(andjad.slice());
    }

    return (
        <div>
            <div>Tagasiside andjaid on {andjad.length} tk</div> <br />
            <button onClick={sorteeriZA}>Sorteeri vastupidiselt!</button> <br /> <br />
            <button onClick={filtreeriM}>M-tähega algavad: </button>
            <button onClick={filtreeri6Tahte}>Kuuetähelised: </button>
            <button onClick={filtreeriLoppevadY}>"y"-ga lõppevad: </button>
            <button onClick={kirjutaESTette}>Kirjuta EST ette: </button>
            
            { andjad.map((element, index) =>
                <div key={element}>
                    {element} <button onClick={() => kustuta(index)}>X</button>
                    <Link to={"/yksik-tagasiside-andja/" + index}>
                        <button>Vaata tagasiside andjat</button>
                    </Link>
                </div>
            )}

            <label>Lisa uus: </label> <br />
            <input ref={andjaRef} type="text"/>
            <button onClick={() => lisa()}>Sisesta uus andja</button>
        </div>
  )
}

export default TagasisideAndjad