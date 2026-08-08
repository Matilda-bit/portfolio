import React from 'react';

import ScreenHeading from '../../utilities/screenHeading/ScreenHeading';

import FeaturedProjectCard from './FeaturedProjectCard';
import ProjectCard from './ProjectCard';
import { projects } from './projectData';

import './Projects.css';

interface ProjectsProps {
    id: string;
    screenName: string;
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
    const featuredProject = projects.find(
        (project) => project.featured
    );

    const otherProjects = projects.filter(
        (project) => !project.featured
    );

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
                <div className="projects-intro">
                    <p>
                        Things I've built, explored, and continue
                        to care about.
                    </p>
                </div>

                {featuredProject && (
                    <FeaturedProjectCard
                        project={featuredProject}
                    />
                )}

                <div className="projects-grid">
                    {otherProjects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                        />
                    ))}
                </div>

                <div className="projects-github">
                    <a
                        href="https://github.com/Matilda-bit"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Explore more projects on GitHub
                        <span aria-hidden="true"> ↗</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;