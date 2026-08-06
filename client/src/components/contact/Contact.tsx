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

            <div className="contact-content">
                <a href="mailto:polinaovras@gmail.com">
                    polinaovras@gmail.com
                </a>
            </div>
        </section>
    );
};

export default Contact;