import React from "react";
import PropTypes from "prop-types";
import Progress from "./Progress";

export default function About(props) {
  const progresses = props.about.skills.map((skill, index) => (
    <Progress
      key={index}
      progress={{ label: skill.name, value: skill.value }}
    />
  ));
  return (
    <div
      id="about"
      className={props.darkMode ? "dark text-bg-dark" : "light text-bg-light"}
    >
      <h1 className="text-center py-3">About Me</h1>
      <div
        className={
          props.darkMode
            ? "card rounded-3 shadow m-auto p-2 dark text-bg-dark"
            : "card rounded-3 shadow m-auto p-2 light text-bg-light"
        }
        style={{ maxWidth: "740px" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={props.about.imgUrl}
              className="img-fluid img-thumbnail"
              alt={props.about.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fw-bold">{props.about.shortDesc}</h5>
              <p className="card-text fs-5">{props.about.desc}</p>
            </div>
          </div>
        </div>
        <h4 className="text-center">Major Skills</h4>
        {progresses}
      </div>
    </div>
  );
}

About.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
