import Home from '../components/home/Home';
import AboutMe from '../components/aboutme/AboutMe';
import Resume from '../components/resume/Resume';
import Feedback from '../components/feedbacks/Feedback';


export const TOTAL_SCREENS = [
    {
        screen_name: "Home",
        component: Home,
    },
    {
        screen_name: "AboutMe",
        component: AboutMe,
    },
    {
        screen_name: "Resume",
        component: Resume,
      },
      {
        screen_name: "Feedback",
        component: Feedback,
      },
]

export const GET_SCREEN_INDEX = (screen_name: string) => {
    if (!screen_name) return -1;
    for (let i = 0; i < TOTAL_SCREENS.length; i++) {
        if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
    }
    return -1;
}