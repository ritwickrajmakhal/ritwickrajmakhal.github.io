import "./App.css";
import { useState } from "react";
import { HelmetProvider } from 'react-helmet-async';
import data from "./config.json";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import SEOHead from "./components/SEOHead";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage["darkMode"]
      ? JSON.parse(localStorage.getItem("darkMode"))
      : false
  );
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [modal, setModal] = useState({ title: null, tab: null });
  const [modalBody, setModalBody] = useState(null);
  const [modalFooter, setModalFooter] = useState(null);

  return (
    <HelmetProvider>
      <div className="App">
        {/* SEO Head component */}
        <SEOHead />

        {/* The Modal component is rendered here */}
        <Modal
          darkMode={darkMode}
          iframeLoaded={iframeLoaded}
          setIframeLoaded={setIframeLoaded}
          modal={modal}
          setModal={setModal}
          modalBody={modalBody}
          modalFooter={modalFooter}
          setModalFooter={setModalFooter}
          setModalBody={setModalBody}
        />
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
        {data.website.portfolios && (
          <Portfolio
            darkMode={darkMode}
            portfolios={data.website.portfolios}
            setModal={setModal}
            setModalBody={setModalBody}
            setIframeLoaded={setIframeLoaded}
            setModalFooter={setModalFooter}
            backendUrl={data.website.backendUrl}
          />
        )}
        {/* The About component is rendered here */}
        {data.website.user && (
          <About darkMode={darkMode} about={data.website.user} />
        )}
        {/* The Experience component is rendered here */}
        {data.website.user.experience && (
          <Experience
            darkMode={darkMode}
            experience={data.website.user.experience}
          />
        )}
        {/* The Education component is rendered here */}
        {data.website.user.education && (
          <Education
            setModal={setModal}
            setIframeLoaded={setIframeLoaded}
            setModalBody={setModalBody}
            setModalFooter={setModalFooter}
            darkMode={darkMode}
            education={data.website.user.education}
          />
        )}
        {/* The gallery component is rendered here */}
        <Gallery darkMode={darkMode} gallery={data.website.gallery} />
        {/* The Contact component is rendered here */}
        <Contact darkMode={darkMode} />
        {/* The Footer component is rendered here */}
        <Footer darkMode={darkMode} footer={data.website.user} />
      </div>
    </HelmetProvider>
  );
}

export default App;
