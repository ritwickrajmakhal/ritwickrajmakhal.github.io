import React from 'react'
import PropTypes from 'prop-types'

export default function Progress(props) {
    return (
        <div className='mb-3'>
            <label htmlFor="html">{props.progress.label}</label>
            <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow={props.progress.value} style={{height: '20px'}} aria-valuemin="0" aria-valuemax="100">

                <div className="progress-bar" style={{width : props.progress.value+'%'}}>{props.progress.value}%</div>
            </div>
        </div>
    )
}

Progress.propTypes = {
    progress : PropTypes.shape({
        label : PropTypes.string.isRequired,
        value : PropTypes.number.isRequired
    }).isRequired
}