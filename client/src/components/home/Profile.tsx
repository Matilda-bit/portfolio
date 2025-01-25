import React from 'react';
import './Profile.css';
// import Typical from 'react-typical';

import Typical from './typical/Typical';



const Profile: React.FC = () => {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>

                        <a href='https://www.facebook.com/ovras94/' target="_blank">
                            <i className='fa fa-facebook'></i>
                        </a>
                        <a href="https://www.linkedin.com/in/polina-ovras/" target="_blank">
                            <i className='fa fa-linkedin'></i>
                        </a>
                        <a href='https://github.com/Matilda-bit' target="_blank">
                            <i className='fa fa-github'></i>
                        </a>
                        <a href='https://api.whatsapp.com/send/?phone=%2B972543954881&text&type=phone_number&app_absent=0' target="_blank">
                            <i className='fa fa-whatsapp'></i>
                        </a>
                        <a href="mailto:polinaovras@gmail.com?subject=subject&message=message" target="_blank">
                            <i className='fa fa-google'></i>
                        </a>
                        <a href='https://www.instagram.com/ovraspolina?igsh=Ymh5MTJjbmx2Zncw&utm_source=qr' target="_blank">
                            <i className='fa fa-instagram'></i>
                        </a>
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
                                "Software Engineer",
                                1000,
                                "Talented Developer",
                                1000,
                                "FullStack Developer",
                                1000,
                                "Frontend Developer",
                                1000,
                                "React Dev",
                                1000,
                                "PHP Dev",
                                1000,
                            ]}

                            wrapper='p'
                            />

                            </h1>
                        </span>
                    </div>
                </div>


            </div>

        </div>
    );
}


export default Profile;
