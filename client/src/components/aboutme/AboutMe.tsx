import React from 'react';
// import React, { useEffect } from 'react';

// import ScrollService from '../../utilities/ScrollService';
import ScreenHeading from '../../utilities/screenHeading/ScreenHeading';
// import Animations from '../../utilities/Animations';

import './AboutMe.css';

interface AboutMeProps {
    id: string;
}

interface ExpertiseItem {
    title: string;
    description: string;
}

const expertiseItems: ExpertiseItem[] = [
    {
        title: 'Backend Development',
        description:
            'PHP, Symfony, Doctrine, MySQL, REST APIs and complex business logic.',
    },
    {
        title: 'Full Stack Engineering',
        description:
            'Backend-focused development with React, TypeScript, JavaScript, Twig, HTML and CSS.',
    },
    {
        title: 'Application Security',
        description:
            'Authentication, authorization, session protection, XSS mitigation and incident investigation.',
    },
    {
        title: 'Production Systems',
        description:
            'Troubleshooting, performance improvements, integrations and support for business-critical applications.',
    },
    {
        title: 'Cloud & Infrastructure',
        description:
            'Docker, Linux, AWS services, MinIO, SMTP, IMAP and cloud-based platforms.',
    },
    {
        title: 'Code Quality',
        description:
            'Maintainable architecture, PHPUnit testing, documentation, code review and thoughtful problem-solving.',
    },
];

const AboutMe: React.FC<AboutMeProps> = ({ id }) => {


    return (
        <section
            className="about-me-container screen-container"
            id={id}
        >
            <div className="about-me-parent">
                <ScreenHeading
                    title="About Me"
                    subHeading="Professional Profile"
                />

                <div className="about-me-content">
                    <div className="about-me-introduction">
                        <p className="about-me-lead">
                            I&apos;m a Full Stack PHP Developer with a B.Sc. in
                            Software Engineering and 7+ years of experience delivering
                            and supporting business-critical web applications, from
                            cloud-based SaaS solutions to large-scale fintech CRM platforms.
                        </p>    

                        <p>
                            My core expertise includes PHP, Symfony, MySQL and
                            JavaScript, with additional experience in React,
                            TypeScript, AWS, Node.js services, REST APIs,
                            webhooks, role-based access control and email
                            infrastructure.
                        </p>

                        <p>
                            Throughout my career, I&apos;ve worked on complex
                            existing systems, developed new product functionality,
                            integrated external services, improved security and
                            performance, and investigated production issues across
                            backend, frontend and infrastructure-related areas.
                        </p>

                        <p>
                            I value clean, maintainable code, thoughtful
                            problem-solving and reliable solutions that support
                            both users and business goals.
                        </p>
                    </div>

                    <div className="about-me-expertise">
                        {expertiseItems.map(item => (
                            <article
                                className="expertise-card"
                                key={item.title}
                            >
                                <span
                                    className="expertise-card-marker"
                                    aria-hidden="true"
                                />

                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;