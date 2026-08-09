import React from 'react';

import Profile from './profile/Profile';
import './Home.css'
import Header from './header/Header';

interface HomeProps {
    screenName: string;
    id: string;
}
const Home: React.FC<HomeProps> = (props) => {
    return (
        <div className="home-container" id={props.id || ""}>
            <Header />
            <Profile />
            <div className="home-wave" aria-hidden="true">
    <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* <path
            d="
                M0,35
                C180,110 360,115 560,82
                C780,45 980,25 1160,48
                C1280,62 1370,82 1440,92
                L1440,140
                L0,140
                Z
            "
            fill="#ffffff"
        /> */}

        <path
            d="
                M0,18
                C140,105 340,125 570,88
                C800,50 1010,20 1190,46
                C1300,62 1380,78 1440,86
                L1440,140
                L0,140
                Z
            "
            fill="#ffffff"
        />
    </svg>
</div>
        </div>
    )
}

export default Home;