import React from "react";
import Card from "./Card";
import Carousel from "./Carousel";

export default function Education({
  setModal,
  setIframeLoaded,
  setModalBody,
  setModalFooter,
  darkMode,
  education,
}) {
  const instituteCards = education.map((institute, index) => {
    const carouselItems = institute.gallery?.map((image, index) => (
      <div className={`carousel-item ${index === 0 && "active"}`} key={index}>
        <img
          onLoad={() => setIframeLoaded(true)}
          src={image.imageUrl}
          className="img-fluid mx-auto d-block"
          style={{ maxHeight: "75vh" }}
          alt={`${index}`}
        />
      </div>
    ));
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
        footer={
          institute.gallery ? (
            <div className="card-footer">
              <p
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                role={"button"}
                className="card-text text-center text-bg-primary rounded-bottom-4"
                onClick={() => {
                  setModal({ title: institute.instituteName });
                  setModalBody(<Carousel carouselItems={carouselItems} />);
                  setModalFooter(null);
                }}
              >
                <u>Find out more</u>
              </p>
            </div>
          ) : null
        }
      />
    );
  });
  return (
    <div
      id="education"
      className={darkMode ? "dark text-bg-dark" : "light text-bg-light"}
    >
      <div className="container py-3">
        <h1 className="text-center">Education</h1>
        <div className="d-flex justify-content-evenly flex-wrap">
          {instituteCards}
        </div>
      </div>
    </div>
  );
}
