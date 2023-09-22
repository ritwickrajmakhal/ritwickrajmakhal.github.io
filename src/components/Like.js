import React, { useState, useEffect } from "react";

export default function Like(props) {
  const localStorageKey = "portfolio_likes";

  // Initialize liked and likes state from local storage or with default values
  const [liked, setLiked] = useState(() => {
    const data = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    return data[props.id]?.like?.liked || false;
  });

  const [likes, setLikes] = useState(() => {
    const data = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    return data[props.id]?.like?.likes || 0;
  });

  // get data from server and update likes
  useEffect(() => { 
    fetch(`${props.api}/likes/${props.id}`)
      .then((res) => res.json())
      .then((data) => {
        setLikes(data);
      });
  }, [props.api, props.id]);

  // Update liked and likes data in local storage
  useEffect(() => {
    // Get data from local storage
    const storedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};

    // Update liked
    storedData[props.id] = storedData[props.id] || {};
    storedData[props.id].like = storedData[props.id].like || {};
    storedData[props.id].like.liked = liked;

    // Update likes
    storedData[props.id].like.likes = likes;

    // Save data to local storage
    localStorage.setItem(localStorageKey, JSON.stringify(storedData));
  }, [liked, likes, props.id]);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(!liked);
      fetch(`${props.api}/likes/${props.id}`, {
        method: "POST",
      });
    }
  };
  return (
    <div className="d-flex">
      <div
        className="btn-group-horizontal"
        role="group"
        aria-label="horizontal radio toggle button group"
      >
        <input
          onChange={() => handleLike()}
          type="radio"
          className="btn-check"
          name="vbtn-radio"
          id="vbtn-radio2"
          autoComplete="off"
          checked={liked}
        />
        <label
          className={`btn btn-outline-${props.darkMode ? "light" : "primary"}`}
          htmlFor="vbtn-radio2"
        >
          <i className={`fa-${liked ? "solid" : "regular"} fa-heart`}></i>
          <span> {likes}</span>
        </label>
      </div>
    </div>
  );
}
