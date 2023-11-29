import { useRef, useState } from "react";

function LisaUudis() {
    const uudiseRef = useRef();
    const [sonum, uuendaSonum] = useState("Sisesta uudis!");

    const lisaUusUudis = () => {
        const uudised = JSON.parse(localStorage.getItem("uudised")) || [];
        uudised.push(uudiseRef.current.value);
        localStorage.setItem("uudised", JSON.stringify(uudised));
        uuendaSonum("Aitäh, uudis lisatud!");
    }

    const kontrolli = () => {
        return uudiseRef.current.value.charAt(0) === uudiseRef.current.value.charAt(0).toLowerCase() ? uuendaSonum("Ei sobi, sest sisestatu on väikse algustähega!") :
        (uudiseRef.current.value.includes("  ") ? uuendaSonum("Ei sobi, sest sõnumis on kaks tühikut!"):
        uuendaSonum("Uudise nimi sobib!"));
    }

    return ( 
    <div>
        <div>{sonum}</div>
        <label>Uudise nimi</label>
        <input onChange={kontrolli} ref={uudiseRef} type="text" />
        <button onClick={lisaUusUudis}>Lisa uudis</button>
    </div> );
}

export default LisaUudis;