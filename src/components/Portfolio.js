import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

export default function Portfolio(props) {
  // Get all the categories from the portfolios
  const categories = new Set();
  props.portfolios.forEach((portfolio) =>
    portfolio.categories.forEach((category) => categories.add(category))
  );
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const portfolios = props.portfolios.map((portfolio, index) => {
    // If the portfolio has the selected category or the selected category is "ALL"
    if (
      portfolio.categories.includes(selectedCategory) ||
      selectedCategory === "ALL"
    ) {
      return (
        // Pass the portfolio object as the card prop
        <Card
          animate={true}
          darkMode={props.darkMode}
          key={index}
          card={portfolio}
          footer={portfolio.techs.map((tech, index) => (
            // Map through the techs array and return a badge for each tech
            <span
              key={index}
              className="badge rounded-pill text-bg-primary"
              style={{ letterSpacing: "0.2rem" }}
            >
              {tech}
            </span>
          ))}
          setModalContent={props.setModalContent}
          // Pass the portfolio object as the modalContent prop
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
          {/* Create a badge for the selected category */}
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
          {/* Loop through the categories and create a badge for each category */}
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
          {/* Render the portfolios */}
          {portfolios}
        </div>
      </div>
    </div>
  );
}
// Define the prop types
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
