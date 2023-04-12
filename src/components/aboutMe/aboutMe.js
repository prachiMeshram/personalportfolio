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
                        Hello! My name is Prachi and I enjoy creating things that live on the internet. I am a third year undergrad, pursuing my B. Tech degree in Chemical Engineering at IIT Madras.
                    </p>
                    <p>
                        My identity is not based on my past accomplishments, but rather on my aspirations for the future. I believe that while skills can be learned, personality is innate. Therefore, I am constantly seeking opportunities to learn, grow, and engage in meaningful activities.
                        My boundless enthusiasm and high energy levels inspire me to explore my interests and passions without hesitation. As a multi-talented individual, I possess a natural ability to entertain and motivate others. I am not content with simply generating ideas; I have an almost compulsive urge to act on them.
                        With my abundance of energy, I pursue various interests, hobbies, and artistic endeavors. I have a quick learning ability, allowing me to acquire new skills and effectively manage different projects and roles. Over the course of my life and career, I strive to become an expert in numerous fields.
                        As a people-oriented individual with deep emotions and empathy, I have a natural talent for storytelling. I find fulfillment in sharing my creative expressions with others and inspiring them to reach their full potential.
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
