import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

export default function Portfolio(props) {
    const portfolios = props.portfolios.map((portfolio, index) => <Card darkMode={props.darkMode} key={index} imgUrl={portfolio.imgUrl} title={portfolio.title} desc={portfolio.desc} footer={portfolio.techs.map((tech, index) => <span key={index} class="badge rounded-pill text-bg-primary" style={{ letterSpacing: '0.2rem' }}>{tech}</span>)} />)
    return (
        <div id='portfolio' className={props.darkMode ? 'dark text-bg-dark' : 'light text-bg-light'}>
            <div className="container">
                <h1 className='text-center'>Portfolio</h1>
                <div className="d-flex flex-wrap">
                    {portfolios}
                </div>
            </div>
        </div>
    )
}
Portfolio.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    portfolios: PropTypes.arrayOf(PropTypes.shape({
        imgUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired
    }).isRequired).isRequired
}
