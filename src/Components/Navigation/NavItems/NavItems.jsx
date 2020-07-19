import React from 'react';
import classes from './NavItems.module.css';
import NavItem from '../NavItem/NavItem';

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems} >
            <NavItem link="/" navShrink={props.navShrink}>Home</NavItem>
            <NavItem link="/orders"navShrink={props.navShrink}>Resumé</NavItem>
        </ul>
    );
};

export default NavigationItems;