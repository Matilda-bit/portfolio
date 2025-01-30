import React from 'react';

import Profile from './profile/Profile';
import Footer from './footer/Footer';
import './Home.css'


const Home: React.FC = () => {
    return (
        <div className='home-container'>
            <Profile />
            <Footer />
        </div>
    )
}

export default Home;