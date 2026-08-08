import React from 'react';

import './ProjectCard.css';

export interface Project {
    title: string;
    subtitle: string;
    description: string;
    tech: string[];
    takeaway?: string;
    status?: string;
    githubUrl?: string;
    featured?: boolean;
    image?: string;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <article className="project-card">
            <div className="project-card-header">
                <span className="project-card-subtitle">
                    {project.subtitle}
                </span>

                <h3 className="project-card-title">
                    {project.title}
                </h3>
            </div>

            <p className="project-card-description">
                {project.description}
            </p>

            <div className="project-tech-list">
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
                <div className="project-card-takeaway">
                    <span className="project-card-arrow">↗</span>
                    <span>{project.takeaway}</span>
                </div>
            )}

            {project.githubUrl && (
                <a
                    className="project-card-link"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on GitHub
                    <span aria-hidden="true"> ↗</span>
                </a>
            )}
        </article>
    );
};

export default ProjectCard;