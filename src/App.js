import './App.css';
import { useState } from 'react';
import data from './config.json'
import Navbar from './components/Navbar';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="App">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} nav={data.nav} />
    </div>
  );
}

export default App;
