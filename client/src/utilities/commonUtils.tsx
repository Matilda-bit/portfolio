import Home from '../components/home/Home';
import AboutMe from '../components/aboutme/AboutMe';
// import Resume from '../components/resume/Resume';
// import Feedback from '../components/feedbacks/Feedback';
import Experience from '../components/experience/Experience';
import Projects from '../components/projects/Projects';
import Education from '../components/education/Education';
import Contact from '../components/contact/Contact';


export const TOTAL_SCREENS = [
    {
        screen_name: 'Home',
        component: Home,
    },
    {
        screen_name: 'About',
        component: AboutMe,
    },
    {
        screen_name: 'Experience',
        component: Experience,
    },
    {
        screen_name: 'Projects',
        component: Projects,
    },
    {
        screen_name: 'Education',
        component: Education,
    },
    {
        screen_name: 'Contact',
        component: Contact,
    },
];

export const GET_SCREEN_INDEX = (screen_name: string) => {
    if (!screen_name) return -1;
    for (let i = 0; i < TOTAL_SCREENS.length; i++) {
        if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
    }
    return -1;
}