import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
//CSS
import classes from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={classes.NavBar}>
            <div className={classes.NavBarMenu}>
                <NavLink
                    exact
                    to="/"
                    className={classes.NavBarMenuItem}
                >
                    Home
                </NavLink>

                <NavLink
                    exact
                    to="/test"
                    className={classes.NavBarMenuItem}
                >
                    TestPage
                </NavLink>
            </div>
        </div>
    )
}

export default withRouter(NavBar);
