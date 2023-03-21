import React from 'react';
import './contactUs.css'
import Button from '../../ulElements/button/button.js'

function ContactUs () {

    return (
        <div className='contactUs-container'>
            <div className='getInTouch-container'>
                <h3 className='text1'>Want to work together ?</h3>
                <h1 className='text2'>Let's Get In Touch</h1>
                <div className='image-wrapper'>
                    <div className='image-container'></div>
                </div>
            </div>
            <div className='contactForm-container'>
                <div className='name ques-container'>
                    <div className='name input-title'>Name</div>
                    <input className='name-input inputBox'></input>
                </div>
                <div className='email ques-container'>
                    <div className='email input-title'>Email</div>
                    <input className='email-input inputBox'></input>
                </div>
                <div className='message ques-container'>
                    <div className='message input-title'>Message</div>
                    <textarea className='message-input'></textarea>
                </div>
                <div className='button-container' >
                    <div className='sendMessage-button'>
                        <Button styledBorder={true} text={'Send Message'} type ={'solid'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;