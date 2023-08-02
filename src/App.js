import './App.css';
import { useState } from 'react';
import data from './config.json'
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="App">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} nav={data.website.nav} />
      <Home darkMode={darkMode} home={{name : data.website.user.name, imgUrl : data.website.home.imgUrl}}/>
    </div>
  );
}

export default App;
