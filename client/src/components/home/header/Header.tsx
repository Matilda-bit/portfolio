import React, { useEffect, useState } from 'react';

import {
    TOTAL_SCREENS,
    GET_SCREEN_INDEX
} from '../../../utilities/commonUtils';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Header.css';
import ScrollService from '../../../utilities/ScrollService';


const Header: React.FC = () => {

    const [selectedScreen, setSelectedScreen] = useState(0);
    const [showHeaderOptions, setShowHeaderOptions] = useState(false);

    useEffect(() => {
        const subscription =
            ScrollService.currentScreenBoardCaster.subscribe(
                (currentScreen: string) => {
                    const screenIndex = GET_SCREEN_INDEX(currentScreen);
                    if (screenIndex < 0) return;
                    setSelectedScreen(screenIndex);
                }
            );

        return () => {
            subscription.unsubscribe();
        };
    }, []);


    const switchScreen = ( index: number, screen: { screen_name: string } ) => {
        const screenComponent = document.getElementById(screen.screen_name);
        if (!screenComponent) return;
        screenComponent.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        setSelectedScreen(index);
        setShowHeaderOptions(false);
    };


    const getHeaderOptionsClass = ( index: number ): string => {
        let classes = 'header-option';
        if (selectedScreen === index) {
            classes += ' selected-header-option';
        }
        return classes;
    };


    return (

        <header className="header-container">
            <div className="header-parent">
                <button type="button" className="header-hamburger" onClick={() => setShowHeaderOptions(prev => !prev) } aria-label="Open navigation" >
                    <FontAwesomeIcon
                        className="header-hamburger-bars"
                        icon={faBars}
                    />
                </button>


                <div className="mobile-current-section">
                    {TOTAL_SCREENS[selectedScreen]?.screen_name}
                    <span className="mobile-current-section-dot"> . </span>
                </div>


                <div className="header-logo">
                    <span>PW</span>
                    <span className="logo-dot">.</span>
                </div>


                <nav className={showHeaderOptions ? 'header-options show-hamburger-options' : 'header-options'} >

                    {TOTAL_SCREENS.map((screen, i) => (
                        <button type="button" key={screen.screen_name} className={getHeaderOptionsClass(i)} onClick={() =>switchScreen(i, screen) }>
                            {screen.screen_name}
                        </button>

                    ))}

                </nav>

            </div>

        </header>
    );
};


export default Header;