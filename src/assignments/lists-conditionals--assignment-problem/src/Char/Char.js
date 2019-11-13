import React from 'react';

const char = props => {
    return (
        <div className="Char" onClick={props.clicked}>
            <p>{props.assignedLetter}</p>
        </div>
    )
}

export default char;