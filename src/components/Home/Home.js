import React, { useState, useEffect, useContext } from 'react';
import { DarkModeContext } from '../../DarkModeContext';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    const { darkMode } = useContext(DarkModeContext);
    
    const fullText = "Salut! Moi c'est Mika. Passionné par le développement web, je suis heureux de partager avec vous mes réalisations et mon parcours professionnel. N'hésitez pas à naviguer à travers les différentes sections pour en savoir plus sur moi et mes projets.";
    const [text, setText] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (charIndex < fullText.length) {
            setTimeout(() => {
                setText(text + fullText[charIndex]);
                setCharIndex(charIndex + 1);
            }, 25); 
        }
    }, [text, charIndex]);

    return (
        <div className={`main-container ${darkMode ? "dark-mode" : "light-mode"}`}>
            
            <Header />

            <section id="home-section" className="fullpage-section">
                <div className="intro-section">
                    <h1 className="page-title">Hey, Listen !</h1>
                    <p>{text}<span className="blinking-cursor">|</span></p>
                </div>
            </section>
            <section id="about-section" className="fullpage-section">
                <About />
            </section>
            <section id="projects-section" className="fullpage-section">
                <Projects />
            </section>
            <Footer />

        </div>
    );
}

export default Home;