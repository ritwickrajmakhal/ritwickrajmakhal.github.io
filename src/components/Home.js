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
          alt=""
        />
      </a>
    ));
  return (
    <div
      id="home"
      className={darkMode ? "dark text-bg-dark" : "light text-bg-light"}
    >
      <div className="container">
        <div
          className="row py-5 fw-semibold"
          style={{ fontSize: "2.3rem", letterSpacing: "0.2rem" }}
        >
          <div className="col-auto">Hi! I'm</div>
          <div className="col-auto">{home.name}</div>
        </div>
        <div className="row justify-content-end">
          <div className="col-sm-5">
            <div
              className="rotate-clockwise border mx-auto rounded-circle"
              style={{ width: "12.13rem" }}
            >
              {socialHandles}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className={
                darkMode
                  ? "btn btn-medium border my-5 dark text-bg-dark"
                  : "btn btn-medium border-black my-5 light text-bg-light"
              }
              onClick={() => {
                setModal({ title: "Resume", tab: null });
                setModalBody(
                  <iframe
                    onLoad={() => setIframeLoaded(true)}
                    style={{ height: "100%", width: "100%" }}
                    src={home.resume}
                    title={"Resume"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                );
              }}
            >
              View Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}