import React from 'react';
import './aboutMe.css';

function AboutMe() {
    return (
        <div className='aboutMe-container'>
            <div className='header-container'>
                <div className='heading-text'><h2>ABOUT ME</h2></div>
                <div className='horizontal-line'>
                    <div className='circle-element'></div>
                    <div className='line-element'></div>
                    <div className='triangle-element'></div>
                </div>
            </div>
            <div className='text-image-button-container'>
                <div className='aboutMe-text'>
                    <p>
                        Hello! My name is Prachi and I enjoy creating things that live on the internet.I am a third year undergrad, pursuing my B. Tech degree in Chemical Engineering at IIT Madras.
                    </p>
                    <p>
                        I’m a very outgoing and curious person, who’s passionate about coding, reading, designing, and music. I love to stare at a not-so-bright screen while coding in a constant state of flow
                        I have worked with React js, React Native, HTML, CSS, JavaScript, and also love to new technologies.
                    </p>
                </div>
                <div className='image-button-container'>
                    <div className='image'></div>
                    <div className='Education-button'></div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
