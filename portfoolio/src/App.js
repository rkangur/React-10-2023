import './App.css';
import { Route, Routes } from 'react-router-dom';
import Work from './pages/Work';
import Courses from './pages/Courses';
import Hobbies from './pages/Hobbies';
import Main from './pages/Main';

function App() {
  return (
    <div className='App'>
      <img className='main-picture' src='https://www.publicdomainpictures.net/pictures/60000/velka/woman-1378553595iK2.jpg' alt=''/>
      <p>Hello! My name is Regina Fox. This website is for showing my portfolio.</p>
      <div className="colorstripe"/>

      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/hobbies' element={<Hobbies/>}/>
      </Routes>
    </div>
  );
}

export default App;
