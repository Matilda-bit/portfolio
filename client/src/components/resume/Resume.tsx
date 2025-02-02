import React, { useEffect, useState } from "react";
import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import '../../assets/Resume/education.svg'

import './Resume.css';
interface ResumeProps {
    id: string,
    screenName: string;
}
const Resume: React.FC<ResumeProps> = (props) => {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState<number>(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState<any>({});

    let fadeInScreenHandler = (screen: any) => {
        if (screen.fadeInScreen !== props.id) return;

        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    /* REUSABLE MINOR COMPONENTS */
    const ResumeHeading = (props: any) => {
        return (
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span className="heading" >{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        );
    };

    /* STATIC RESUME DATA FOR THE LABELS*/
    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.svg" },
    ];

    const programmingSkillsDetails = [
        { skill: "React JS", ratingPercentage: 89 },
        { skill: "JavaScript", ratingPercentage: 75 },
        { skill: "TypeScript", ratingPercentage: 70 },
        { skill: "React Native", ratingPercentage: 60 },
        { skill: "PHP", ratingPercentage: 86 },
        { skill: "Express JS", ratingPercentage: 70 },
        { skill: "Node JS", ratingPercentage: 79 },
        { skill: "Mongo Db", ratingPercentage: 60 },
        { skill: "Java", ratingPercentage: 60 },
        { skill: "HTML", ratingPercentage: 90 },
        { skill: "CSS", ratingPercentage: 89 },
    ];

    const projectsDetails = [
        {
            title: "Personal Portfolio Website",
            duration: { fromDate: "2025", toDate: "2025" },
            description:
                "A Personal Portfolio website to showcase all my details and projects at one place.",
            subHeading: "Technologies Used: React JS, TypeScript",
        },
        {
            title: "PetMeet",
            duration: { fromDate: "2024", toDate: "2025" },
            description:
                "PetMeet is a social app designed to connect pet owners, helping them find playdates, share experiences, and build a supportive pet-loving community. It makes it easy to meet fellow pet owners, organize gatherings, and exchange tips on pet care.",
            subHeading:
                "Technologies Used: TypeScript, React, Redux, PHP ,Laravel, PostgreSQL, AWS S3, Redux.",
        },
        {
            title: "Meme Byte Website",
            duration: { fromDate: "2024", toDate: "2025" },
            description:
                "Meme Byte is a creative platform for effortless meme generation and sharing. Featuring a sleek, interactive design, it empowers users to craft, customize, and spread humor across a vibrant online community.",
            subHeading:
                "Technologies Used: Node.js, Express, React Js, Redux, Bootstrap.",
        },
    ];

    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
                heading={"Shamoon College of Engineering"}
                subHeading={"BACHELOR OF SCIENCE (B.Sc.) in Software Engneering"}
                fromDate={"2016"}
                toDate={"2020"}
            />

            <ResumeHeading
                heading={"Udemy"}
                subHeading={"React - The Complete Guide 2024 (incl. Next.js, Redux)"}
                fromDate={"2024"}
                toDate={"2024"}
            />
            <ResumeHeading
                heading={"Udemy"}
                subHeading={"Understanding TypeScript"}
                fromDate={"2024"}
                toDate={"2024"}
            />
      
        </div>,

        /* WORK EXPERIENCE */
        <div className="resume-screen-container " key="work-experience">
            <div className="experience-container scroll ">
                <ResumeHeading
                    heading={"O.M.C. Computers & Communications"}
                    subHeading={"SW Engineer"}
                    fromDate={"2021"}
                    toDate={"2023"}
                />
                <div className="experience-description">
                    <span className="resume-description-text">
                        Full-Stack Developer in IaaS team: Created and maintained marketplace
                        and cloud solutions.
                        <br />
                        <strong> React, PHP, MySQL, Docker, AWS, and MinIO </strong>
                    </span>
                </div>
                <div className="experience-description">
                    <span className="resume-description-text">
                        - I contributed to the development of a Billing fintech project by building the client side and integrating it with the backend.
                    </span>
                    <br />
                    <span className="resume-description-text">
                        - implemented security project to real project and support by developing new feetures to improve it.
                    </span>
                    <br />
                    <span className="resume-description-text">
                        - Handled cross-platform development, unit testing,
                        troubleshooting, code review, and documentation.
                    </span>
                    <br />
                </div>
            </div>

            <br />
            <div className="experience-container">
                <ResumeHeading
                    heading={"Soft&Hard prototyping"}
                    subHeading={"Frontend developer"}
                    fromDate={"2020"}
                    toDate={"2020"}
                />
                <div className="experience-description">
                    <span className="resume-description-text">
                        Developed livem.tv App.
                        <br />
                        <strong> React, Bootstrap, RESTful APIs, and Git </strong>
                    </span>
                </div>
            
                <br />
                <ResumeHeading
                    heading={"SCE - Shamoon College of Engineeringx"}
                    subHeading={"Java Mentor"}
                    fromDate={"2019"}
                    toDate={"2020"}
                />
                <div className="experience-description">
                    <span className="resume-description-text">
                        Taught Java to small groups, focusing on OOP templates and project
                        implementation.
                        <br />
                        <strong> Java, OOP, Design Patterns </strong>
                    </span>
                </div>

                <ResumeHeading
                    heading={"Soft&Hard prototyping"}
                    subHeading={"Frontend developer"}
                    fromDate={"2017"}
                    toDate={"2019"}
                />
                <div className="experience-description">
                    <span className="resume-description-text">
                        Created SoftSearch Chrome extension and developed mobile apps with
                        Swift. Led design for VRSteps and built diagrams.
                        <br />
                        <strong> Chrome extension, Vue, RESTful APIs, and Git </strong>
                    </span>
                </div>
            </div>
            <br />
            <br />

        </div>,


        /* PROGRAMMING SKILLS */
        <div
            className="resume-screen-container programming-skills-container"
            key="programming-skills"
        >
            {programmingSkillsDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                        <div
                            style={{ width: skill.ratingPercentage + "%" }}
                            className="active-percentage-bar"
                        ></div>
                    </div>
                </div>
            ))}
        </div>,

        /* PROJECTS */
        <div className="resume-screen-container" key="projects">
            {projectsDetails.map((projectsDetails, index) => (
                <><ResumeHeading
                    key={index}
                    heading={projectsDetails.title}
                    subHeading={projectsDetails.subHeading}
                    description={projectsDetails.description}
                    fromDate={projectsDetails.duration.fromDate}
                    toDate={projectsDetails.duration.toDate}
                />
                <br/>
                </>
            ))}
        </div>,

        /* Interests */
        <div className="resume-screen-container" key="interests">
            <ResumeHeading
                heading="Passion"
                description="I love brainstorming innovative ideas and dream of creating something both interesting and beneficial for society."
            />
            <ResumeHeading
                heading="Art"
                description="With a background in art education, I have a deep passion for visual creativity. I’ve exhibited my work in Israel, successfully selling several paintings, and occasionally take commissions for pencil portraits."
            />
            <ResumeHeading
                heading="Bringing Nature Indoors"
                description="I enjoy cultivating houseplants and creating a harmonious indoor environment. Exploring different plant species and their care techniques is both a hobby and a source of relaxation for me."
            />
        </div>,
    ];

    const handleCarousal = (index: number) => {
        console.log('Selected Index:', index);

        const carousal = document.querySelector('.resume-details-carousal');
        // const bulletDetails = document.querySelector('.resume-bullet-details') ;

        if (carousal) {

            let totalHeight = 0;

            for (let i = 0; i < index; i++) {
                const child = carousal.children[i];
                if (child) {
                    const childHeight = child.clientHeight || 360; 
                    totalHeight += childHeight; 
                }
            }

            const newCarousalOffset = {
                style: { transform: `translateY(-${totalHeight}px)` },
            };

            setCarousalOffsetStyle(newCarousalOffset);
            setSelectedBulletIndex(index);
            // if (bulletDetails) {
            //     const thresholdWidth = 500; // Set the threshold width as per your requirement
            //     const bulletWidth = bulletDetails.clientWidth;
    
            //     if (bulletWidth > thresholdWidth) {
            //         // If width exceeds threshold, apply overflow-y: auto
            //         bulletDetails.style.overflowY = 'auto';
            //     } else {
            //         // If width is smaller than threshold, remove overflow-y
            //         bulletDetails.style.overflowY = '';
            //     }
            // }

        }
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={
                    index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
                }
                key={index}
            >
                <img
                    className="bullet-logo"
                    src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                    alt="B"
                />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ));
    };

    const getResumeScreens = () => {
        return (
            <div
                style={carousalOffsetStyle.style}
                className="resume-details-carousal"
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    };

    useEffect(() => {
        return () => {
            /* UNSUBSCRIBE THE SUBSCRIPTIONS */
            fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription]);

    useEffect(() => {
        const carousal = document.querySelector('.resume-details-carousal') as HTMLElement;

        if (carousal) {
            const handleScroll = () => {
                // Get the current scroll position
                const scrollPosition = carousal.scrollTop;

                // Example: Add custom styles based on scroll position
                if (scrollPosition > 100) {
                    carousal.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
                } else {
                    carousal.style.boxShadow = 'none';
                }

                // You can add more scroll effects based on the scroll position here
            };

            // Attach the scroll event listener
            carousal.addEventListener('scroll', handleScroll);

            // Clean up the event listener on component unmount
            return () => {
                carousal.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    return (
        <div
            className="resume-container screen-container fade-in"
            id={props.id || ""}
        >
            <div className="resume-content">
                <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>

                    <div className="resume-bullet-details">{getResumeScreens()}</div>
                </div>
            </div>
        </div>
    );
};

export default Resume;