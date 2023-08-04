import React from 'react'
import PropTypes from 'prop-types'

export default function Footer(props) {
    return (
        <div className={props.darkMode ? 'dark text-bg-dark' : 'light text-bg-light'}>
            <div className="container-fluid border-top py-2">
                <p className='text-center fs-5 my-2'>© {new Date().getFullYear()} <a class="link-opacity-100-hover text" href="/">{props.footer.name}</a>. All Rights Reserved</p>
            </div>
        </div>
    )
}

Footer.propTypes = {
    footer: PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired
}