import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Work from './pages/Work';
import Courses from './pages/Courses';
import Hobbies from './pages/Hobbies';

function App() {
  return (
    <div className='App'>
      <img className='main-picture' src='https://www.publicdomainpictures.net/pictures/60000/velka/woman-1378553595iK2.jpg' alt=''/>
      <p>Hello! My name is Regina Fox. This website is for showing my portfolio.</p>
      <div className="colorstripe"/>

      <div className='navigation-pictures'>
      <Link to='/work'>
        <img src='https://c2.staticflickr.com/4/3368/3183662462_7d1f50856d_b.jpg' alt=''/>
      </Link>
      <Link to='/courses'>
        <img src='https://d3v84qcuo1n8sg.cloudfront.net/images/media/images/wildlife/living-with-wildlife/red-fox-hero.jpg' alt=''/>
      </Link>
      <Link to='/hobbies'>
        <img src='https://i.pinimg.com/474x/76/28/35/762835e48cc6ba8e06cdb2382cc7641b.jpg' alt=''/>
      </Link>
      </div>
      <Routes>
        <Route path='/work' element={<Work/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/hobbies' element={<Hobbies/>}/>
      </Routes>
    </div>
  );
}

export default App;
