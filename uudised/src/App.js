import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLangEn = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("language", "en");
  }

  const changeLangEe = () => {
    i18n.changeLanguage("ee");
    localStorage.setItem("language", "ee");
  }

  return (
    <div className="App">

      <Link to='/'>
        <button as={Link} to="/">{t("avaleht")}</button>
      </Link>
      <Link to='/uudised'>
        <button as={Link} to="/uudised">{t("uudised")}</button>
      </Link>
      <Link to='/kontakt'>
        <button as={Link} to="/kontakt">{t("kontakt")}</button>
      </Link>
      <Link to='/meist'>
        <button as={Link} to="/meist">{t("meist")}</button>
      </Link>

      <img className='lang' src="/united-kingdom.png" onClick={changeLangEn} alt="" />
      <img className='lang' src="/estonia.png" onClick={changeLangEe} alt="" />

      <Routes>
        <Route path='/' element={<Avaleht/>}/>
        <Route path='/uudised' element={<Uudised/>}/>
        <Route path='/kontakt' element={<Kontakt/>}/>
        <Route path='/meist' element={<Meist/>}/>
      </Routes>
    </div>
  );
}

export default App;
