import React from "react";
import "../css/skill.css";

function Skills() {
    return (
        <div className="skills-container">
            <h1 className="skills-title">Skills</h1>

            <div className="skills-section">
                <h2 className='skills-space'>Programming Skills</h2>
                <div className="skills-grid">
                    <img src="/c image.png" alt="C" />
                    <img src="/java.svg" alt="Java" />
                </div>
            </div>

            <div className="skills-section">
                <h2 className='skills-space'>Web Technology</h2>
                <div className="skills-grid">
                    <img src="/html.webp" alt="HTML" />
                    <img src="/css.svg" alt="CSS" />
                    <img src="/javascript.png" alt="JavaScript" />
                    <img src="/react.webp" alt="React" />
                    <img src="/nodejs.webp" alt="Node.js" />
                </div>
            </div>
        </div>
    );
}

export default Skills;
