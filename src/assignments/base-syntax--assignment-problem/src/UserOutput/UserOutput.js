import React from 'react';

const userOutput = props => {
    return (
        <div className="UserOutput mdc-card">
            <p>This is the first line of my user output component for {props.username}.</p>
            <p>There is another line in here somewhere, wait. Its me!</p>
        </div>
    );
}

export default userOutput;