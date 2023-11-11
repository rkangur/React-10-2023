import React, { useState } from 'react'
import kasutajadFailist from '../data/kasutajad.json'

function Kasutajad() {
    const [kasutajad, uuendaKasutajad] = useState(kasutajadFailist);

    const originaali = () => {
        uuendaKasutajad(kasutajadFailist);
    }

    const kuvaRohkemKui10 = () => {
        const vastus = kasutajad.filter(kasutaja => kasutaja.username.length >= 10);
        uuendaKasutajad(vastus);
    }

    const kustuta = (kasutaja) => {
        const index = kasutajad.indexOf(kasutaja);
        kasutajad.splice(index, 1);
        uuendaKasutajad(kasutajad.slice());
    }

    const findIndexLucio = () => {
        console.log(kasutajad.findIndex(user => user.email === "Lucio_Hettinger@annie.ca"));
    }

    const kuvaEsimeneC = () => {
        console.log(kasutajad.find(kasutaja => kasutaja.name[0] === "C"));
    }

    const sorteeriLatJargi = () => {
        kasutajad.sort((kasutaja, teineKasutaja) => kasutaja.address.geo.lat.localeCompare(teineKasutaja.address.geo.lat))
        uuendaKasutajad(kasutajad.slice());
    }

    const naitaPos = () => {
        const vastus = kasutajad.filter(kasutaja => kasutaja.address.geo.lng > 0);
        uuendaKasutajad(vastus);
    }

    const liidaId = () => {
        let summaId = 0;
        kasutajad.forEach(kasutaja => {
            summaId += kasutaja.id;
        });
        console.log(summaId);
    }

    const lisaTel000 = () => {
        const vastus = kasutajad.map(kasutaja => ({...kasutaja, phone: "000" + kasutaja.phone}));
        uuendaKasutajad(vastus);
    }

    const teeMeiliMassiiv = () => {
        console.log(kasutajad.map(user => user.email));
    }

    const asendaACatchphraseE = () => {
        const vastus = kasutajad.map(user => (
            {...user, company: {...user.company, catchPhrase: user.company.catchPhrase.replaceAll("a", "e")}}
            ));
        uuendaKasutajad(vastus);
    }

    return (
        <div>
            <div>Kasutajaid on {kasutajad.length} tk </div>
            <button onClick={() => originaali()}>Originaali</button>
                    <button onClick={() => kuvaRohkemKui10()}>Kuva, kellel on rohkem kui 10 tähte</button>
                    <button onClick={() => findIndexLucio()}>findLucio</button>
                    <button onClick={() => kuvaEsimeneC()}>Esimene, kes algab "C"-ga</button>
                    <button onClick={() => sorteeriLatJargi()}>Sorteeri lat järgi</button>
                    <button onClick={() => naitaPos()}>Näita lng positiivseid</button>
                    <button onClick={() => liidaId()}>Id kokku</button>
                    <button onClick={() => lisaTel000()}>Lisa "000" algus telefonile</button>
                    <button onClick={() => teeMeiliMassiiv()}>Tee massiiv meilidest</button>
                    <button onClick={() => asendaACatchphraseE()}>Asenda a-d e-dega catchphrase sees</button>
            <div>
                {kasutajad.map(kasutaja =>
                <div key={kasutaja.id}>
                    <div>{kasutaja.name}</div>
                    <div>{kasutaja.username}</div>
                    <div>{kasutaja.email}</div>
                    <div>{kasutaja.address.street}</div>
                    <div>{kasutaja.address.suite}</div>
                    <div>{kasutaja.address.city}</div>
                    <div>{kasutaja.address.zipcode}</div>
                    <div>{kasutaja.address.geo.lat}</div>
                    <div>{kasutaja.address.geo.lng}</div>
                    <div>{kasutaja.phone}</div>
                    <div>{kasutaja.website}</div>
                    <div>{kasutaja.company.name}</div>
                    <div>{kasutaja.company.catchPhrase}</div>
                    <div>{kasutaja.company.bs}</div>
                    <button onClick={() => kustuta()}>X</button>
                    <br />
                </div>)}
            </div>
        </div>
    )
}

export default Kasutajad