import React from 'react';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>Page Not Found - Ritwick Raj Makhal</title>
                <meta name="description" content="The page you're looking for doesn't exist. Visit Ritwick Raj Makhal's portfolio homepage to explore his projects and experience." />
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <div className="container text-center py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h1 className="display-1 fw-bold">404</h1>
                        <h2 className="mb-4">Page Not Found</h2>
                        <p className="lead mb-4">
                            Sorry, the page you're looking for doesn't exist or has been moved.
                        </p>
                        <a
                            href="/"
                            className="btn btn-primary btn-lg"
                            aria-label="Return to Ritwick Raj Makhal's homepage"
                        >
                            Return to Home
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;
