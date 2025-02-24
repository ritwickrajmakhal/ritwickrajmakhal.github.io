import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS file for AOS styles

export default function Card({ darkMode, card, animate, footer, title }) {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <div
      data-aos={animate ? "fade-up" : ""}
      data-aos-duration="1000"
      className={
        darkMode
          ? "card m-2 p-2 shadow-lg rounded-4 text-light"
          : "card m-2 p-1 shadow-lg rounded-4"
      }
      style={{ width: "25rem", backgroundColor: "rgba(0,0,0,0.2)" }}
      data-bs-theme={darkMode ? "dark" : ""}
    >
      <img
        src={card.imgUrl}
        className={
          animate
            ? "card-img-top rounded-top-3 scale-on-hover img-fluid"
            : "card-img-top rounded-top-3 img-fluid"
        }
        alt={title}
      />
      <div className="card-body">
        <h2 className="card-title">{card.title}</h2>
        <p className="card-text fs-5">{card.desc}</p>
      </div>
      {
        /* If the footer prop is not empty, render the footer */
        footer ? footer : null
      }
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
};
