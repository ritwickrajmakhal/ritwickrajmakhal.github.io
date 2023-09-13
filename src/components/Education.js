import React from "react";
import Card from "./Card";
import Carousel from "./Carousel";

export default function Education(props) {
  const instituteCards = props.education.map((institute, index) => {
    const carouselItems = institute.gallery.map((image, index) => (
      <div className={`carousel-item ${index === 0 && "active"}`} key={index}>
        <img
          onLoad={() => props.setIframeLoaded(true)}
          src={image.imageUrl}
          className="img-fluid mx-auto d-block w-75"
          alt={`${index}`}
        />
      </div>
    ));
    return (
      <Card
        animate={false}
        darkMode={props.darkMode}
        key={index}
        card={{
          title: institute.instituteName,
          imgUrl: institute.imageUrl,
          desc: institute.desc,
        }}
        footer={
          <p
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            role={"button"}
            className="card-text text-center text-bg-primary rounded-bottom-4"
            onClick={() => {
              props.setModal({ title: institute.instituteName });
              props.setModalBody(<Carousel carouselItems={carouselItems} />);
            }}
          >
            <u>Find out more</u>
          </p>
        }
      />
    );
  });
  return (
    <div
      id="education"
      className={props.darkMode ? "dark text-bg-dark" : "light text-bg-light"}
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
