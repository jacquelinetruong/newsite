import React from "react";
import arrow from "../assets/whitearrow.svg";
import spike from "../assets/spike.svg";
import '../styles/LearnMore.css';

function LearnMore () {
    return (
        <div className="learn-more">
            <h1 id="learn">Oh - you want to learn more?</h1>
            <p className="bold">Check out these links below!</p>
            <div className="learn-content">
                <div className="left">
                    <div className="arrow">
                        <img src={arrow} alt="arrow" />
                    </div>
                    <div className="learn-links">
                        <a href="#" target="_blank">More about me &rarr;</a>
                        <a href="#" target="_blank">Resume &rarr;</a>
                        <a href="#" target="_blank">Read.cv &rarr;</a>
                    </div>
                </div>
                <div className="right">
                    <div className="spike">
                        <img src={spike} alt="spike" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearnMore