import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
//CSS
import classes from './NavBar.module.css';
import ENLogo from '../../assets/images/ThisWebsite/ENLogo.png'

const NavBar = (props) => {
    return (
        <div className={classes.NavBar} style={props.navShrink}>
            <img src={ENLogo} alt="EN"/>
            <div className={classes.NavBarMenu}>
                <NavLink
                    exact
                    to="/"
                    className={classes.NavBarMenuItem}
                    activeClassName={classes.ActiveNavBarMenuItem}
                >
                    Home
                </NavLink>

                <NavLink
                    exact
                    to="/resume"
                    className={classes.NavBarMenuItem}
                    activeClassName={classes.ActiveNavBarMenuItem}
                >
                    Resumé
                </NavLink>
            </div>
        </div>
    )
}

export default withRouter(NavBar);
