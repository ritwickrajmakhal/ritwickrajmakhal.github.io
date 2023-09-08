import PropTypes from "prop-types";

export default function Navbar(props) {
  const links = props.nav.links.map((link, index) => (
    <li key={index} className="nav-item">
      <a className="nav-link active" aria-current="page" href={link["url"]}>
        {link["name"]}
      </a>
    </li>
  ));

  return (
    <div>
      <nav
        ref={props.elementRef}
        className={
          props.darkMode
            ? "navbar sticky-top navbar-expand-lg dark"
            : "navbar sticky-top navbar-expand-lg light"
        }
        data-bs-theme={props.darkMode ? "dark" : ""}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <i
              className={
                props.darkMode
                  ? `border border-white rounded p-3 fa-solid fa-${props.nav.logo}`
                  : `border border-black rounded p-3 fa-solid fa-${props.nav.logo}`
              }
            ></i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">{links}</ul>
            <div className="d-flex p-2">
              {props.darkMode ? (
                <i
                  role="button"
                  onClick={() => {
                    props.setDarkMode(false);
                    localStorage["darkMode"] = false;
                  }}
                  className="fa-solid fa-sun fa-lg"
                  style={{ color: "#fff" }}
                ></i>
              ) : (
                <i
                  role="button"
                  onClick={() => {
                    props.setDarkMode(true);
                    localStorage["darkMode"] = true;
                  }}
                  className="fa-solid fa-moon fa-lg"
                ></i>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
