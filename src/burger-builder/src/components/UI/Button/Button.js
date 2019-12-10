import React from 'react'

import classes from './Button.module.css';

export default function button(props) {
    const classesArray = [classes.Button, 'btn', 'waves-effect', 'waves-light'];

    if (props.btnType === 'Failure') {
        classesArray.push('red');
    }

    return (
        <button class={classesArray.join(' ')}
            onClick={props.clicked}>{props.children}</button>
    )
}
