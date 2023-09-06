import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            © {new Date().getFullYear()} Mickael Mallet. Tous droits réservés.
        </footer>
    );
}

export default Footer;
