import React from 'react';
import './header.css'

function Header ({heading}){
    return (
        <div className='header-container'>
            <div className='heading-text'><h2>{heading}</h2></div>
            <div className='horizontal-line'>
                <div className='circle-element'></div>
                <div className='line-element'></div>
                <div className='triangle-element'></div>
            </div>
        </div>
    )
}

export default Header;