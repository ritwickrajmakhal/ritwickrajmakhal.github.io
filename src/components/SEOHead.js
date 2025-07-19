import { Helmet } from 'react-helmet-async';

const SEOHead = ({ page = 'home', title, description, image, url }) => {
    const defaultTitle = "Ritwick Raj Makhal - Full Stack Web & Android Developer | Software Engineer";
    const defaultDescription = "Ritwick Raj Makhal is a skilled Full Stack Web and Android Developer with 1+ years of open source experience. Expert in HTML/CSS, SQL, Python, React, and modern web technologies.";
    const defaultImage = "https://ritwickrajmakhal.github.io/assets/images/profile.jpg";
    const baseUrl = "https://ritwickrajmakhal.github.io";

    const seoTitle = title || defaultTitle;
    const seoDescription = description || defaultDescription;
    const seoImage = image || defaultImage;
    const seoUrl = url || baseUrl;

    // Page-specific structured data
    const getStructuredData = () => {
        const baseData = {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ritwick Raj Makhal",
            "url": baseUrl,
            "image": seoImage,
            "jobTitle": "Full Stack Web & Android Developer",
            "description": seoDescription,
            "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Calcutta Institute of Technology"
            },
            "knowsAbout": ["Web Development", "Android Development", "Python", "React", "JavaScript", "HTML", "CSS", "SQL", "Software Engineering"],
            "sameAs": [
                "https://github.com/ritwickrajmakhal",
                "https://linkedin.com/in/ritwick-raj-makhal"
            ]
        };

        if (page === 'portfolio') {
            return {
                ...baseData,
                "@type": ["Person", "CreativeWork"],
                "creativeWorkStatus": "Published",
                "about": "Portfolio showcasing web development and software engineering projects"
            };
        }

        return baseData;
    };

    return (
        <Helmet>
            <title>{seoTitle}</title>
            <meta name="description" content={seoDescription} />
            <meta name="keywords" content="Ritwick Raj Makhal, Full Stack Developer, Web Developer, Android Developer, Software Engineer, React, Python, HTML, CSS, JavaScript, Portfolio, Calcutta Institute of Technology, Open Source" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={seoUrl} />
            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:image" content={seoImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="Ritwick Raj Makhal Portfolio" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={seoUrl} />
            <meta name="twitter:title" content={seoTitle} />
            <meta name="twitter:description" content={seoDescription} />
            <meta name="twitter:image" content={seoImage} />

            {/* Canonical URL */}
            <link rel="canonical" href={seoUrl} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(getStructuredData())}
            </script>
        </Helmet>
    );
};

export default SEOHead;
