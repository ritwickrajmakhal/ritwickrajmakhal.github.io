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
                footer={
                  <div className="card-footer">
                    <div className="d-flex justify-content-around mb-3">
                      {portfolio.techs.map((tech, index) => (
                        <span
                          key={index}
                          className="badge rounded-pill text-bg-primary"
                          style={{ letterSpacing: "0.2rem" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      role={"button"}
                      onClick={() => {
                        props.setModal({
                          title: portfolio.title,
                          tab: (
                            <Tab
                              handleTabClick={(tab) =>
                                props.setModalBody(tab.modalBody)
                              }
                              activeTab={{
                                name: (
                                  <>
                                    Demo <i className="fa-brands fa-youtube"></i>
                                  </>
                                ),
                                modalBody: portfolio.demoUrl ? (
                                  <iframe
                                    onLoad={() => props.setIframeLoaded(true)}
                                    style={{ height: "94%", width: "100%" }}
                                    src={portfolio.demoUrl}
                                    title={portfolio.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                  ></iframe>
                                ) : (
                                  <div
                                    onLoad={props.setIframeLoaded(true)}
                                    className="d-flex align-items-center justify-content-center"
                                    style={{ height: "100%", width: "100%" }}
                                  >
                                    <button className="btn btn-primary">
                                      Demonstration Unavailable
                                    </button>
                                  </div>
                                ),
                              }}
                              tabs={[
                                {
                                  name: (
                                    <>
                                      Demo <i className="fa-brands fa-youtube"></i>
                                    </>
                                  ),
                                  modalBody: portfolio.demoUrl ? (
                                    <iframe
                                      onLoad={() => props.setIframeLoaded(true)}
                                      style={{ height: "94%", width: "100%" }}
                                      src={portfolio.demoUrl}
                                      title={portfolio.title}
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowFullScreen
                                    ></iframe>
                                  ) : (
                                    <div
                                      onLoad={props.setIframeLoaded(true)}
                                      className="d-flex align-items-center justify-content-center"
                                      style={{
                                        height: "100%",
                                        width: "100%",
                                      }}
                                    >
                                      <button className="btn btn-primary">
                                        Demonstration Unavailable
                                      </button>
                                    </div>
                                  ),
                                },
                                {
                                  name: (
                                    <>
                                      Download{" "}
                                      <i className="fa-solid fa-cloud-arrow-down"></i>
                                    </>
                                  ),
                                  modalBody: (
                                    <div
                                      className="d-flex align-items-center justify-content-center"
                                      style={{ height: "100%", width: "100%" }}
                                    >
                                      <a
                                        href={portfolio.downloadUrl}
                                        target="_blank"
                                        rel="noreferrer"
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
                        });
                        props.setModalBody(
                          portfolio.demoUrl ? (
                            <iframe
                              onLoad={() => props.setIframeLoaded(true)}
                              style={{ height: "94%", width: "100%" }}
                              src={portfolio.demoUrl}
                              title={portfolio.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                          ) : (
                            <div
                              onLoad={props.setIframeLoaded(true)}
                              className="d-flex align-items-center justify-content-center"
                              style={{ height: "100%", width: "100%" }}
                            >
                              <button className="btn btn-primary">
                                Demonstration Unavailable
                              </button>
                            </div>
                          )
                        );
                      }}
                      className="card-text text-center text-bg-primary rounded-bottom-4"
                    >
                      <u>Find out more</u>
                    </p>
                  </div>
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
            disabled={pageNo === 0}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button
            onClick={() =>
              pageNo >= portfolios.length - 3
                ? setPageNo(pageNo)
                : setPageNo(pageNo + 3)
            }
            className={
              props.darkMode ? "btn btn-outline-light" : "btn btn-outline-dark"
            }
            disabled={pageNo >= portfolios.length - 3}
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
