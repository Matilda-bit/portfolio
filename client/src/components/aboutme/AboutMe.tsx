import React from 'react';
import ScrollService from '../../utilities/ScrollService'
import ScreenHeading from '../../utilities/screenHeading/ScreenHeading';
import Animations from '../../utilities/Animations';
import './AboutMe.css';

interface AboutMeProps {
    id: string;
}

const AboutMe: React.FC<AboutMeProps> = (props) => {
    let fadeInScreenHandler = (screen: any) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };
    
    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTSANTS = {
        
        description:
        (<>
        <strong>A passionate Full-Stack Developer</strong> with expertise in <strong>React</strong>, <strong>TypeScript</strong>, <strong>PHP</strong>, and <strong>JavaScript</strong>. I specialize in building sleek, responsive applications that ensure optimal performance and user experience. With a strong background in both <strong>frontend</strong> and <strong>backend</strong> development, <strong>API integrations</strong>, <strong>database management</strong>, <strong>system design</strong>, and cloud solutions like <strong>AWS S3</strong>, I create scalable and well-structured applications. I thrive on <strong>problem-solving</strong>, mentoring developers, and collaborating to deliver impactful products. My experience spans <strong>fintech</strong>, <strong>marketplaces</strong>, and <strong>cloud-based platforms</strong>. Currently, I’m working on <strong>Meme Byte</strong>, a meme generation platform, and <strong>PetMeet</strong>, an app connecting pet owners for playdates and shared experiences.
    </>),
        highlights: {
            bullets: [
                "<bold>Full Stack Web & Mobile Development</bold>",
                "<b>Interactive Front End</b> designed to match UI/UX specifications",
                "<b>React, TypeScript, PHP & JavaScript</b> for dynamic and scalable applications",
                "<b>Redux for State Management</b> and seamless data flow",
                "<b>Building REST APIs</b> for efficient backend communication",
                "<b>Database Management</b> with MySQL and cloud-based solutions",
                "<b>System Design & Architecture</b> for scalable, maintainable applications",
                "<b>Cloud Expertise – AWS S3</b> for storage solutions and scalability"
            ],
            heading: "Here Are a Few Highlights:",
        },
    };

    const renderHighlight = () => {
        return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
            <div className="highlight" key={i}>
                <div className="highlight-blob"></div>
                <span dangerouslySetInnerHTML={{ __html: value }} />
            </div>
        ));
    };


    return (
        <div
            className="about-me-container screen-container fade-in"
            id={props.id || ""}
        >
            <div className="about-me-parent">
                <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} summary={"With over 4 years of experience in full-stack web and mobile development, I bring a strong mix of technical expertise, creativity, and problem-solving to every project. My focus is on building scalable, high-performance applications that enhance user experience and drive engagement. Whether it's frontend development, backend logic, API integrations, system design, or cloud solutions, I deliver clean, efficient, and maintainable code that meets business goals."}/>
                <div className="about-me-card">
                    <div className="about-me-profile"></div>
                    <div className="about-me-details">
                        <span className="about-me-description">

                            {SCREEN_CONSTSANTS.description}
                    
                        </span>
                        <div className="about-me-highlights">
                            <div className="highlight-heading">
                                <span><b>{SCREEN_CONSTSANTS.highlights.heading}</b></span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className="about-me-options">
                            <button
                                className="btn-hire-me btn primary-btn"
                                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                            >
                                Hire Me
                            </button>
                            <a href='PolinaOvras.pdf' download='Polina Ovras.pdf'>
                                <button className="btn btn-resume highlighted-btn">Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;