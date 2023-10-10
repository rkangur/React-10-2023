import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';


function App() {
  return (
    <div className="App">
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
