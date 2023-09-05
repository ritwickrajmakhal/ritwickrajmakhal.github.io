import React from "react";
import preloader from "./../preloader.gif";
export default function Modal(props) {
  return (
    <div
      className="modal fade modal-xl"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{ zIndex: 9990 }}
    >
      <div className="modal-dialog">
        <div
          className={
            props.darkMode
              ? "modal-content dark text-bg-dark"
              : "modal-content light text-bg-light"
          }
        >
          <div className="modal-header py-2 border-0">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {props.modal.title}
            </h1>
            <button
              type="button"
              className="btn-close bg-light"
              data-bs-dismiss="modal"
              onClick={() => {
                props.setIframeLoaded(false);
                props.setModal({ title: null, tab: null });
                props.setModalBody(null);
              }}
              aria-label="Close"
            ></button>
          </div>
          <div
            className="modal-body p-1 overflow-hidden"
            style={{ height: "707px" }}
          >
            {props.modal.tab}
            {!props.iframeLoaded && (
              <div
                className="bg-light"
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img className="img-fluid" src={preloader} alt="loader" />
              </div>
            )}
            {props.modalBody}
          </div>
          <div className="modal-footer p-1">
            <div
              class="btn-group-horizontal"
              role="group"
              aria-label="Vertical radio toggle button group"
            >
              <input
                type="radio"
                class="btn-check"
                name="vbtn-radio"
                id="vbtn-radio2"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="vbtn-radio2">
                <i class="fa-regular fa-thumbs-up"></i><span> 1</span>
              </label>
              <input
                type="radio"
                class="btn-check"
                name="vbtn-radio"
                id="vbtn-radio3"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="vbtn-radio3">
                <i class="fa-regular fa-thumbs-down"></i><span> 1</span>
              </label>
            </div>

            <button
              type="button"
              onClick={() => {
                props.setIframeLoaded(false);
                props.setModal({ title: null, tab: null });
                props.setModalBody(null);
              }}
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
