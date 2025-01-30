import React from 'react';

import Profile from './profile/Profile';
import Footer from './footer/Footer';
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
            <Footer />

        </div>
    )
}

export default Home;