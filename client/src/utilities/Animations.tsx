export default class Animations {
    //singleton
    static animations = new Animations();


    fadeInScreen = (screen_name: string): string | void => {
        const screen = document.getElementById(screen_name) as HTMLElement;
        if (!screen_name || !screen) return;
        screen.style.opacity = "1";
        screen.style.transform = "translateY(1px)";
        return screen_name;
    }

}