import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import LisaArvuti from './pages/LisaArvuti';
import VaataArvuteid from './pages/VaataArvuteid';
import Ostukorvi from './pages/Ostukorv';

function App() {
  return (
    <div className="App">
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/all">
        <button>Vaata sülearvuteid</button>
      </Link>
      <Link to="/add">
        <button>Lisa sülearvuti</button>
      </Link>
      <Link to="/cart">
        <button>Ostukorvi</button>
      </Link>
      <Routes>
        <Route path='' exact element={<Avaleht/>}/>
        <Route path='/all' exact element={<VaataArvuteid/>}/>
        <Route path='/add' exact element={<LisaArvuti/>}/>
        <Route path='/cart' exact element={<Ostukorvi/>}/>
      </Routes>
    </div>
  );
}

export default App;
