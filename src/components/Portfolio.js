import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

export default function Portfolio(props) {
  const categories = new Set();
  props.portfolios.forEach((portfolio) =>
    portfolio.techs.forEach((tech) => categories.add(tech))
  );
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const portfolios = props.portfolios.map((portfolio, index) => {
    if (
      portfolio.techs.includes(selectedCategory) ||
      selectedCategory === "ALL"
    ) {
      return (
        <Card
          darkMode={props.darkMode}
          key={index}
          card={portfolio}
          footer={portfolio.techs.map((tech, index) => (
            <span
              key={index}
              className="badge rounded-pill text-bg-primary"
              style={{ letterSpacing: "0.2rem" }}
            >
              {tech}
            </span>
          ))}
          setModalContent={props.setModalContent}
          modalContent={{
            title: portfolio.title,
            content: (
              <iframe
                onLoad={() => props.setIframeLoaded(true)}
                style={{ height: "100%", width: "100%" }}
                src={portfolio.iframeUrl}
                title={portfolio.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ),
          }}
        />
      );
    } else {
      return null;
    }
  });

  return (
    <div
      id="portfolio"
      className={props.darkMode ? "dark text-bg-dark" : "light text-bg-light"}
    >
      <div className="container">
        <h1 className="text-center">Portfolio</h1>
        <div className="d-flex justify-content-sm-evenly py-2 overflow-auto">
          <span
            role="button"
            onClick={() => setSelectedCategory("ALL")}
            className={
              selectedCategory === "ALL"
                ? "badge rounded-pill text-bg-primary mx-2"
                : "badge rounded-pill text-bg-secondary mx-2"
            }
            style={{ letterSpacing: "0.2rem" }}
          >
            ALL
          </span>
          {Array.from(categories).map((category, index) => (
            <span
              role="button"
              onClick={() => setSelectedCategory(category)}
              key={index}
              className={
                selectedCategory === category
                  ? "badge rounded-pill text-bg-primary mx-2"
                  : "badge rounded-pill text-bg-secondary mx-2"
              }
              style={{ letterSpacing: "0.2rem" }}
            >
              {category}
            </span>
          ))}
        </div>
        <div className="d-flex flex-wrap justify-content-center pb-3">
          {portfolios}
        </div>
      </div>
    </div>
  );
}
Portfolio.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  portfolios: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
