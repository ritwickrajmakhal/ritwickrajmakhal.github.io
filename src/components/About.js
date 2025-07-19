import PropTypes from "prop-types";
import Progress from "./Progress";

export default function About({ darkMode, about }) {
  const progresses = about.skills.map((skill, index) => (
    <Progress
      key={index}
      progress={{ label: skill.name, value: skill.value }}
    />
  ));
  return (
    <section
      id="about"
      className={darkMode ? "dark text-bg-dark" : "light text-bg-light"}
      aria-labelledby="about-heading"
    >
      <header className="text-center mb-5">
        <h1 className={`display-5 fw-bold ${darkMode ? 'text-light' : 'text-dark'}`}>
          About Me
        </h1>
      </header>
      <article
        className={
          darkMode
            ? "card rounded-3 shadow m-auto p-3 dark text-bg-dark"
            : "card rounded-3 shadow m-auto p-3 light text-bg-light"
        }
        style={{ maxWidth: "740px" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={about.imgUrl}
              className="img-fluid img-thumbnail"
              alt={`${about.name}, Full Stack Web and Android Developer`}
              loading="lazy"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title fw-bold h5">{about.shortDesc}</h2>
              <p className="card-text fs-5">{about.desc}</p>
            </div>
          </div>
        </div>
        <section aria-labelledby="skills-heading">
          <h3 id="skills-heading" className="text-center h4">Major Skills</h3>
          <div className="row" role="list">{progresses}</div>
        </section>
      </article>
    </section>
  );
}

About.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
