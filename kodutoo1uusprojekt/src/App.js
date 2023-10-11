import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';
import { useRef, useState } from 'react';


function App() {

  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("");
  const kasutajaNimi = useRef(); 
  const paroolRef = useRef();

  const logiVälja = () => {
    muudaSisselogitud("ei")
    muudaSonum("")
  }

  const logiSisse = () => {
    if (paroolRef.current.value === "123" && kasutajaNimi.current.value !== ""){
      muudaSonum (kasutajaNimi.current.value + ", oled sisselogitud!");
      muudaSisselogitud("jah");
    } else if (kasutajaNimi.current.value === ""){
      muudaSonum ("Palun täitke kõik väljad!");
    } else{
      muudaSonum ("Vale parool");
    }
  }

  return (
    <div className="App">
      <div>{sonum}</div>
      
      {sisselogitud === "ei" &&<div>
        <label>Kasutajanimi:</label> <br />
        <input ref={kasutajaNimi} type="text"></input> <br />
        <label>Parool:</label> <br />
        <input ref={paroolRef} type="password"></input> <br />
      </div>
      }

      {sisselogitud === "ei" && <button className="nupp" onClick={logiSisse}>Logi sisse</button>} 
      {sisselogitud === "jah" && <button className="nupp" onClick={logiVälja}>Logi välja</button>} <br /> <br />
      
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/meist">
        <button>Meist</button>
      </Link>
      <Link to="/kontakt">
        <button>Kontakt</button>
      </Link>
      <Routes>
        <Route path="" element={<Avaleht />}/>
        <Route path="/meist" element={<Meist />}/>
        <Route path="/kontakt" element={<Kontakt />}/>
      </Routes>
    </div>
  );
}

export default App;
