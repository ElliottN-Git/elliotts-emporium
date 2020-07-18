import React from 'react';
import classes from './NavItems.module.css';
import NavItem from '../NavItem/NavItem';

const NavigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavItem link="/" >Home</NavItem>
            <NavItem link="/orders">Resumé</NavItem>
        </ul>
    );
};

export default NavigationItems;