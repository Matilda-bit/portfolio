import React from 'react';
import ScreenHeading from '../../utilities/screenHeading/ScreenHeading';

import './Contact.css';

interface ContactProps {
    id: string;
    screenName: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
    return (
        <section
            id={id}
            className="contact-container screen-container"
        >
            <ScreenHeading
                title="Contact"
                subHeading="Let's Connect"
            />

            <div className="contact-card">
                <span className="contact-eyebrow">
                    OPEN TO OPPORTUNITIES
                </span>

                <h3 className="contact-title">
                    Let's build something meaningful.
                </h3>

                <p className="contact-description">
                    I'm currently open to new opportunities and would be happy
                    to discuss how my experience could contribute to your team.
                </p>

                <a
                    className="contact-email-button"
                    href="mailto:polinaovras@gmail.com"
                >
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>polinaovras@gmail.com</span>
                    <span className="contact-arrow">↗</span>
                </a>

                <div className="contact-links">
                    <a
                        href="https://www.linkedin.com/in/polina-ovras"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa fa-linkedin"></i>
                        LinkedIn
                    </a>

                    <span className="contact-link-divider">•</span>

                    <a
                        href="https://github.com/Matilda-bit"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa fa-github"></i>
                        GitHub
                    </a>

                    <span className="contact-link-divider">•</span>

                    <a href="mailto:polinaovras@gmail.com">
                        <i className="fa fa-envelope-o"></i>
                        Email
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;