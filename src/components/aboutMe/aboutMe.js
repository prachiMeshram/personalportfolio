import React from 'react';
import './aboutMe.css';
import Button from '../../ulElements/button/button.js'
import ProfilePic from '../../assets/Prachiclear.jpeg'
import Header from '../../ulElements/header/header';

function AboutMe() {
    return (
        <div className='aboutMe-container'>
            <Header heading = {'ABOUT ME'} />
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
                    <div className='image-container'><img className='image' src= {ProfilePic} ></img></div>
                    <div className='education-button'>
                        <Button styledBorder={true} text={'EDUCATION'} type ={'solid'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
