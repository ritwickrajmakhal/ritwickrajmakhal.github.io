import React from "react";
import preloader from "./../preloader.gif";
export default function Modal({
  darkMode,
  iframeLoaded,
  setIframeLoaded,
  modal,
  setModal,
  modalBody,
  modalFooter,
  setModalFooter,
  setModalBody,
}) {
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
            darkMode
              ? "modal-content dark text-bg-dark"
              : "modal-content light text-bg-light"
          }
        >
          <div className="modal-header py-2 border-0">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {modal.title}
            </h1>
            <button
              type="button"
              className="btn-close bg-danger"
              data-bs-dismiss="modal"
              onClick={() => {
                setIframeLoaded(false);
                setModal({ title: null, tab: null });
                setModalBody(null);
                setModalFooter(null);
              }}
              aria-label="Close"
            ></button>
          </div>
          <div
            className="modal-body p-1 overflow-hidden"
            style={{ height: "707px" }}
          >
            {modal.tab}
            {!iframeLoaded && (
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
            {modalBody}
          </div>
          <div
            className={`modal-footer p-1 ${
              modalFooter ? "d-flex justify-content-between" : ""
            }`}
          >
            {modalFooter}
            <button
              type="button"
              onClick={() => {
                setIframeLoaded(false);
                setModal({ title: null, tab: null });
                setModalBody(null);
                setModalFooter(null);
              }}
              className="btn btn-danger"
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
