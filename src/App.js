import './App.css';
import { useState } from 'react';
import data from './config.json'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Modal from './components/Modal';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  return (
    <div className="App">
      <Modal
        darkMode={darkMode}
        iframeLoaded={iframeLoaded}
        setIframeLoaded={setIframeLoaded}
        modalContent={modalContent}
        setModalContent={setModalContent}
      />
      <a href='#home' className='px-2 py-1 text-light m-3 rounded-circle border' style={{ position: 'fixed', bottom: '0px', right: '0px', zIndex: 9900 }}>
        <i className="fa-solid fa-arrow-up"></i>
      </a>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        nav={data.website.nav} />
      <Home
        darkMode={darkMode}
        home={{
          name: data.website.user.name,
          socialHandles: data.website.user.socialHandles
        }} />
      <Portfolio
        darkMode={darkMode}
        setModalContent={setModalContent}
        setIframeLoaded={setIframeLoaded}
        portfolios={data.website.portfolios}
      />
      <About
        darkMode={darkMode}
        about={data.website.user} />
      <Contact
        darkMode={darkMode} />
      <Footer
        darkMode={darkMode}
        footer={data.website.user} />
    </div>
  );
}

export default App;
