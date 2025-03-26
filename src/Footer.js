import React from 'react';
import './styles/Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="footer-content">
                <div className="social-links">
                    <a 
                        href="https://github.com/badal9966" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title="GitHub"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/badal-sahu-51b419330/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title="LinkedIn"
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a 
                        href="https://instagram.com/666.badal" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title="Instagram"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
                <p>&copy; {currentYear} Badal Sahu. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer; 