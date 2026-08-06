import React from 'react';

import { ExperienceHighlightData } from './experienceData';

interface ExperienceHighlightProps {
    highlight: ExperienceHighlightData;
}

const ExperienceHighlight: React.FC<ExperienceHighlightProps> = ({
    highlight,
}) => {
    return (
        <article className="experience-highlight">
            <span
                className="experience-highlight-marker"
                aria-hidden="true"
            />

            <div>
                <h4>{highlight.title}</h4>
                <p>{highlight.description}</p>
            </div>
        </article>
    );
};

export default ExperienceHighlight;