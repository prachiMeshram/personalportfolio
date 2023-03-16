import React from 'react'
import './card.css'


function Card ({cardObj}) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img className='image' src= {cardObj.image}></img>
            </div>
            <div className='text'>
                <p className='position'>{cardObj.position}</p>
                <p className='organisation'>{cardObj.org}</p>
            </div>
        </div>
    )
}

export default Card;