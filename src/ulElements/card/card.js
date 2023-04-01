import React, {useState} from 'react'
import './card.css'


function Card ({cardObj}) {

    const [isCardOpen, setCardOpen] = useState(false);

    return (
        <div className='card-container' onClick={()=>{setCardOpen(!isCardOpen); console.log("Full Screen true")}}>
            <div className='image-container'>
                <img className='image' src= {cardObj.image}></img>
            </div>
            <div className='text'>
                <p className='position'>{cardObj.position}</p>
                <p className='organisation'>{cardObj.org}</p>
            </div>

            {
                isCardOpen ? 
                <div className='fullscreen-card'>
                    
               </div> : null
            }
        </div>
    )
}

export default Card;