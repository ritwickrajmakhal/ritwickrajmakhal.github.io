export default function Home({
  darkMode,
  home,
  setModal,
  setModalBody,
  setIframeLoaded,
}) {
  const socialHandles = home.socialHandles
    .slice(0, 4)
    .map((socialHandle, index) => (
      <a
        target={"_blank"}
        rel="noreferrer"
        key={index}
        href={
          socialHandle.profile.includes("@")
            ? "mailto:" + socialHandle.profile
            : socialHandle.profile
        }
      >
        <img
          className="img-fluid shadow rounded-circle border p-1 rotate-anticlockwise"
          style={{ width: "6rem", height: "6rem" }}
          src={socialHandle.logo}
          alt={`${socialHandle.platform || 'Social'} profile link for Ritwick Raj Makhal`}
          loading="lazy"
        />
      </a>
    ));
  return (
    <main
      id="home"
      className={darkMode ? "dark text-bg-dark" : "light text-bg-light"}
      role="main"
    >
      <div className="container">
        <header
          className="row py-5 fw-semibold"
          style={{ fontSize: "2.3rem", letterSpacing: "0.2rem" }}
        >
          <div className="col-auto">
            <h1 className="d-inline">Hi! I'm</h1>
          </div>
          <div className="col-auto">
            <h1 className="d-inline">{home.name}</h1>
          </div>
        </header>
        <section className="row justify-content-end" aria-label="Social Media Links">
          <div className="col-sm-5">
            <nav
              className="rotate-clockwise border mx-auto rounded-circle"
              style={{ width: "12.13rem" }}
              aria-label="Social media profiles"
            >
              {socialHandles}
            </nav>
          </div>
        </section>
        <section className="row">
          <div className="col">
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className={
                darkMode
                  ? "btn btn-medium border-light my-5 dark text-bg-dark"
                  : "btn btn-medium border-dark my-5 light text-bg-light"
              }
              aria-label="View Ritwick Raj Makhal's resume in a modal window"
              onClick={() => {
                setModal({ title: "Resume", tab: null });
                setModalBody(
                  <iframe
                    onLoad={() => setIframeLoaded(true)}
                    style={{ height: "100%", width: "100%" }}
                    src={home.resume}
                    title={"Resume of Ritwick Raj Makhal - Full Stack Developer"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                );
              }}
            >
              View Resume
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}