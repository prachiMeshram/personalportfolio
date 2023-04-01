import React from 'react';
import './porCard.css';

function PorCard ({POR, index}) {

    console.log("key: ", index)

    return (
        <div className= {`porCard-container ${index%2 == 0 ? "even" : "odd"}`}>
            <div className='leftCard-container'>
                <div className='position'>{POR.position}</div>
                <div className='image-container'>
                    <img className='image' src={POR.img}></img>
                </div>
            </div>
            <div className='rightCard-container'>
                <div className='organisation'>{POR.organisation}</div>
                <div className='text-container'>{POR.descrip}</div>
            </div>
        </div>
    )
}

export default PorCard;