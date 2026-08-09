import React from 'react';

import ScreenHeading from '../../utilities/screenHeading/ScreenHeading';

import './Education.css';

interface EducationProps {
    id: string;
    screenName: string;
}

const Education: React.FC<EducationProps> = ({ id }) => {
    return (
        <section
            id={id}
            className="education-container screen-container"
        >
            <div className="education-parent">
                <ScreenHeading
                    title="Education"
                    subHeading="Academic Background"
                />

                <div className="education-card">
                    <div className="education-main">
                        <span className="education-eyebrow">
                            2016 — 2020
                        </span>

                        <h3>
                            B.Sc. in Software Engineering
                        </h3>

                        <p className="education-institution">
                            Sami Shamoon College of Engineering (SCE)
                        </p>
                    </div>

                    <div
                        className="education-icon"
                        aria-hidden="true"
                    >
                        <i className="fa fa-graduation-cap"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;