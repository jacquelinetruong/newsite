import React from "react";
import glimmerIcon from '../assets/glimmer.svg';
import '../styles/Projects.css';

function Projects() {
    return (
        <>
            <div className="spacer" />
            <div className="gallery">
                <div className="projects-section">
                    <div className="title-card">
                        <h1>PROJECTS</h1>
                        <img className="decor-icon" src={glimmerIcon} alt="Glimmer Decoration" />
                        <h1>I'M PROUD OF</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="project-1">
                        <p>project1</p>
                    </div>
                    <div className="project-2">
                        <p>project2</p>
                    </div>
                    <div className="project-3">
                        <p>project3</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects