import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';
import { useRef, useState } from 'react';
import Leht from './pages/Leht';
import Loader from './pages/Loader';
import Seaded from './pages/Seaded';
import Books from './pages/Books';
import Numbrid from './pages/Numbrid';



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
       <Link to="/seaded">
        <button>Seadetesse</button>
      </Link> <br /> <br />

      <div>{sonum}</div>
      
      
      {sisselogitud === "ei" && <div>
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
      <Link to="/leht">
        <button>Lehele</button>
      </Link> <br />
      <Link to="/books">
        <button>Raamatud</button>
      </Link>
      <Link to="/numbrid">
        <button>Numbrid</button>
      </Link> <br />
      <Link to="/loader">Süda</Link>
      <Routes>
        <Route path="" element={<Avaleht />}/>
        <Route path="/meist" element={<Meist />}/>
        <Route path="/kontakt" element={<Kontakt />}/>
        <Route path="/leht" element={<Leht />}/>
        <Route path="/loader" element={<Loader />}/>
        <Route path="/seaded" element={<Seaded />}/>
        <Route path="/books" element={<Books />}/>
        <Route path="/numbrid" element={<Numbrid />}/>
      </Routes>
    </div>
  );
}

export default App;
