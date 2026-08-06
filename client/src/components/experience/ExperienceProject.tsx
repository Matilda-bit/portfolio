import React from 'react';

import { ExperienceProjectData } from './experienceData';

interface ExperienceProjectProps {
    project: ExperienceProjectData;
}

const ExperienceProject: React.FC<ExperienceProjectProps> = ({ project }) => {
    return (
        <article className="experience-project">
            <h5>{project.title}</h5>

            <p>{project.description}</p>

            {project.technologies && project.technologies.length > 0 && (
                <div className="experience-project-technologies">
                    {project.technologies.map(technology => (
                        <span key={technology}>{technology}</span>
                    ))}
                </div>
            )}

            {project.achievement && (
                <div className="experience-achievement">
                    <span aria-hidden="true">🏆</span>
                    {project.achievement}
                </div>
            )}
        </article>
    );
};

export default ExperienceProject;