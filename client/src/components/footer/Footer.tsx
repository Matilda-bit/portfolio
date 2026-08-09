import React from 'react';
import ScrollService from '../../utilities/ScrollService';

import './Footer.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="portfolio-footer">
            <div className="footer-inner">
                <div className="footer-identity">
                    <span className="footer-name">
                        Polina Wasserman
                    </span>

                    <span className="footer-role">
                        Full-Stack Developer
                    </span>
                </div>

                <div className="footer-meta">
                    <span>
                        Built with React & TypeScript
                    </span>

                    <span className="footer-dot">•</span>

                    <span>
                        © {currentYear} Polina Wasserman
                    </span>
                </div>

                <button
                    className="footer-scroll-top"
                    type="button"
                    aria-label="Back to top"
                    onClick={() =>
                        ScrollService.scrollHandler.scrollToHome()
                    }
                >
                    <i className="fa fa-arrow-up"></i>
                </button>
            </div>
        </footer>
    );
};

export default Footer;