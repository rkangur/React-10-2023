import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import ValitudTegelased from './pages/ValitudTegelased';
import LisaTegelane from './pages/LisaTegelane';
import Tegevused from './pages/Tegevused';

function App() {
  return (
    <div className="App">
      <div>
      <Link to="/">
        <button className="nupp">Tegelased</button>
      </Link>
      <Link to="/vali-tegelane">
        <button className="nupp">Valitud tegelased</button>
      </Link>
      <Link to="/lisa-tegelane">
        <button className="nupp">Lisa tegelane</button>
      </Link>
      <Link to="/tegevused">
        <button className="nupp">Vaata tegevusi</button>
      </Link>

      <Routes>
        <Route path='' element={<Avaleht/>}/>
        <Route path='/vali-tegelane' element={<ValitudTegelased/>}/>
        <Route path='/lisa-tegelane' element={<LisaTegelane/>}/>
        <Route path='/tegevused' element={<Tegevused/>}/>
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
