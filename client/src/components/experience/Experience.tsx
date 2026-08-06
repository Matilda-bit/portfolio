import React from 'react';

import ScreenHeading from '../../utilities/screenHeading/ScreenHeading';
import ExperienceItem from './ExperienceItem';
import { experienceData } from './experienceData';

import './Experience.css';

interface ExperienceProps {
    id: string;
    screenName: string;
}

const Experience: React.FC<ExperienceProps> = ({ id }) => {
    return (
        <section
            id={id}
            className="experience-container screen-container"
        >
            <div className="experience-parent">
                <ScreenHeading
                    title="Experience"
                    subHeading="Professional Journey"
                />

                <div className="experience-content">
                    {experienceData.map(experience => (
                        <ExperienceItem
                            key={`${experience.company}-${experience.period}`}
                            experience={experience}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;