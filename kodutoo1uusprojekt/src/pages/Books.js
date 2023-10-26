import React, { useState } from 'react'

function Books() {
    const [books, muudaBooks] = useState(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Jane Eyre", "OZ"]);
    const [sonadeArv, muudaSonadeArv] = useState(0);

    const sorteeriAZ = () => {
        books.sort();
        muudaBooks(books.slice()); 
    }

    const sorteeriZA = () => {
        books.sort((a,b) => b.localeCompare(a)); 
        muudaBooks(books.slice());
    }

    const sorteeriSonaPikkus = () => {
        books.sort((a, b) => a.length - b.length);
        muudaBooks(books.slice()); 
    }

    const sorteeriTeineTaht = () => {
        books.sort((a, b) => a.charAt(1).localeCompare(b.charAt(1)));
        muudaBooks(books.slice());
    }

    const sorteeriSonadeArv = () => {
        //TODO
    }

    const sorteeriEelviimaneTaht = () => {
        books.sort((a, b) => a.at(a.length-2).localeCompare(b.at(b.length-2)));
        muudaBooks(books.slice());
    }

    const originaali = () => {
        muudaBooks(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Jane Eyre", "OZ"]);
    }

    const filtreeriKesSisaldabandyhendit = () => {
        const vastus = books.filter(yksRaamat => yksRaamat.includes("and"));
        muudaBooks(vastus);
    }

    const filtreeriTheAlgavad = () => {
        const vastus = books.filter(yksRaamat => yksRaamat.startsWith("The"));
        muudaBooks(vastus);
    }

    const filtreeriKuiSõnapikkusSuuremKuiKümme = () => {
        const vastus = books.filter(yksRaamat => yksRaamat.length > 10);
        muudaBooks(vastus);
    }

    const filtreeriKuiSõnapikkusVähemKuiSeitse = () => {
        const vastus = books.filter(yksRaamat => yksRaamat.length < 7);
        muudaBooks(vastus);
    }

    const filtreeriKuiSõnuRohkemKuiKolmSona = () => {
        //TODO
    }
    const filtreeriKuiEelviimaneTahtC = () => {
        const vastus = books.filter(yksRaamat => yksRaamat.at(yksRaamat.length-2) === "c");
        muudaBooks(vastus);
    }

    return (
        <div>
            <button onClick={originaali}>Tagasi originaali</button> <br />
            <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
            <button onClick={sorteeriZA}>Sorteeri Z-A</button>
            <button onClick={sorteeriSonaPikkus}>Sorteeri sõnapikkuse järgi</button>
            <button onClick={sorteeriTeineTaht}>Sorteeri sõna teise tähe järgi</button>
            <button onClick={sorteeriEelviimaneTaht}>Sorteeri Eelviimase tähe järgi</button>
            <button onClick={sorteeriSonadeArv}>Sorteeri sõnade arvu järgi</button> <br />
            <button onClick={filtreeriTheAlgavad}>Filtreeri The-ga Algavad</button>
            <button onClick={filtreeriKesSisaldabandyhendit}>Filtreeri "and" lühend</button>
            <button onClick={filtreeriKuiSõnapikkusSuuremKuiKümme}>Filtreeri lühend kui rohkem kui 10 tähte</button>
            <button onClick={filtreeriKuiSõnapikkusVähemKuiSeitse}>Filtreeri lühend kui vähem kui 7 tähte</button>
            <button onClick={filtreeriKuiSõnuRohkemKuiKolmSona}>Filtreeri lühend kui rohkme kui 3 sõna</button>
            <button onClick={filtreeriKuiEelviimaneTahtC}>Filtreeri lühend kui eelviimane täht "c"</button>
            {books.map(yksRaamat => <div>{yksRaamat}</div>)}
        </div>
    )
}

export default Books