import React from 'react';
import classes from './NavItem.module.css';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => {
    let style = props.navShrink ? {backgroundColor: "rgba(200, 200, 200, 1)", height: "30px"} : null;
    return (
        <li className={classes.NavItem} style={style}>
            <NavLink
                to={props.link}
                exact
                activeClassName={classes.active}>
                {props.children}
            </NavLink>
        </li>
    );
}

export default NavigationItem;