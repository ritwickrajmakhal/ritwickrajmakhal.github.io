export default function Navbar({ elementRef, darkMode, setDarkMode, nav }) {
  const links = nav.links.map((link, index) => (
    <li key={index} className="nav-item">
      <a className="nav-link active" aria-current="page" href={link["url"]}>
        {link["name"]}
      </a>
    </li>
  ));

  return (
    <div>
      <nav
        ref={elementRef}
        className={
          darkMode
            ? "navbar sticky-top navbar-expand-lg dark"
            : "navbar sticky-top navbar-expand-lg light"
        }
        data-bs-theme={darkMode ? "dark" : ""}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <i
              className={
                darkMode
                  ? `border border-white rounded p-3 fa-solid fa-${nav.logo}`
                  : `border border-black rounded p-3 fa-solid fa-${nav.logo}`
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
              {darkMode ? (
                <i
                  role="button"
                  onClick={() => {
                    setDarkMode(false);
                    localStorage["darkMode"] = false;
                  }}
                  className="fa-solid fa-sun fa-lg"
                  style={{ color: "#fff" }}
                ></i>
              ) : (
                <i
                  role="button"
                  onClick={() => {
                    setDarkMode(true);
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
