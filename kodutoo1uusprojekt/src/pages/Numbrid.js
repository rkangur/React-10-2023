import React, {useState} from 'react';

function Numbrid() {
    const [numbrid, muudaNumbrid] = useState([4, 23, 7, 39, 19, 0, 9, 14, 135, 16]);

    const sorteeriKasvavalt = () => {
        numbrid.sort((a, b) => a - b);
        muudaNumbrid(numbrid.slice());
    }

    const sorteeriKahanevalt = () => {
        numbrid.sort((a, b) => b - a);
        muudaNumbrid(numbrid.slice());
    }

    const sorteeriEsimeseNumbriJargiTahestikulisesJarjekorras = () => {
        numbrid.sort((a, b) => a.toString().localeCompare(b.toString()));
        muudaNumbrid(numbrid.slice());
    }

    const sorteeriVastupidiEsimeneNumber = () => {
        numbrid.sort((a, b) => b.toString().localeCompare(a.toString()));
        muudaNumbrid(numbrid.slice());
    }

    const originaali = () => {
        muudaNumbrid([4, 23, 7, 39, 19, 0, 9, 14, 135, 16]);
    }

    const filtreeriSuuremadKui8 = () => {
        const vastus = numbrid.filter(yksNumber => yksNumber > 8);
        muudaNumbrid(vastus);
    }

    const filtreeriVaiksemadKui10 = () => {
        const vastus = numbrid.filter(yksNumber => yksNumber < 10);
        muudaNumbrid(vastus);
    }

    const filtreeriPaariArvud = () => {
        const vastus = numbrid.filter(yksNumber => yksNumber % 2 === 0);
        muudaNumbrid(vastus);
    }

    const filtreeriPaaritudArvud = () => {
        const vastus = numbrid.filter(yksNumber => yksNumber % 2 !== 0);
        muudaNumbrid(vastus);
    }

    const filtreeriArvudAlgusega1 = () => {
        const vastus = numbrid.filter(yksNumber => yksNumber.toString().startsWith("1"));
        muudaNumbrid(vastus);
    }

    const filtreeriArvudMisSisaldavad3 = () => {
        const vastus = numbrid.filter(yksNumber => yksNumber.toString().includes("3"));
        muudaNumbrid(vastus);
    }


    return (
        <div>
            <button onClick={originaali}>Originaali</button>
            <br /><br />
            <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
            <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
            <button onClick={sorteeriEsimeseNumbriJargiTahestikulisesJarjekorras}>Sorteeri esimese numbri järgi</button>
            <button onClick={sorteeriVastupidiEsimeneNumber}>Sorteeri vastupidi esimene number</button> <br />
            <br /><br />
            <button onClick={filtreeriSuuremadKui8}>Filtreeri suuremad kui 8</button>
            <button onClick={filtreeriVaiksemadKui10}>Filtreeri väiksemad kui 10</button>
            <button onClick={filtreeriPaariArvud}>Jäta alles paarisarvud</button>
            <button onClick={filtreeriPaaritudArvud}>Jäta alles paaritud arvud</button>
            <button onClick={filtreeriArvudAlgusega1}>Jäta alles arvud, mis algavad 1-ga</button>
            <button onClick={filtreeriArvudMisSisaldavad3}>Jäta alles arvud, mis sisaldavad 3</button>
            {numbrid.map(yksNumber => <div>{yksNumber}</div>)}
        </div>
    )
}

export default Numbrid