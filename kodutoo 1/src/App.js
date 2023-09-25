//import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <button className="nupp"> Nupuke </button>
      <div className="tekst">Tekstike</div>
      <div className="rohelineTekst">Roheline tekst</div>
      <img className="pilt" alt="Lilleke" src="https://wallsdesk.com/wp-content/uploads/2016/09/Lotus-Flower-Computer-Wallpaper.jpg"/>
      <table className="table">
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </table>
      <iframe title="video" width="420" height="315"
      src="https://www.youtube.com/embed/tgbNymZ7vqY">
      </iframe>
    </div>
  );
}

export default App;
