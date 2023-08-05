import React from 'react'

export default function Modal(props) {
  return (
    <div className="modal fade modal-xl" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className={props.darkMode ? "modal-content dark text-bg-dark" : "modal-content light text-bg-light"}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">{props.modalContent.title}</h1>
            <button type="button" className="btn-close bg-light" data-bs-dismiss="modal" onClick={() => props.setModalContent({ title: "", content: "" })} aria-label="Close"></button>
          </div>
          <div className="modal-body" style={{ height: '707px' }}>
            {props.modalContent.content}
          </div>
          <div className="modal-footer">
            <button type="button" onClick={() => props.setModalContent({ title: "", content: "" })} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}
