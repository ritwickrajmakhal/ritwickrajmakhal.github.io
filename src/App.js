import './App.css';
import { useState } from 'react';
import data from './config.json'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="App">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} nav={data.website.nav} />
      <Home darkMode={darkMode} home={{ name: data.website.user.name, socialHandles: data.website.user.socialHandles}} />
      <Portfolio darkMode={darkMode} portfolios={data.website.portfolios} />
      <About darkMode={darkMode} about={data.website.user}/>
      <Footer darkMode={darkMode} footer={data.website.user}/>
    </div>
  );
}

export default App;
