import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS file for AOS styles

export default function Card(props) {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <div
      data-aos={props.animate ? "fade-up" : ""}
      data-aos-duration="1000"
      className={
        props.darkMode
          ? "card m-2 p-2 shadow-lg rounded-4 text-light cursor-pointer"
          : "card m-2 p-1 shadow-lg rounded-4 cursor-pointer"
      }
      style={{ width: "25rem", backgroundColor: "rgba(0,0,0,0.2)" }}
      data-bs-theme={props.darkMode ? "dark" : ""}
    >
      <img
        src={props.card.imgUrl}
        className={props.animate ? "card-img-top rounded-top-3 scale-on-hover img-fluid" : "card-img-top rounded-top-3 img-fluid"}
        alt={props.title}
      />
      <div className="card-body">
        <h2 className="card-title">{props.card.title}</h2>
        <p className="card-text fs-5">{props.card.desc}</p>
      </div>
      <div
        className={
          props.footer.length === 0 ? "card-footer d-none" : "card-footer"
        }
      >
        <div className="d-flex justify-content-around mb-3">{props.footer}</div>
        <p
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          role={"button"}
          onClick={() => props.setModalContent(props.modalContent)}
          className="card-text text-center text-bg-primary rounded-bottom-4"
        >
          <u>Find out more</u>
        </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
  }).isRequired,
  footer: PropTypes.arrayOf(PropTypes.element),
};
