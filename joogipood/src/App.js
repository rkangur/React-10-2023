import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Halda from './pages/Halda';
import Lisa from './pages/Lisa';
import Sisse from './pages/Sisse';


function App() {

  //const joogid = joogid.json;

  return (
    <div className="App">

      <Link to="/halda">
        <button>Halda</button>
      </Link>

      <Link to="/lisa">
        <button>Lisa</button>
      </Link>

      <Link to="/sisse">
        <button>Sisse</button>
      </Link>
      
      <Routes>
        <Route path="/lisa" element={ <Lisa /> } />
        <Route path="/halda" element={ <Halda /> } />
        <Route path="/sisse" element={ <Sisse /> } />
      </Routes>
    </div>
  );
}

export default App;
