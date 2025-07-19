import React from 'react';
import PropTypes from 'prop-types';

export default function Experience({ darkMode, experience }) {
    // Sort experiences by start date (most recent first)
    const sortedExperience = experience.sort((a, b) => {
        return new Date(b.startDate) - new Date(a.startDate);
    });

    const getExperienceTypeColor = (type) => {
        switch (type.toLowerCase()) {
            case 'open source':
                return 'success';
            case 'internship':
                return 'primary';
            case 'full-time':
                return 'info';
            default:
                return 'secondary';
        }
    };

    return (
        <section
            id="experience"
            className={darkMode ? "dark text-bg-dark py-5" : "light text-bg-light py-5"}
            aria-labelledby="experience-heading"
        >
            <div className="container">
                <header className="text-center mb-5">
                    <h1 className={`display-5 fw-bold ${darkMode ? 'text-light' : 'text-dark'}`}>
                        Experience
                    </h1>
                    <p className={`lead ${darkMode ? 'text-light' : 'text-muted'}`}>
                        My journey in software development and technology
                    </p>
                </header>

                <div className="timeline-container">
                    <div className="timeline-line"></div>

                    {sortedExperience.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="timeline-content">
                                <div className="timeline-marker">
                                    <div className={`timeline-marker-inner bg-${getExperienceTypeColor(exp.type)}`}>
                                        {exp.current ? (
                                            <i className="fas fa-star text-white"></i>
                                        ) : (
                                            <i className="fas fa-briefcase text-white"></i>
                                        )}
                                    </div>
                                </div>

                                <div className={`experience-card ${darkMode ? 'dark-card' : 'light-card'}`}>
                                    <div className="card-header d-flex justify-content-between align-items-start">
                                        <div>
                                            <h3 className={`h5 mb-1 fw-bold ${darkMode ? 'text-light' : 'text-dark'}`}>{exp.title}</h3>
                                            <h4 className={`h6 mb-2 ${darkMode ? 'text-success' : 'text-primary'}`}>
                                                <i className="fas fa-building me-2"></i>
                                                {exp.company}
                                            </h4>
                                        </div>
                                        <div className="text-end">
                                            <span className={`badge bg-${getExperienceTypeColor(exp.type)} mb-2`}>
                                                {exp.type}
                                            </span>
                                            {exp.current && (
                                                <span className="badge bg-success ms-1 mb-2">
                                                    <i className="fas fa-circle me-1" style={{ fontSize: '0.5rem' }}></i>
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <div className="experience-meta mb-3">
                                            <div className={`d-flex flex-wrap gap-3 ${darkMode ? 'text-light-muted' : 'text-muted'}`}>
                                                <span>
                                                    <i className="fas fa-calendar-alt me-2"></i>
                                                    {exp.duration}
                                                </span>
                                                <span>
                                                    <i className="fas fa-map-marker-alt me-2"></i>
                                                    {exp.location}
                                                </span>
                                            </div>
                                        </div>

                                        <p className={`lh-lg mb-3 ${darkMode ? 'text-light' : 'text-dark'}`}>
                                            {exp.description}
                                        </p>

                                        <div className="mb-0">
                                            <h5 className={`h6 mb-2 ${darkMode ? 'text-info' : 'text-success'}`}>
                                                <i className="fas fa-code me-2"></i>
                                                Technologies & Skills
                                            </h5>
                                            <div className="d-flex flex-wrap gap-3">
                                                {exp.technologies.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className={`badge ${darkMode ? 'bg-success' : 'bg-primary'} me-2 mb-2`}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

Experience.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    experience: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            company: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            duration: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
            current: PropTypes.bool.isRequired,
        })
    ).isRequired,
};
