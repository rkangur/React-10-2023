import {Link, Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import Kujundus from './pages/Kujundus';
import Muutmine from './pages/Muutmine';
import Ilmumine from './pages/Ilmumine';

function App() {
  return (
    <div className="App">
      
      <Link to="/ilmumine"><button>Ilmumine</button></Link>
      <Link to="/kujundus"><button>Kujundus</button></Link>
      <Link to="/muutmine"><button>Muutmine</button></Link>

      <Routes>
        <Route path="/" element={ <Navigate to="/ilmumine" /> } />
        <Route path="/ilmumine" element={ <Ilmumine /> } />
        <Route path="/kujundus" element={ <Kujundus /> } />
        <Route path="/muutmine" element={ <Muutmine /> } />
      </Routes>
    </div>
  );
}

export default App;
