import React from 'react';
import './Footer.css'; 

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} by Kerrtisy | Nstalgia Est. 2021.</p>
            </div>
        </footer>
    );
};

export default Footer;