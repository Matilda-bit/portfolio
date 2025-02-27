import React, { useEffect, useState } from 'react';
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from '../../../utilities/commonUtils';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import ScrollService from '../../../utilities/ScrollService';

const Header: React.FC = () => {
    const [selectedScreen, setSelectedScreen] = useState(0);
    const [showHeaderOptions, setShowHeaderOptions] = useState(false)

    const updateCurrentScreen = (currentScreen: any) => {
        if (!currentScreen || !currentScreen.screenView) return;

        let screenIndex = GET_SCREEN_INDEX(currentScreen.screenView);
        if (screenIndex < 0) {
            return
        }
    }

    let currentScreenSubscription = ScrollService.currentScreenBoardCaster.subscribe(updateCurrentScreen);

    // let currentScreenSubscription = ScrollService.currentScreenBoardCaster.subscribe(updateCurrentScreen)
    const getHeaderOptions = () => {
        return (
            TOTAL_SCREENS.map((screen, i) => (
                <div key={screen.screen_name} className={getHeaderOptionsClass(i)} onClick={() => switchScreen(i, screen)}>
                    <span>
                        {screen.screen_name}
                    </span>
                </div>
            ))
        );
    }

    const getHeaderOptionsClass = (index: number): string => {
        let classes = "header-option ";
        if (index < TOTAL_SCREENS.length - 1) classes += "header-option-seperator ";
    
        if (selectedScreen === index) classes += "selected-header-option ";
    
        return classes;

    }

    const switchScreen = (index: number, screen: { screen_name: string }) => {
        let screenComponent = document.getElementById(screen.screen_name);
        if (!screenComponent) return;

        screenComponent.scrollIntoView({ behavior: "smooth" });
        setSelectedScreen(index);
        setShowHeaderOptions(false);
    }

    useEffect(() => {
        return () => {
            currentScreenSubscription.unsubscribe();
        };
    }, [currentScreenSubscription]);


    return (
        <div>
            <div className='header-container'
                onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                <div className='header-parent'>
                    <div className='header-hamburger' onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                        <FontAwesomeIcon className='header-hamburger-bars' icon={faBars} />
                    </div>
                    <div className='header-logo'>
                        <span>WASSERMAN~</span>

                    </div>
                    <div
                        className={
                            showHeaderOptions
                                ? "header-options show-hamburger-options"
                                : "header-options"
                        }
                    >
                        {getHeaderOptions()}
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Header;