import React from 'react';
import './Footer.css';


const Footer: React.FC = () => {
    return (
        <div className='footer-container'>
            <div className='footer-parent'>
                <img src={require('../../../assets/Home/shape-bg.png')} alt='no internet connection'></img>
            </div>
        </div>
    )
}

export default Footer;