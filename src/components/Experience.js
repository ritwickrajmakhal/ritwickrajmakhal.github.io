import React from "react";
import Carousel from "./Carousel";

export default function Experience(props) {
  const carouselItems = props.experiences.map((experience, index) => (
    <div className={`carousel-item ${index === 0 && "active"}`} key={index}>
      <img
        src={experience.imageUrl}
        className="img-fluid mx-auto d-block w-75 rounded"
        alt={experience.title}
      />
      {/* <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div> */}
    </div>
  ));

  return (
    <div
      id="experience"
      className={props.darkMode ? "dark text-bg-dark" : "light text-bg-light"}
    >
      <div className="container py-3">
        <h1 className="text-center">Experience</h1>
        <Carousel carouselItems={carouselItems} />
      </div>
    </div>
  );
}
