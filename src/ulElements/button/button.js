import React from 'react';
import './button.css'

function Button ({text,onClick,type,styledBorder}) {
    return (
        <div className = {`button ${type} ${styledBorder ? 'styled' : ''}` } onClick={onClick}>
            {text}
        </div>
    );
}

export default Button;