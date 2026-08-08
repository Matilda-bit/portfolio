import React from 'react';

import { Project } from './ProjectCard';

import './FeaturedProjectCard.css';

interface FeaturedProjectCardProps {
    project: Project;
}

const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({
    project,
}) => {
    return (
        <article className="featured-project-card">
            <div className="featured-project-visual">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="featured-project-image"
                    />
                ) : (
                    <div className="featured-project-placeholder">
                        <span>{project.title}</span>
                    </div>
                )}
            </div>

            <div className="featured-project-content">
                <span className="featured-project-subtitle">
                    {project.subtitle}
                </span>

                <h3 className="featured-project-title">
                    {project.title}
                </h3>

                <p className="featured-project-description">
                    {project.description}
                </p>

                <div className="featured-project-tech">
                    {project.tech.map((technology) => (
                        <span
                            key={technology}
                            className="project-tech"
                        >
                            {technology}
                        </span>
                    ))}
                </div>

                {project.takeaway && (
                    <div className="featured-project-takeaway">
                        <span className="project-card-arrow">↗</span>
                        <span>{project.takeaway}</span>
                    </div>
                )}

                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="featured-project-link"
                    >
                        View project
                        <span aria-hidden="true"> ↗</span>
                    </a>
                )}
            </div>
        </article>
    );
};

export default FeaturedProjectCard;