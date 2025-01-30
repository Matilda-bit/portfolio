import React from 'react';

import Profile from './profile/Profile';
import Footer from './footer/Footer';
import './Home.css'

interface HomeProps {
    screenName: string;
}

const Home: React.FC<HomeProps> = ({ screenName }) => {
    return (
        <div className='home-container'>
            <Profile />
            <Footer />
        </div>
    )
}

export default Home;