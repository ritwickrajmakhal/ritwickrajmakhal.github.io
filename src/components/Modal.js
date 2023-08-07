import React from 'react'
import preloader from './../preloader.gif'
export default function Modal(props) {
  return (
    <div className="modal fade modal-xl" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ zIndex: 9990 }}>
      <div className="modal-dialog">
        <div className={props.darkMode ? "modal-content dark text-bg-dark" : "modal-content light text-bg-light"}>
          <div className="modal-header py-2">
            <h1 className="modal-title fs-5" id="exampleModalLabel">{props.modalContent.title}</h1>
            <button
              type="button"
              className="btn-close bg-light"
              data-bs-dismiss="modal"
              onClick={() => {
                props.setModalContent({ title: "", content: "" });
                props.setIframeLoaded(false);
              }}
              aria-label="Close">
            </button>
          </div>
          <div className="modal-body p-1" style={{ height: '707px' }}>
            {!props.iframeLoaded &&
              <div className='bg-light' style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img className='img-fluid' src={preloader} alt='loader' />
              </div>}
            {props.modalContent.content}
          </div>
          <div className="modal-footer p-1">
            <button
              type="button"
              onClick={() => {
                props.setModalContent({ title: "", content: "" });
                props.setIframeLoaded(false);
              }}
              className="btn btn-secondary"
              data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
