import React from 'react'
import { NavLink } from 'react-router-dom';
import classes  from './NavigationItem.module.css'

export default function navigationItem(props) {
    return (
        <li className={classes.NavigationItem}>
            <NavLink 
                to={props.link}>{props.children}
            </NavLink>
        </li>
    )
}
