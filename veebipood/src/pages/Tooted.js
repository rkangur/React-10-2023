import React, { useState } from 'react'

function Tooted() {
    const [toode, uuendaToodet] = useState(["shoes", "shirts", "socks", "sweaters","pigs", "goats", "sheep", "spray", "limit", "elite", "exuberant", "destruction", "present", "March", "Jan", "Feb", "Dec"]); 

    const kustutaToode = (mitmes) => {
        toode.splice(mitmes, 1);
        uuendaToodet(toode.slice());
    }

    const tyhjenda = () => {
        toode.splice(0);
        uuendaToodet(toode.slice());
    }

    const sorteeri = () => {
        toode.sort();
        uuendaToodet(toode.slice());
    }

    const jataAllesKuiVahemalt4Tahte = () => {
        const vastus = toode.filter(tootekene => tootekene.length >= 4);
        uuendaToodet(vastus);
    }

    const lisa3Toodet = () => {
        toode.push("chickens ");
        toode.push("cats");
        toode.push("dogs");
        uuendaToodet(toode.slice());
    }

    return (
        <div>
            <div> Neid on kokku {toode.length} tk </div>
            <button onClick={() => tyhjenda()}>Tühjenda tootenimekiri</button>
            <button onClick={() => sorteeri()}>Sorteeri tootenimekiri</button>
            <button onClick={() => jataAllesKuiVahemalt4Tahte()}>Kui on rohkem kui 4 tähtega toode tootenimekiri</button>
            <button onClick={() => lisa3Toodet()}>Täienda tootenimekirja!</button>
            {toode.map((tootekene, mitmes) =>
            <div>
                {tootekene}
                <button onClick={() => kustutaToode(mitmes)}>X</button>
            </div>)}
        </div>
    )
}

export default Tooted