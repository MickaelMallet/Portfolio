import React, { useState, useEffect, useContext } from 'react';
import { DarkModeContext } from '../../DarkModeContext';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import './Home.css';

const Home = () => {
    const { darkMode } = useContext(DarkModeContext);
    
    const fullText = "Salut, je suis Mika. En plongeant dans le monde du développement web, j'ai découvert ma vocation pour le front-end. Fasciné depuis toujours par la culture web, ma curiosité et ma passion m'amènent à évoluer chaque jour. Explorez mon parcours et découvrez mes réalisations !";
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
                    <h1 className="page-title">Hello There</h1>
                    <p>{text}<span className="blinking-cursor">|</span></p>
                </div>
            </section>
            
            <section id="skills-section" className="fullpage-section">
                <div className="intro-section">
                    <Skills/>
                </div>

            </section>
            <section id="about-section" className="fullpage-section">
                <About />
            </section>
            <section id="projects-section" className="fullpage-section">
                <Projects />
            </section>
            <section id="contact-section" className="fullpage-section">
                <Contact />
            </section>
            <Footer />

        </div>
    );
}

export default Home;
