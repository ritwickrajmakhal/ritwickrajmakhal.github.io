import React from "react";
import Card from "./Card";

export default function Education(props) {
  const instituteCards = props.education.map((institute, index) => (
    <Card
      animate={false}
      darkMode={props.darkMode}
      key={index}
      card={{
        title: institute.instituteName,
        imgUrl: institute.imageUrl,
        desc: institute.desc,
      }}
      footer={[]} // No footer
    />
  ));
  return (
    <div
      id="education"
      className={props.darkMode ? "dark text-bg-dark" : "light text-bg-light"}
    >
      <div className="container py-3">
        <h1 className="text-center">Education</h1>
        <div className="d-flex justify-content-evenly flex-wrap">{instituteCards}</div>
      </div>
    </div>
  );
}
