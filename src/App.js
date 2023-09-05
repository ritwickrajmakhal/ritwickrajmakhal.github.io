import "./App.css";
import { useState } from "react";
import data from "./config.json";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage["darkMode"]
      ? JSON.parse(localStorage.getItem("darkMode"))
      : false
  );
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [modal, setModal] = useState({ title: null, tab: null });
  const [modalBody, setModalBody] = useState(null);
  return (
    <div className="App">
      {/* The Modal component is rendered here */}
      <Modal
        darkMode={darkMode}
        iframeLoaded={iframeLoaded}
        setIframeLoaded={setIframeLoaded}
        modal={modal}
        setModal={setModal}
        modalBody={modalBody}
        setModalBody={setModalBody}
      />
              <a
          href="#home"
          className="px-2 py-1 text-light m-3 rounded-circle border"
          style={{
            position: "fixed",
            bottom: "0px",
            right: "0px",
            zIndex: 9900,
          }}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </a>
            {/* The Navbar component is rendered here */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        nav={data.website.nav}
      />
      {/* The Home component is rendered here */}
      <Home
        darkMode={darkMode}
        home={{
          name: data.website.user.name,
          socialHandles: data.website.user.socialHandles,
          resume: data.website.user.resume,
        }}
        setModal={setModal}
        setModalBody={setModalBody}
        setIframeLoaded={setIframeLoaded}
      />
      {/* The Portfolio component is rendered here */}
      <Portfolio
        darkMode={darkMode}
        portfolios={data.website.portfolios}
        setModal={setModal}
        setModalBody={setModalBody}
        setIframeLoaded={setIframeLoaded}
      />
      {/* The About component is rendered here */}
      <About darkMode={darkMode} about={data.website.user} />
      {/* The Education component is rendered here */}
      <Education darkMode={darkMode} education={data.website.user.education} />
      {/* The Contact component is rendered here */}
      <Contact darkMode={darkMode} apiKey={data.website.apis.formspree} />
      {/* The Footer component is rendered here */}
      <Footer darkMode={darkMode} footer={data.website.user} />
    </div>
  );
}

export default App;
