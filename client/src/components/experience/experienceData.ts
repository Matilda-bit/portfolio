export interface ExperienceHighlightData {
    title: string;
    description: string;
}

export interface ExperienceProjectData {
    title: string;
    description: string;
    technologies?: string[];
    achievement?: string;
}

export interface ExperienceItemData {
    company: string;
    role: string;
    period: string;
    description: string;
    technologies: string[];
    highlights?: ExperienceHighlightData[];
    projects?: ExperienceProjectData[];
}

export const experienceData: ExperienceItemData[] = [
    {
        company: 'DevYard Ltd. (Finantick)',
        role: 'Full Stack PHP Developer',
        period: 'Jun 2025 — Present',
        description:
            'Develop and enhance a large-scale fintech CRM platform used by brokers, administrators and back-office teams. My work spans backend development, business logic, third-party integrations, security, email infrastructure and production troubleshooting.',
        technologies: [
            'PHP',
            'Symfony',
            'MySQL',
            'JavaScript',
            'Twig',
            'REST APIs',
            'Docker',
            'Linux',
            'Doctrine',
            'RBAC',
            'SMTP / IMAP',
        ],
        highlights: [
            {
                title: 'CRM Development',
                description:
                    'Design and implement new CRM functionality, complex business workflows and role-based permissions across multiple modules.',
            },
            {
                title: 'Application Security',
                description:
                    'Improve access control and address security vulnerabilities, including stored XSS mitigation and session security improvements.',
            },
            {
                title: 'Email Infrastructure',
                description:
                    'Build and improve SMTP, IMAP, templates, signatures, permissions and notification workflows.',
            },
            {
                title: 'Production Troubleshooting',
                description:
                    'Investigate production incidents, analyze application and database behavior, optimize SQL queries and improve system reliability.',
            },
        ],
    },
    {
        company: 'O.M.C. Computers & Communications',
        role: 'Full Stack PHP Developer',
        period: 'Feb 2021 — Sep 2023',
        description:
            'Developed and maintained cloud-based web applications as part of the SaaS & Infrastructure team, contributing to internal platforms, cloud services and cross-team engineering initiatives.',
        technologies: [
            'PHP',
            'React',
            'JavaScript',
            'AWS',
            'MinIO',
            'MySQL',
            'PHPUnit',
            'MJML',
        ],
        highlights: [
            {
                title: 'Security-Focused Project',
                description:
                    'Led development of a solution using AWS services and networking technologies to mitigate unwanted traffic and reduce server load.',
            },
            {
                title: 'Cloud Storage',
                description:
                    'Integrated MinIO object storage to support internal services and report management.',
            },
            {
                title: 'Billing Platform',
                description:
                    'Delivered UI improvements for the company billing platform and supported cross-team development work.',
            },
            {
                title: 'Engineering Quality',
                description:
                    'Wrote PHPUnit tests, maintained technical documentation and worked within an Agile development environment.',
            },
        ],
    },
    {
        company: 'Soft&Hard Prototyping',
        role: 'Frontend Developer',
        period: 'Jun 2020 — Sep 2020',
        description:
            'Developed web applications using React, Bootstrap, REST APIs and Git.',
        technologies: ['React', 'Bootstrap', 'REST APIs', 'Git'],
    },
    {
        company: 'SCE',
        role: 'Java Mentor',
        period: 'Nov 2019 — Mar 2020',
        description:
            'Mentored students in Java, object-oriented programming and software engineering fundamentals.',
        technologies: ['Java', 'OOP', 'Mentoring'],
    },
    {
        company: 'Soft&Hard Prototyping',
        role: 'Frontend & Mobile Developer',
        period: 'Oct 2017 — Jul 2019',
        description:
            'Worked on early-stage startup products, contributing to frontend development, iOS applications, Chrome extensions, UI design and rapid prototyping.',
        technologies: [
            'JavaScript',
            'React',
            'Swift',
            'iOS',
            'Chrome Extensions',
            'Bootstrap',
            'Git',
        ],
        projects: [
            {
                title: '2for1',
                description:
                    'Developed features for an iOS application helping divorced parents coordinate parenting schedules and time with their children.',
                technologies: ['Swift', 'iOS'],
            },
            {
                title: 'Chrome Extension',
                description:
                    'Built browser extension functionality and user interfaces using JavaScript and web technologies.',
                technologies: ['JavaScript', 'Chrome Extensions'],
            },
            {
                title: 'VR Steps',
                description:
                    'Contributed to an early-stage VR rehabilitation platform by creating marketing materials, designing a 3D-printable enclosure for the first hardware prototype and supporting product ideation.',
                technologies: ['3D Design', 'Rapid Prototyping', 'VR'],
                achievement:
                    '3rd Place — Ben-Gurion University Innovation Competition',
            },
        ],
    },
];