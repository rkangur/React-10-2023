import React, { useState } from 'react';

//https://loading.io/css/

function Loader() {
    const [kasLaeb, uuendaLaadimist] = useState(true); 

  return (
    <div>
        {kasLaeb === true && <div class="lds-heart"><div></div></div>} <br />
        <button onClick={() => uuendaLaadimist(false)}>Lõpeta tuksumine</button>
    </div>
  )
}

export default Loader