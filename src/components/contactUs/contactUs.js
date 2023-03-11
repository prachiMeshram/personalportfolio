import React from 'react';
import './contactUs.css'
import Button from '../../ulElements/button/button.js'

function ContactUs () {

    return (
        <div className='contactUs-container'>
            <div className='getInTouch-container'>
                <h3 className='text1'>Want to work together ?</h3>
                <h1 className='text2'>Let's Get In Touch</h1>
                <div className='image-container'></div>
            </div>
            <div className='contactForm-container'>
                <div className='name-container'>
                    <div className='name'>Name</div>
                    <div className='name-input'></div>
                </div>
                <div className='email-container'>
                    <div className='email'>Email</div>
                    <div className='email-input'></div>
                </div>
                <div className='message-container'>
                    <div className='message'>Message</div>
                    <div className='message-input'></div>
                </div>
                <div className='sendMessage-button'>
                    <Button styledBorder={true} text={'Send Message'} type ={'solid'} />
                </div>
            </div>
        </div>
    )
}

export default ContactUs;