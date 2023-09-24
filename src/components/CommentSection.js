import React, { useEffect, useState } from "react";


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
  const dp = (username) => {
    return (
      <div className={`rounded-circle border border-${props.darkMode ? "light" : "dark"} shadow-1-strong me-3`}>
        <i className={`fa-solid fa-${username.charAt(0).toLowerCase()} p-3`}></i>
      </div>
    );
  };
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
        setComments(data);
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
      <div className="mb-3" key={index}>
        <div className="d-flex flex-start align-items-center">
          {dp(comment.username)}
          <div>
            <h6 className="fw-bold text-primary mb-1">{comment.username}</h6>
            <p className="text-muted small mb-0">
              {formatDate(comment.date_time.split(" ")[0])}
            </p>
          </div>
        </div>
        <p className="mt-3 mb-1">{comment.comment}</p>
        <hr />
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
      const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
      const day = String(currentDate.getDate()).padStart(2, "0");
      const hours = String(currentDate.getHours()).padStart(2, "0");
      const minutes = String(currentDate.getMinutes()).padStart(2, "0");
      const seconds = String(currentDate.getSeconds()).padStart(2, "0");

      // Create the formatted date string
      const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

      setComments(
        comments.concat(
        [
          {
            id: null,
            portfolioid: props.id,
            comment: comment,
            date_time: formattedDate,
            username: username ? username : "Anonymous",
          },
        ])
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
      <section>
        <div
          className="container py-3 overflow-y-auto"
          style={{ maxHeight: "700px" }}
        >
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              <div className="card">
                <div className="card-body">
                  <CommentBoxes />
                </div>
                <div
                  className="card-footer border-0"
                >
                  <form onSubmit={postComment}>
                    <div className="d-flex flex-start w-100">
                      <div>{dp(username ? username : "A")}</div>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          value={username}
                          onChange={(event) => setUsername(event.target.value)}
                          className="form-control"
                          id="floatingInput"
                          placeholder="Your name (Optional)"
                        />
                        <label htmlFor="floatingInput">Your name (Optional)</label>
                      </div>
                    </div>
                    <div>
                      <div className="form-floating">
                        <textarea
                          value={comment}
                          onChange={(event) => setComment(event.target.value)}
                          className="form-control"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          style={{ height: "100px" }}
                          required
                        ></textarea>
                        <label htmlFor="floatingTextarea2">What's your view?</label>
                      </div>
                    </div>
                    <div className="float-end mt-2 pt-1">
                      <button type="submit" className="btn btn-primary btn-sm">
                        Post comment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
