import React from 'react'
import PropTypes from 'prop-types'

export default function Home(props) {
    return (
        <div className={props.darkMode ? 'dark text-bg-dark' : 'light text-bg-light'}>
            <div className="container" >
                <div className="row py-5 fw-semibold" style={{ fontSize: '2.3rem', letterSpacing: '0.2rem' }}>
                    <div className="col-auto">
                        Hi! I'm
                    </div>
                    <div className="col-auto">
                        {props.home.name}
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col-sm-5">
                        <img className='img-fluid lifting-element' src={props.home.imgUrl} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <a role={'button'} className={props.darkMode ? 'btn btn-medium border my-5 dark text-bg-dark' : 'btn btn-medium border-black my-5 light text-bg-light'} href="">Download Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

Home.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    home: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgUrl: PropTypes.string.isRequired
    }).isRequired
}