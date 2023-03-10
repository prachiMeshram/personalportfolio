import React from "react";
import './decorationLine.css'

function DecorationLine ({position, text}) {
    return (
        <div className = {`container ${position}`} >
            <div className='line-element'></div>
            <div className='circle-element'></div>
            <div className='text-element'>{text}</div>
        </div>
    )
}

export default DecorationLine;
