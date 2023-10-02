// import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Ostukorvi from './pages/Ostukorvi';
import LisaToode from './pages/LisaToode';

function App() {
  return (
    <div className="App">
      <Link to="/">
        <img className="pilt" alt="lille pilt" src="https://wallsdesk.com/wp-content/uploads/2016/09/Lotus-Flower-Computer-Wallpaper.jpg"/>
      </Link>

      <Link to="/ostukorv">
        <button className="nupp">Ostukorvi</button>
      </Link>

      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Routes>
        <Route path='' element={<Avaleht/>}/>
        <Route path='ostukorv' element={<Ostukorvi/>}/>
        <Route path='lisa-toode' element={<LisaToode/>}/>
      </Routes>
    </div>
  );
}

export default App;
