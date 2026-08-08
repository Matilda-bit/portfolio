import { Project } from './ProjectCard';

export const projects: Project[] = [
    {
        title: 'PetMeet',
        subtitle: 'Personal Product · In Development',
        description:
            'A full-stack platform for pet owners built around pet profiles, compatible matching and family relationships. It includes pet management, profile completeness, photo galleries, matching, and an interactive pedigree workflow.',
        tech: ['Symfony', 'PHP', 'React', 'MySQL', 'REST API', 'JWT'],
        takeaway:
            'A long-term personal product focused on building meaningful and useful experiences for pet owners.',
        featured: true,
    },
    {
        title: 'MemeByte',
        subtitle: 'Personal Creative Tool',
        description:
            'A browser-based meme editor for creating and customizing memes with multiple text layers, styling controls, image adjustments and export functionality.',
        tech: ['React', 'JavaScript', 'Express', 'Image Editing'],
        takeaway:
            'Exploring interactive editor UX, image manipulation and richer creative tooling.',
    },
    {
        title: 'GoB7',
        subtitle: 'University Capstone Project',
        description:
            'One of my earliest product-oriented projects, inspired by making city information more useful through municipal open data and community contributions.',
        tech: ['React Native', 'Redux', 'Google Maps', 'Expo'],
        takeaway:
            'My first experience thinking beyond implementation and focusing on software that solves everyday problems.',
    },
    {
        title: 'Mini Trading CRM',
        subtitle: 'Technical Interview Project · 2025',
        description:
            'A full-stack Symfony application built as part of a technical interview, featuring authentication, role-based access, hierarchical data permissions, real-time communication and trading workflows.',
        tech: ['Symfony', 'PHP', 'MySQL', 'Node.js', 'WebSockets'],
        takeaway:
            'Successfully completed as part of the interview process that led to my role at DevYard.',
    },
];