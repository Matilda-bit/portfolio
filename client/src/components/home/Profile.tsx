import React from 'react';
import './Profile.css';

import Typical from './typical/Typical';



const Profile: React.FC = () => {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://www.facebook.com/ovras94/' target="_blank" rel="noopener noreferrer">
                                <i className='fa fa-facebook'></i>
                            </a>
                            <a href="https://www.linkedin.com/in/polina-ovras/" target="_blank" rel="noopener noreferrer">
                                <i className='fa fa-linkedin'></i>
                            </a>
                            <a href='https://github.com/Matilda-bit' target="_blank" rel="noopener noreferrer">
                                <i className='fa fa-github'></i>
                            </a>
                            <a href='https://api.whatsapp.com/send/?phone=%2B972543954881&text&type=phone_number&app_absent=0' target="_blank" rel="noopener noreferrer">
                                <i className='fa fa-whatsapp'></i>
                            </a>
                            <a href="mailto:polinaovras@gmail.com?subject=subject&message=message" target="_blank" rel="noopener noreferrer">
                                <i className='fa fa-google'></i>
                            </a>
                            <a href='https://www.instagram.com/ovraspolina?igsh=Ymh5MTJjbmx2Zncw&utm_source=qr' target="_blank" rel="noopener noreferrer">
                                <i className='fa fa-instagram'></i>
                            </a>
                        </div>

                    </div>


                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello I'm <span className='highlighted-text'>Polina</span>
                        </span>
                    </div>

                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Software Engineer 🎓",//17 chars
                                        2000,
                                        "FullStack Dev 🦆",//13
                                        2000,
                                        "Frontend Dev 🎨",//12
                                        2000,
                                        "TypeScript 🔧",//12
                                        2000,
                                        "React 🪄",
                                        1500,
                                        "JS + CSS 📟",
                                        1600,
                                        "PHP 🐘",
                                        1300,
                                        "Node.js 🗿",
                                        1400,
                                        "Passionate about learning and growing! ✓✓✓",//38
                                        4000
                                    ]}
                                    wrapper='p'
                                />
                            </h1>
                            <span className='profile-role-tagline'> Experienced in crafting innovative solutions using advanced front-end and back-end technologies, with a strong focus on detail and quality.</span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn-hire-me btn primary-btn'>Hire Me</button>
                        <a href='PolinaOvras.pdf' download='Polina Ovras.pdf'>
                            <button className='btn btn-resume highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-bg'>

                    </div>
                </div>
            </div>
        </div>
    );
}


export default Profile;
