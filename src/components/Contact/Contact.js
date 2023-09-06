import React from 'react';
import './Contact.css';
import GitIcon from '../../assets/GitIcon.svg';
import GmailIcon from '../../assets/GmailIcon.svg.png';
import LinkedinIcon from '../../assets/LinkedInIcon.svg.png';
import PhoneIcon from '../../assets/PhoneIcon.svg';
import CvIcon from '../../assets/CvIcon.svg';

const Contact = () => {
    return (
        <section id="contact-section" className="fullpage-section">
            <div className="contact-container">
                <h1 className="page-title">Contactez-moi !</h1>
                
                <div className="contact-items">
                    
                    <a href="/CvMallet.pdf" download="CvMallet.pdf" className="contact-item">
                        <img src={CvIcon} alt="Cv Icon" className="contact-icon" />
                        <span>Téléchargez mon CV</span>
                    </a>
                    
                    <a href="https://github.com/MickaelMallet" target="_blank" rel="noreferrer" className="contact-item">
                        <img src={GitIcon} alt="GitHub Icon" className="contact-icon" />
                        <span>Mon GitHub</span>
                    </a>          
                    
                    <a href="https://www.linkedin.com/in/micka%C3%ABl-m-64b772179/" target="_blank" rel="noreferrer" className="contact-item">
                        <img src={LinkedinIcon} alt="LinkedIn Icon" className="contact-icon" />
                        <span>Mon LinkedIn</span>
                    </a>
                    
                    <div className="contact-item">
                        <img src={PhoneIcon} alt="Phone Icon" className="contact-icon" />
                        <span>Téléphone: +33 6 60 83 59 85</span>
                    </div>
                    
                    <div className="contact-item">
                        <img src={GmailIcon} alt="Gmail Icon" className="contact-icon" />
                        <span>Email: mickaelmallet7@gmail.com</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;

