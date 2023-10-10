import { useState } from 'react';

function Meist() {

    const [message, määraMessage] = useState ("Vali mõni tegevus")

  return (
    <div>
        <div>{message}</div>
        <button onClick={ () => määraMessage("Selleks saada meile sõnum jobs@html-css.com")}>Kandideeri tööle</button>
        <button onClick={ () => määraMessage("Meil on 10 töötajat, kelle info ilmub meie veebilehele lähiajal")}>Vaata meie töötajaid</button>
        <button onClick={ () => määraMessage("Ühenduse võtmiseks mine kontaktilehele")}>Võta meiega ühendust</button>
    </div>
  )
}

export default Meist