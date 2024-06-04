import React from "react";
import starIcon from '../assets/star.svg';
import '../styles/ExperienceCard.css';

export default function ExperienceCard({company, position, startdate, enddate, image, description, tag}) {

    return (
            <div className="experience-card">
                <div className="header">
                    <div className="experience-title">
                        <p className="company">{company}</p>
                        <p>&rarr;</p>
                        <p className="position">{position}</p>
                    </div>
                    <div className="experience-date">
                        <img src={starIcon} alt="Star Icon" />
                        <p className="startdate">{startdate}</p>
                        <p>&rarr;</p>
                        <p className="enddate">{enddate}</p>
                    </div>
                </div>
                <div className="experience-content">
                    <img src={image} alt="Company Logo" />
                    <div className="experience-details">
                        <a className="tag">{tag}</a>
                        <p>{description}</p>
                    </div>
                </div>
                
            </div>
    
            
    )
}