import React from 'react';
import './educationElem.css'

function EducationElem ({education, index}) {
    return (
        <div className= {`content-container ${index === 2 ? 'last' : ""}`}>
            <div className='year'>
                {education.year}
            </div>
            <div className='institute'>
                {education.institute}
            </div>
            <div className='description'>
                {education.description}
            </div>
        </div>
    )
}

export default EducationElem;