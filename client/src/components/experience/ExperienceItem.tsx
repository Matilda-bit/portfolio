import React from 'react';

import ExperienceHighlight from './ExperienceHighlight';
import ExperienceProject from './ExperienceProject';
import { ExperienceItemData } from './experienceData';

interface ExperienceItemProps {
    experience: ExperienceItemData;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
    return (
        <article className="experience-item">
            <div className="experience-item-header">
                <div>
                    <p className="experience-company">
                        {experience.company}
                    </p>

                    <h3>{experience.role}</h3>
                </div>

                <span className="experience-period">
                    {experience.period}
                </span>
            </div>

            <p className="experience-description">
                {experience.description}
            </p>

            <div
                className="experience-technologies"
                aria-label={`${experience.company} technologies`}
            >
                {experience.technologies.map(technology => (
                    <span key={technology}>{technology}</span>
                ))}
            </div>

            {experience.highlights && experience.highlights.length > 0 && (
                <>
                    <h4 className="experience-section-title">
                        Key Contributions
                    </h4>

                    <div className="experience-highlights">
                        {experience.highlights.map(highlight => (
                            <ExperienceHighlight
                                key={highlight.title}
                                highlight={highlight}
                            />
                        ))}
                    </div>
                </>
            )}

            {experience.projects && experience.projects.length > 0 && (
                <>
                    <h4 className="experience-section-title">
                        Featured Projects
                    </h4>

                    <div className="experience-projects">
                        {experience.projects.map(project => (
                            <ExperienceProject
                                key={project.title}
                                project={project}
                            />
                        ))}
                    </div>
                </>
            )}
        </article>
    );
};

export default ExperienceItem;