import Card from "./Card";

export default function Education({ darkMode, education }) {
  const instituteCards = education.map((institute, index) => {
    return (
      <Card
        animate={false}
        darkMode={darkMode}
        key={index}
        card={{
          title: institute.instituteName,
          imgUrl: institute.imageUrl,
          desc: institute.desc,
        }}
      />
    );
  });
  return (
    <div
      id="education"
      className={darkMode ? "dark text-bg-dark" : "light text-bg-light"}
    >
      <div className="container py-3">
        <header className="text-center mb-5">
          <h1 className={`display-5 fw-bold ${darkMode ? 'text-light' : 'text-dark'}`}>
            Education
          </h1>
          <p className={`lead ${darkMode ? 'text-light' : 'text-muted'}`}>
            My academic journey and the institutions that shaped my knowledge
          </p>
        </header>
        <div className="d-flex justify-content-evenly flex-wrap">
          {instituteCards}
        </div>
      </div>
    </div>
  );
}
