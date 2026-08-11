import { TOTAL_SCREENS } from "./commonUtils";
import { Subject } from "rxjs";

interface Screen {
    screen_name: string;
    component: React.FC<any>;
    alreadyRendered?: boolean;
}

export default class ScrollService {
    /* SINGLETON CLASS INSTANCE */
    static scrollHandler = new ScrollService();

    static currentScreenBoardCaster = new Subject<string>();
    static currentScreenFadeIn = new Subject<string>();

    constructor() {
        window.addEventListener("scroll", this.checkCurrentScreenUnderViewport);
    }

    scrollToHireMe = () => {
        console.log("try to get contact me");
        let contactMeScreen = document.getElementById("Contact Me");
        if (!contactMeScreen) return;

        contactMeScreen.scrollIntoView({ behavior: "smooth" })
    }

    scrollToHome = () => {
        let homeScreen = document.getElementById("Home");
        if (!homeScreen) return;

        homeScreen.scrollIntoView({ behavior: "smooth" })
    }

    isElementInView = (elem: HTMLElement, type: "complete" | "partial"): boolean => {
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elementBottom = rec.bottom;
        let partiallyVisible = elementTop < window.innerHeight && elementBottom >= 0;
        let completelyVisible = elementTop >= 0 && elementBottom <= window.innerHeight;
        switch (type) {
            case "partial":
                return partiallyVisible;
            case "complete":
                return completelyVisible;
            default:
                return false;
        }
    }

    checkCurrentScreenUnderViewport = () => {

        const triggerPoint =
            window.innerHeight * 0.35;

        for (let screen of TOTAL_SCREENS as Screen[]) {
            const screenElement = document.getElementById( screen.screen_name );
            if (!screenElement) continue;
            const rect = screenElement.getBoundingClientRect();
            const isCurrentScreen = rect.top <= triggerPoint && rect.bottom > triggerPoint;

            if (isCurrentScreen) {
                ScrollService.currentScreenBoardCaster.next( screen.screen_name );
                if (!screen.alreadyRendered) {
                    ScrollService.currentScreenFadeIn.next( screen.screen_name );
                    screen.alreadyRendered = true;
                }

                break;
            }
        }
    };

}