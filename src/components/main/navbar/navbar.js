import React from 'react';
import Button from '../../../ulElements/button/button';
import './navbar.css'

function Navbar() {
    return (
        <div className='navbar-container'>
           <div className='navbar-element home active' >Home</div> 
           <div className='navbar-element aboutme'>About</div> 
           <div className='navbar-element projects'>Projects</div> 
           <div className='navbar-element experience'>Experience</div> 
           <div className='navbar-element contact'>Contact</div> 
           <a className='resume' href='https://drive.google.com/file/d/1l11ZCR5RHh2h0BNAqrSGGZsj3e7pH7Av/view' target = '_blank'>
                <Button onClick={()=>{}} text = {'Resume'}>

                </Button>
           </a> 
        </div>
    )
}

export default Navbar;