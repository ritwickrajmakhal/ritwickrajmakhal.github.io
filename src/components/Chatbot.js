import React, { useEffect, useState } from "react";
import { DirectLine } from "botframework-directlinejs";
import ReactWebChat from "botframework-webchat";

export default function Chatbot(props) {
  const [directLine, setDirectLine] = useState(null);
  const [chatbotVisible, setChatbotVisible] = useState(false);

  useEffect(() => {
    // Create the DirectLine instance and store it in the state
    const dl = new DirectLine({ token: props.chatbotToken });
    setDirectLine(dl);

    // Clean up the DirectLine instance on unmount
    return () => {
      dl.end();
    };
  }, [props.chatbotToken]);

  return (
    <div className="d-flex align-items-center">
      <button
        hidden={chatbotVisible || !props.isInHomeComponent}
        className={`btn btn-${props.darkMode ? "light" : "dark"} mx-1`}
      >
        Let's chat
      </button>
      <div
        className={`d-flex align-items-center ${
          chatbotVisible ? "d-none" : ""
        } border border-${
          props.darkMode ? "light" : "dark"
        } p-1 rounded-circle`}
        onClick={() => setChatbotVisible(true)}
        role="button"
      >
        <img
          style={{ height: "40px" }}
          className="img-fluid rounded-circle"
          src={props.image}
          alt="Chatbot"
        ></img>
      </div>
      <div>
        {directLine ? (
          <div
            hidden={!chatbotVisible}
            className={`position-relative card border-${
              props.darkMode ? "light" : "dark"
            }`}
            style={{
              backgroundColor: props.darkMode ? "#16222A" : "#8e9eab",
              maxHeight: "75vh",
              minHeight: "75vh",
              width: "350px",
              overflowY: "auto",
            }}
          >
            <div
              className={`card-header d-flex justify-content-between align-items-center p-3 border-bottom border-${
                props.darkMode ? "light" : "dark"
              } ${props.darkMode ? "text-light" : "text-dark"}`}
              style={{ position: "absolute", top: "0", width: "100%", backgroundColor: props.darkMode ? "#3A6073" : "#eef2f3", }}
            >
              <p className="mb-0 fw-bold">
                <i className="fa-solid fa-circle fa-2xs" style={{color:"#00ff87"}}></i>{" "}
                {props.name}
              </p>
              <i
                className="fas fa-times"
                role="button"
                onClick={() => setChatbotVisible(false)}
              ></i>
            </div>
            <div
              className="card-footer border-0 py-1 px-0"
              style={{
                position: "absolute",
                bottom: "0",
                width: "100%",
                maxHeight: "calc(75vh - 58px)",
                overflowY: "auto",
              }}
            >
              <ReactWebChat
                directLine={directLine}
                styleOptions={{
                  width: "100%",
                  backgroundColor: props.darkMode ? "#16222A" : "#8e9eab",
                  bubbleFromUserBorderRadius: "15px",
                  bubbleBorderRadius: "15px",
                  bubbleFromUserBackground: props.darkMode
                    ? "#16222A"
                    : "#8e9eab",
                  botAvatarImage: props.image,
                  botAvatarInitials: props.name,
                  bubbleBackground: props.darkMode ? "#16222A" : "#8e9eab",
                  bubbleFromUserTextColor: props.darkMode ? "#fff" : "#000",
                  bubbleTextColor: props.darkMode ? "#fff" : "#000",
                  sendBoxButtonColor: props.darkMode ? "#fff" : "#000",
                  sendBoxTextColor: props.darkMode ? "#fff" : "#000",
                  sendBoxBackground: props.darkMode ? "#16222A" : "#8e9eab",
                  sendBoxPlaceholderColor: props.darkMode ? "#fff" : "#000",
                  timestampColor: props.darkMode ? "#fff" : "#000",
                  hideUploadButton: true,
                }}
              />
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
