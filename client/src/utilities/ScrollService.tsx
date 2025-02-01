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

    checkCurrentScreenUnderViewport = (event: Event) => {
        // if (!event || Object.keys(event).length < 1) {
        if (!event) {

            return;
        }
        for (let screen of TOTAL_SCREENS as Screen[]) {

            let screenElement = document.getElementById(screen.screen_name);
            if (!screenElement) continue;

            let fullyVisible = this.isElementInView(screenElement, "complete");
            let partiallyVisible = this.isElementInView(screenElement, "partial");

            if (fullyVisible || partiallyVisible) {
                if (partiallyVisible && !screen.alreadyRendered) {

                    ScrollService.currentScreenFadeIn.next(screen.screen_name);
                    screen.alreadyRendered = true;
                    break;
                }
                if (fullyVisible) {
                    ScrollService.currentScreenBoardCaster.next(screen.screen_name);
                    break;
                }

            }
            if (fullyVisible || partiallyVisible) {
                ScrollService.currentScreenBoardCaster.next(screen.screen_name);
                break;
            }
        }
    };

}