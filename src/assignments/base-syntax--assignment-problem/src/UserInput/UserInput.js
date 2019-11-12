import React from 'react';

const userInput = props => {
    return (
        <div className="UserInput">
            <div className="mdc-text-field">
                <input type="text" value={props.name} onChange={props.changed} className="mdc-text-field__input"/>
                <div className="mdc-line-ripple"></div>
            </div>
        </div>
    )
}

export default userInput;