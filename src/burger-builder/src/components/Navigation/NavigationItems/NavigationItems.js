import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem';

export default function navigationItems() {
    return (
        <ul class="right" id="nav-mobile">
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem link="/orders">My Orders</NavigationItem>
        </ul>
    )
}
