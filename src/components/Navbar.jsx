import React from "react";
import emailIcon from "../assets/email.svg";
import linkedinLogo from "../assets/linkedin.svg";
import githubLogo from "../assets/github.svg";
import "../styles/Navbar.css";

function Navbar() {
    const linkedinLink = "https://www.linkedin.com/in/jacquellinetruong/";
    const githubLink = "https://github.com/jacquelinetruong";

    return (
        <div className="navbar">
            <div className="nav-pages">
                <a className="site-title" href="#">PORTFOLIO SITE</a>
                <a className="nav-item" href="#">Projects</a>
                <a className="nav-item" href="#">Experience</a>
                <a className="nav-item" href="#">Resume</a>
            </div>
            <div className="nav-socials">
                <a href="url">
                    <img src={emailIcon} alt="Email Me!"></img>
                </a>
                <a href={linkedinLink} target="_blank">
                    <img src={linkedinLogo} alt="Email Me!"></img>
                </a>
                <a href={githubLink} target="_blank">
                    <img src={githubLogo} alt="Email Me!"></img>
                </a>
            </div>
        </div>
    );
}

export default Navbar;