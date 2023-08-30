import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import Tab from "./Tab";

export default function Portfolio(props) {
  // Get all the categories from the portfolios
  const [portfolios, setPortfolios] = useState(props.portfolios);

  const categories = new Set();
  props.portfolios.forEach((portfolio) =>
    portfolio.categories.forEach((category) => categories.add(category))
  );
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [pageNo, setPageNo] = useState(0);

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
            onClick={() => {
              setSelectedCategory("ALL");
              setPortfolios(props.portfolios);
              setPageNo(0);
            }}
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
              onClick={() => {
                setSelectedCategory(category);
                setPortfolios(
                  props.portfolios.filter((portfolio) =>
                    portfolio.categories.includes(category)
                  )
                );
                setPageNo(0);
              }}
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
        <div className="d-flex flex-wrap justify-content-center mb-3">
          {/* Render the portfolios */}
          {portfolios
            .map((portfolio, index) => (
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
                setModal={props.setModal}
                // Pass the portfolio object as the modalContent prop
                modal={{
                  title: portfolio.title,
                  tab: (
                    <Tab
                      handleTabClick={(tab) =>
                        props.setModalBody(tab.modalBody)
                      }
                      activeTab={{
                        name: "Demo",
                        modalBody: (
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
                      tabs={[
                        {
                          name: "Demo",
                          modalBody: (
                            <iframe
                              onLoad={() => props.setIframeLoaded(true)}
                              style={{ height: "100%", width: "100%" }}
                              src={portfolio.iframeUrl}
                              title={portfolio.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                          ),
                        },
                        {
                          name: "Download",
                          modalBody: (
                            <div
                              className="d-flex align-items-center justify-content-center"
                              style={{ height: "100%", width: "100%" }}
                            >
                              <a
                                href={portfolio.downloadUrl}
                                className="btn btn-primary"
                              >
                                {portfolio.downloadUrl
                                  ? "Click Here to Download"
                                  : "Project Download Unavailable"}
                              </a>
                            </div>
                          ),
                        },
                      ]}
                    />
                  ),
                }}
                setModalBody={props.setModalBody}
                modalBody={
                  <iframe
                    onLoad={() => props.setIframeLoaded(true)}
                    style={{ height: "100%", width: "100%" }}
                    src={portfolio.iframeUrl}
                    title={portfolio.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                }
              />
            ))
            .slice(pageNo, pageNo + 3)}
        </div>
        <div className="d-flex justify-content-between">
          <button
            onClick={() =>
              pageNo === 0 ? setPageNo(pageNo) : setPageNo(pageNo - 3)
            }
            className={
              props.darkMode ? "btn btn-outline-light" : "btn btn-outline-dark"
            }
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button
            onClick={() =>
              pageNo >= portfolios.length - 3 ? setPageNo(pageNo) : setPageNo(pageNo + 3)
            }
            className={
              props.darkMode ? "btn btn-outline-light" : "btn btn-outline-dark"
            }
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
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
