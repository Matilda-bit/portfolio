import React from 'react';
import ScreenHeading from '../../utilities/screenHeading/ScreenHeading';

import './Projects.css';

interface ProjectsProps {
    id: string;
    screenName: string;
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
    return (
        <section
            id={id}
            className="projects-container screen-container"
        >
            <ScreenHeading
                title="Projects"
                subHeading="Selected Work"
            />

            <div className="projects-content">
                Projects will be added here.
            </div>
        </section>
    );
};

export default Projects;