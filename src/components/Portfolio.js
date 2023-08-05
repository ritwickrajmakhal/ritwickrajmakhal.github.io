import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

export default function Portfolio(props) {
    const portfolios = props.portfolios.map((portfolio, index) =>
        <Card
            darkMode={props.darkMode}
            key={index}
            card={portfolio}
            footer={portfolio.techs.map((tech, index) => <span key={index} className="badge rounded-pill text-bg-primary" style={{ letterSpacing: '0.2rem' }}>{tech}</span>)}
            setModalContent={props.setModalContent}
            modalContent={{
                title: portfolio.title,
                content: <iframe style={{ height: '100%', width: '100%' }} src={portfolio.iframeUrl} title={portfolio.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            }}
        />
    )
    return (
        <div id='portfolio' className={props.darkMode ? 'dark text-bg-dark' : 'light text-bg-light'}>
            <div className="container">
                <h1 className='text-center'>Portfolio</h1>
                <div className="d-flex flex-wrap justify-content-center pb-3">
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
