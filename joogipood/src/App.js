import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Halda from './pages/Halda';
import Lisa from './pages/Lisa';
import Sisse from './pages/Sisse';
import Jook from './pages/Jook';
import Avaleht from './pages/Avaleht';


function App() {


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

      <Link to="/jook">
        <button>Jook</button>
      </Link>

      <Link to="">
        <button>Avaleht</button>
      </Link>
      
      <Routes>
        <Route path="/lisa" element={ <Lisa /> } />
        <Route path="/halda" element={ <Halda /> } />
        <Route path="/sisse" element={ <Sisse /> } />
        <Route path="/jook/:number" element={ <Jook /> } />
        <Route path="/" element={ <Avaleht />} />
      </Routes>
    </div>
  );
}

export default App;
