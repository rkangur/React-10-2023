import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import LisaUudis from './pages/LisaUudis';
import { useTranslation } from 'react-i18next';
import HaldaUudiseid from './pages/HaldaUudiseid';
import YksUudis from './pages/YksUudis';
import MuudaUudis from './pages/MuudaUudis';
import KasutajaPostitus from './pages/KasutajaPostitus';
import YksPostitus from './pages/YksPostitus';

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
      <Link to='/lisa-uudis'>
        <button as={Link} to="/lisa-uudis">{t("lisa-uudis")}</button>
      </Link>
      <Link to='/halda-uudiseid'>
        <button as={Link} to="/halda-uudiseid">{t("halda-uudiseid")}</button>
      </Link>

      <img className='lang' src="/united-kingdom.png" onClick={changeLangEn} alt="" />
      <img className='lang' src="/estonia.png" onClick={changeLangEe} alt="" />

      <Routes>
        <Route path='/' element={<Avaleht/>}/>
        <Route path='/uudised' element={<Uudised/>}/>
        <Route path='/kontakt' element={<Kontakt/>}/>
        <Route path='/meist' element={<Meist/>}/>
        <Route path='/lisa-uudis' element={<LisaUudis/>}/>
        <Route path='/halda-uudiseid' element={<HaldaUudiseid/>}/>
        <Route path='/uudis/:index' element={<YksUudis/>}/>
        <Route path='/muuda/:index' element={<MuudaUudis/>}/>
        <Route path='/kasutaja-postitus/:kasutajaId' element={<KasutajaPostitus/>}/>
        <Route path='/ykspostitus/:postituseId' element={<YksPostitus/>}/>
      </Routes>
    </div>
  );
}

export default App;
