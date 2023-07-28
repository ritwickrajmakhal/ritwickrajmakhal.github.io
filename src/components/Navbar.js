import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    const links = props.nav.links.map((link, index) => <li key={index} className="nav-item">
        <a className="nav-link active" aria-current="page" href={link[1]}>{link[0]}</a>
    </li>);
    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img className='rounded' src={props.nav.logo} alt="Bootstrap" width="40" height="40" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {links}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
Navbar.propTypes = {
    nav: PropTypes.shape({
        logo: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string.isRequired).isRequired).isRequired
    }).isRequired
}