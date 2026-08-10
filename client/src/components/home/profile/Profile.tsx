import React from 'react';

import './Profile.css';

const Profile: React.FC = () => {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a
                                href="https://www.linkedin.com/in/polina-ovras/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn profile"
                            >
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </a>

                            <a
                                href="https://github.com/Matilda-bit"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub profile"
                            >
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </a>

                            <a
                                href="mailto:polinaovras@gmail.com"
                                aria-label="Send email to Polina"
                            >
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            Hello, I&apos;m{' '} 
                        </span>
                        <span className="primary-text">
                            <span className="highlighted-text">
                                Polina Wasserman
                            </span>
                        </span>
                    </div>

                    <div className="profile-details-role">
                        <div className="primary-text">
                            <h1>Full Stack Developer</h1>

                            <p className="profile-role-tagline">
                                Building secure and scalable CRM systems
                                for fintech products using PHP,
                                MySQL, React and TypeScript.
                            </p>
                        </div>
                    </div>

                    <div className="profile-options">
                        <button
                            type="button"
                            className="btn-hire-me btn primary-btn"
                            onClick={() => {
                                document
                                    .getElementById('Contact')
                                    ?.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start',
                                    });
                            }}
                        >
                            Contact Me
                        </button>

                        <a
                            href="/Polina_Wasserman.pdf"
                            download="Polina_Wasserman_Resume.pdf"
                            className="btn btn-resume highlighted-btn"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>

                <div className="profile-picture">
                    <div className="profile-picture-bg"></div>
                </div>
            </div>
        </div>
    );
};

export default Profile;