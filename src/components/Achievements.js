import React from "react";
import Carousel from "./Carousel";

export default function Achievements(props) {
  const carouselItems = props.achievements.map((achievement, index) => (
    <div className={`carousel-item ${index === 0 && "active"}`} key={index}>
      <img
        src={achievement.imageUrl}
        className="img-fluid mx-auto d-block w-75 rounded"
        alt={achievement.title}
      />
    </div>
  ));

  return (
    <div
      id="achievements"
      className={props.darkMode ? "dark text-bg-dark" : "light text-bg-light"}
    >
      <div className="container py-3">
        <h1 className="text-center">Achievements</h1>
        <Carousel carouselItems={carouselItems} />
      </div>
    </div>
  );
}
