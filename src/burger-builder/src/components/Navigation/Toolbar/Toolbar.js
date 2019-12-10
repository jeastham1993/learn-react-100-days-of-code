import React from 'react'

import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

export default function toolbar(props) {
    return (
        <header className={classes.Toolbar}>
            <nav className={classes.MobileOnly}>
                <div class="nav-wrapper">
                    <div onClick={props.sideDrawerStateHandler}>MENU</div>
                </div>
            </nav>
            <nav className={classes.DesktopOnly}>
                <div class="nav-wrapper">
                <a href="/" class="brand-logo">Burger Builder</a>
                    <NavigationItems/>
                </div>
            </nav>
        </header> 
    )
}

