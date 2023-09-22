import React, { useEffect, useState } from "react";

const dp = (username = "A") => {
  return (
    <div className="mx-1 px-2 border border-light rounded-circle">
      <h4 className="mb-0">{username.charAt(0).toUpperCase()}</h4>
    </div>
  );
};
function formatDate(dateString) {
  const currentDate = new Date();
  const inputDate = new Date(dateString);

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate - inputDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference === 0) {
    return `Today`;
  } else if (daysDifference === 1) {
    return "1 day ago";
  } else {
    return `${daysDifference} days ago`;
  }
}
export default function CommentSection(props) {
  const localStorageKey = "portfolio_comments";
  const [comments, setComments] = useState(() => {
    const data = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    return data[props.id]?.comments || [];
  });

  // get data from server and update comments
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${props.api}/comments?portfolioid=${props.id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setComments(data.reverse());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [props.api, props.id]);

  // Update comment data in local storage
  useEffect(() => {
    // Get data from local storage
    const storedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};

    // Update comment
    storedData[props.id] = storedData[props.id] || {};
    storedData[props.id].comments = storedData[props.id].comments || [];
    storedData[props.id].comments = comments;

    // Save data to local storage
    localStorage.setItem(localStorageKey, JSON.stringify(storedData));
  }, [comments, props.id]);
  const CommentBoxes = () => {
    return comments.map((comment, index) => (
      <div className="col" key={index}>
        <div className="card">
          <div className="card-header d-flex align-items-center">
            {dp(comment.username)}
            <h5 className="mb-0">{comment.username}</h5>
          </div>
          <div className="card-body">
            <p className="card-text">{comment.comment}</p>
          </div>
          <div className="card-footer">
            <p className="card-text">
              {formatDate(comment.date_time.split(" ")[0])}
            </p>
          </div>
        </div>
      </div>
    ));
  };

  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const postComment = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      await fetch(
        `${props.api}/comments?portfolioid=${props.id}&comment=${comment}&username=${username}`,
        {
          method: "POST",
        }
      );
      // Get the current date and time
      const currentDate = new Date();

      // Extract the year, month, day, hours, minutes, and seconds
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const day = String(currentDate.getDate()).padStart(2, '0');
      const hours = String(currentDate.getHours()).padStart(2, '0');
      const minutes = String(currentDate.getMinutes()).padStart(2, '0');
      const seconds = String(currentDate.getSeconds()).padStart(2, '0');

      // Create the formatted date string
      const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

      setComments(
        [
          {
            id: null,
            portfolioid: props.id,
            comment: comment,
            date_time: formattedDate,
            username: username ? username : "Anonymous",
          },
        ].concat(comments)
      );
      // Reset the input fields after a successful POST request
      setComment("");
      setUsername("");
    } catch (error) {
      // Handle any errors that occurred during the fetch request
      console.error("Error:", error);
    }
  };
  return (
    <div
      className={props.darkMode ? "dark text-bg-dark" : "light text-bg-light"}
      data-bs-theme={props.darkMode ? "dark" : "light"}
    >
      <h3 className="text-center">Comments</h3>
      <div className="row">
        <div className="col-sm-6 mx-auto">
          <form onSubmit={postComment}>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                {username ? dp(username) : dp()}
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Your name (optional)"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <textarea
                type="text"
                className="form-control"
                placeholder="What's your view?"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                required
                value={comment}
                onChange={(event) => setComment(event.target.value)}
              ></textarea>
              <button
                className={`btn btn-outline-${
                  props.darkMode ? "light" : "dark"
                }`}
                type="submit"
                id="button-addon2"
              >
                Comment
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="row row-cols-1 row-cols-md-3 g-2 overflow-y-auto"
        style={{ maxHeight: "500px" }}
      >
        <CommentBoxes />
      </div>
    </div>
  );
}
