import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';
import YksikTagasisideAndja from './pages/YksikTagasisideAndja';
import Kasutajad from './pages/Kasutajad';

function App() {
  return (
    <div className="App">
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/tagasiside">
        <button>Tagasidede lehele</button>
      </Link>
      <Link to="/tagasiside-andjad">
        <button>Tagasiside andjad</button>
      </Link>
      <Link to="/kasutajad">
        <button>Kasutajad</button>
      </Link>
      <Routes>
        <Route path="/" element={ <div>Tere</div>}/>
        <Route path="/tagasiside" element={ <Tagasiside /> } />
        <Route path="/tagasiside-andjad" element={ <TagasisideAndjad />} />
        <Route path="/yksik-tagasiside-andja/:isik" element={ <YksikTagasisideAndja />} />
        <Route path="/kasutajad" element={ <Kasutajad />} />
      </Routes>
    </div>
  );
}

export default App;
