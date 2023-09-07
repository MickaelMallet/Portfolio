import React from 'react';
import './Skills.css';
import HtmlLogo from '../../assets/HtmlLogo.png';
import CssLogo from '../../assets/CssLogo.png';
import JsLogo from '../../assets/JsLogo.svg';
import ReactLogo from '../../assets/ReactLogo.svg';
import NodeLogo from '../../assets/NodeLogo.svg';
import FigmaLogo from '../../assets/FigmaLogo.png';
import TailwindLogo from '../../assets/TailwindLogo.svg';
import PsqlLogo from '../../assets/PsqlLogo.png';

function Skills() {
    const skillsData = [
        { name: 'HTML', level: 0.90, icon: HtmlLogo },
        { name: 'CSS', level: 0.90, icon: CssLogo },
        { name: 'JavaScript', level: 0.70, icon: JsLogo },
        { name: 'React', level: 0.70, icon: ReactLogo },
        { name: 'NodeJS', level: 0.60, icon: NodeLogo },
        { name: 'PSQL', level: 0.60, icon: PsqlLogo },
        { name: 'Tailwind', level: 0.50, icon: TailwindLogo },
        { name: 'Figma', level: 0.90, icon: FigmaLogo },
        
    ];

    return (
        
        <div className="skills-grid">
{skillsData.map((skill, index) => (
    <div key={index} className="skill-container">
        <svg viewBox="0 0 72 72" className="circular-chart">
            <path className="circle-bg"
                d="M36 4.169
                a 31.831 31.831 0 0 1 0 63.662
                a 31.831 31.831 0 0 1 0 -63.662"
            />
            <path className="circle"
                strokeDasharray={`${skill.level * 200}, 200`}
                d="M36 4.169
                a 31.831 31.831 0 0 1 0 63.662
                a 31.831 31.831 0 0 1 0 -63.662"
            />
            <image href={skill.icon} x="19" y="18" height="35px" width="35px" />
        </svg>
        <p>{skill.name}</p>
    </div>
            ))}
        </div>
    );
}

export default Skills;
