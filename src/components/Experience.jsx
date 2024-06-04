import React from "react";
import ExperienceCard from "./ExperienceCard";
import lcsLogo from "../assets/lcs.svg";
import hhLogo from "../assets/hawkhacks.svg";
import ccLogo from "../assets/civiconnect.svg";
import glimmerIcon from "../assets/glimmer.svg";
import '../styles/Experience.css';

function Experience() {
    return (
        <>
            <div className="spacer" />
            <h1 id="experience">MY EXPERIENCE &darr;</h1>
            <ExperienceCard 
                company="Civiconnect"
                position="UI/UX Designer"
                startdate="May 2024"
                enddate="Present"
                image={ccLogo}
                description="Oversaw creation of 5 team project website prototypes, curated design components for each team."
                tag="Internship"
            />
            <hr className='divider' />
            <ExperienceCard 
                company="Laurier Computing Society"
                position="President"
                startdate="May 2023"
                enddate="Present"
                image={lcsLogo}
                description="Responsible for leading departments involved with communications, corporate outreach, finance, events, and marketing, with a team size of 52 executives, and a community of 3000+ students."
                tag="Extracurricular"
            />
            <hr className='divider' />
            <ExperienceCard 
                company="HawkHacks"
                position="Vice President of design operations"
                startdate="August 2023"
                enddate="Present"
                image={hhLogo}
                description="Led a team of 4 to design, prototype, and develop assets for HawkHacks site and portal in Figma. Simplified marketing work by using a design system to ensure components were consistent and reusable across media."
                tag="Extracurricular"
            />
            <hr className='divider' />
            <div className="glimmer-decor">
                <img src={glimmerIcon} alt="Glimmer Icon" />
                <img src={glimmerIcon} alt="Glimmer Icon" />
                <img src={glimmerIcon} alt="Glimmer Icon" />
            </div>
        </>
    )
}

export default Experience;