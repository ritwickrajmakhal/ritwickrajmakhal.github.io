import "./App.css";
import { useState, useRef, useEffect, useMemo } from "react";
import data from "./config.json";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

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
  const elementRef = useRef(null);
  const isInHomeComponent = useIsInViewport(elementRef);
  function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting)
        ),
      []
    );

    useEffect(() => {
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);

    return isIntersecting;
  }
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
        modalFooter={modalFooter}
        setModalFooter={setModalFooter}
        setModalBody={setModalBody}
      />
      <div className="m-3 position-fixed bottom-0 end-0 z-3">
        {data.website.apis.chatbot ? (
          <Chatbot
          isInHomeComponent={isInHomeComponent}
            darkMode={darkMode}
            image={data.website.user.imgUrl}
            name={data.website.user.name.split(" ")[0]}
            chatbotToken={data.website.apis.chatbot}
          />
        ) : (
          <a href="#home" className="p-2 text-light rounded-circle border">
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        )}
      </div>
      {/* The Navbar component is rendered here */}
      <Navbar
        elementRef={elementRef}
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
        setModalFooter={setModalFooter}
        LikeDislikeApi={data.website.apis.likeDislikeApi}
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
