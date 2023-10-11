import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import ValitudTegelased from './pages/ValitudTegelased';
import LisaTegelane from './pages/LisaTegelane';

function App() {
  return (
    <div className="App">
      <div>
      <Link to="/">
        <button className="nupp">Avaleht</button>
      </Link>
      <Link to="/vali-tegelane">
        <button className="nupp">Vali tegelane</button>
      </Link>
      <Link to="/lisa-tegelane">
        <button className="nupp">Lisa tegelane</button>
      </Link>

      <Routes>
        <Route path='' element={<Avaleht/>}/>
        <Route path='/valitudtegelased' element={<ValitudTegelased/>}/>
        <Route path='/lisa-tegelane' element={<LisaTegelane/>}/>
      </Routes>
      </div>
      
    </div>
  );
}

export default App;