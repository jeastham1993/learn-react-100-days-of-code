import React from 'react'

import classes from './BuildControl.module.css'
export default function buildControl( props ) {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button class="waves-effect waves-light btn" onClick={props.removed}>Less</button>
            <button class="waves-effect waves-light btn" onClick={props.added}>More</button>
        </div>
    )
}
