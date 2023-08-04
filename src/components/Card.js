import React from 'react'
import PropTypes from 'prop-types'

export default function Card(props) {
    return (
        <div role={'button'} className={props.darkMode ? "card m-2 p-2 shadow-lg rounded-4 text-light cursor-pointer" : "card m-2 p-1 shadow-lg rounded-4 cursor-pointer"} style={{ width: '25rem', backgroundColor: 'rgba(0,0,0,0.2)' }} data-bs-theme={props.darkMode ? "dark" : ""}>
            <img src={props.imgUrl} className="card-img-top scale-on-hover img-fluid" alt={props.title} />
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-text fs-5">{props.desc}</p>
            </div>
            <div className="card-footer d-flex justify-content-around">
                {props.footer}
            </div>
        </div>
    )
}

Card.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    footer: PropTypes.arrayOf(PropTypes.element)
}