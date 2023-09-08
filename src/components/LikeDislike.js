import React, { useState, useEffect } from "react";

export default function LikeDislike(props) {
  const localStorageLikeKey = `liked_${props.portfolio_id}`;
  const [liked, setLiked] = useState(() => {
    const storedValue = localStorage.getItem(localStorageLikeKey);
    return storedValue ? JSON.parse(storedValue) : false;
  });
  // Whenever the "liked" state changes, update the corresponding localStorage value
  useEffect(() => {
    localStorage.setItem(localStorageLikeKey, JSON.stringify(liked));
  }, [liked, localStorageLikeKey]);

  const [likes, setLikes] = useState();

  useEffect(() => {
    // Fetch likes data from the API when the component mounts or when props change
    fetch(`${props.api}/likes/${props.portfolio_id}`)
      .then((res) => res.json())
      .then((data) => {
        setLikes(data); // Update the likes state with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching likes:", error);
      });
  }, [props.api, props.portfolio_id]); // This will re-run the effect when api or portfolio_id props change

  const handleLike = () => {
    // Update the local state
    setLiked(true);
    if (!liked) {
      // Send a POST request to the API to record the like
      fetch(`${props.api}/likes/${props.portfolio_id}`, {
        method: "POST",
        // You can add headers and a request body if needed
      })
        .then((res) => {
          if (res.ok) {
            // Handle success if needed
          } else {
            // Handle errors if needed
            console.error("Error sending like request:", res.statusText);
          }
        })
        .catch((error) => {
          console.error("Error sending like request:", error);
        });
      setLikes(likes + 1);
    }
  };

  return (
    <div
      className="btn-group-horizontal"
      role="group"
      aria-label="Vertical radio toggle button group"
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
      <label className={`btn btn-outline-${props.darkMode ? "light" : "primary"}`} htmlFor="vbtn-radio2">
        <i className={`fa-${liked ? "solid" : "regular"} fa-thumbs-up`}></i>
        <span> {likes}</span>
      </label>
    </div>
  );
}
