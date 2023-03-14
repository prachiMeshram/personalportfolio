import React from "react";
import './home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="text-container">
                <div className="text-box">
                    <div className="greet-text">Hi, I'm</div>
                    <div className="name-text">Prachi Kishor Meshram.</div>
                    <div className="one-sentence-text">I build things for the web.</div>
                    <div className="description-text"><p>I value clarity, empathy and integrity above all else. These ideals guide my approach to problem solving and life in general.</p></div>
                </div>
            </div>
            <div className="icon-container">
                <div className="icons"></div>
            </div>
            <div className="decoration-box">
                <div className="triangle-one"></div>
                <div className="triangle-two"></div>
            </div>
        </div>
    )
}

export default Home;