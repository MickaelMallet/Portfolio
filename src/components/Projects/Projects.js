import React, { useState } from 'react';
import LogoReadOrNot from '../../assets/LogoReadOrNot.png';
import LogoTwitch from '../../assets/LogoTwitch.png';
import LogoUnsplash from '../../assets/LogoUnsplash.png';
import ReactLogo from '../../assets/ReactLogo.svg';  
import SassLogo from '../../assets/SassLogo.svg';    
import JsLogo from '../../assets/JsLogo.svg'; 
import TailwindLogo from '../../assets/TailwindLogo.svg';
import NextjsLogo from '../../assets/NextjsLogo.svg';
import HeadlessLogo from '../../assets/HeadlessLogo.png';
import CssLogo from '../../assets/CssLogo.png';
import HtmlLogo from '../../assets/HtmlLogo.png';
import NodeLogo from '../../assets/NodeLogo.svg';
import SpockLogo from '../../assets/SpockLogo.jpg';
import './Projects.css';

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);

    const projectList = [
        {
            title: "Read'or'Not",
            logo: LogoReadOrNot,
            description: "Une application de gestion de livres pour les passionnés de lecture permettant de suivre les livres lus, de les recommander, de les trouver ou de les acheter, et plus encore. Développée avec React et Node.js et intégrant des API telles que data.bnf.fr et Gallica. Conçue pour aider les lecteurs à gérer et suivre leur bibliothèque numérique.",
            linkSite: "https://readornot.netlify.app/",
            linkFront: "https://github.com/O-clock-Moai/projet-15-read-or-not-front",
            linkBack: "https://github.com/MickaelMallet/ReadOrNot-Backend",
            technologies: [ReactLogo, SassLogo, JsLogo, NodeLogo],
            members: [" Whitney Toniolo ", " Jean-Marie Lapernat ", " Kilian Thoraval ", " Mickael Mallet "]
        },
        {
            title: "Twitch Clone",
            logo: LogoTwitch,
            description: "Un clone de Twitch réalisé comme une introduction à certaines technologies que je souhaitais explorer. Il m'a permis de me familiariser avec des outils tels que Next.js, Tailwind.css, NextAuth, React-Icons et HeadlessUI.",  
            linkRepo: "https://github.com/MickaelMallet/Twitch-clone",
            technologies: [TailwindLogo, NextjsLogo, HeadlessLogo],
        },
        {
            title: "Infinite Scroll",
            logo: LogoUnsplash,
            description: "L'app récupère des images depuis l'API Unsplash et crée un effet de défilement infini. Chaque fois qu'un utilisateur arrive à la fin temporaire du document, de nouvelles images sont récupérées. Un projet modifié issu du cours 'JavaScript Web Projects: 20 Projects to Build Your Portfolio', par ZTM.",
            technologies: [HtmlLogo, CssLogo, JsLogo],
            linkRepo: "https://github.com/MickaelMallet/Infinity-Scroll",
        },
        {
            title: "Pierre Feuille Ciseaux Lézard Spock",
            logo: SpockLogo,
            description: "Bienvenue dans le jeu Pierre Feuille Ciseaux Lézard Spock ! Ce jeu est une extension du jeu classique Pierre-Papier-Ciseaux, popularisé par la série télévisée 'The Big Bang Theory'. Le jeu introduit deux nouvelles options : Lézard et Spock, offrant des combinaisons de jeu encore plus intrigantes.",
            rules: [
                "Pierre bat Ciseaux et Lézard",
                "Feuille bat Pierre et Spock",
                "Ciseaux battent Feuille et Lézard",
                "Lézard bat Spock et Feuille",
                "Spock bat Ciseaux et Pierre"
            ],
            technologies: [HtmlLogo, CssLogo, JsLogo],
            linkRepo: "https://github.com/MickaelMallet/Pierre-Feuille-Spock", 
        },

    ];

    const handleOpenModal = (project) => {
        setActiveProject(project);
    };

    const handleCloseModal = () => {
        setActiveProject(null);
    };


    return (
        <div className="projects-container" id="projects-section">
            <h1 className="page-title">Mes Projets</h1>
            <div className="project-list">
                {projectList.map((project, index) => (
                    <div key={index} className="project-item">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div className="tech-logos">
                            {project.technologies && project.technologies.map((TechLogo, techIndex) => (
                                <img key={techIndex} src={TechLogo} alt="Technology Logo" className="tech-logo"/>
                            ))}
                        </div>
                        <button onClick={() => handleOpenModal(project)}>Voir le projet</button>
                    </div>
                ))}
            </div>

            {activeProject && (
    <div className="project-modal" onClick={handleCloseModal}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>{activeProject.title}</h2>
            <p>{activeProject.description}</p>

            {activeProject.title === "Pierre Feuille Ciseaux Lézard Spock" && (
                <div className="game-rules">
                    <h3>Règles du jeu</h3>
                    <ul>
                        {activeProject.rules.map((rule, index) => (
                            <li key={index}>{rule}</li>
                        ))}
                    </ul>
                </div>
            )}
            
            {activeProject.logo && <img src={activeProject.logo} alt={activeProject.title} />}

            <div className="project-links">
                {activeProject.linkSite && 
                    <a href={activeProject.linkSite} target="_blank" rel="noopener noreferrer">Site</a>
                }
                {activeProject.linkFront && 
                    <a href={activeProject.linkFront} target="_blank" rel="noopener noreferrer">Front Repo</a>
                }
                {activeProject.linkBack && 
                    <a href={activeProject.linkBack} target="_blank" rel="noopener noreferrer">Back Repo</a>
                }
                {activeProject.linkRepo && 
                    <a href={activeProject.linkRepo} target="_blank" rel="noopener noreferrer">Repo</a>
                }
            </div>
        </div>
    </div>
)}
        </div>
    );
}

export default Projects;