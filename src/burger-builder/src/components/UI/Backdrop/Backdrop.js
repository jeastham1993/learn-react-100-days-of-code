import React from 'react'
import classes from './Backdrop.module.css';

export default function backdrop(props) {
    let response = null;

    if (props.show)
    {
        response = <div className={classes.Backdrop} onClick={props.clicked}></div>
    }        
    return (response)
}
