import React from 'react';
import { withRouter } from 'react-router-dom';
//CSS
import classes from './NavBar.module.css';
import ENLogo from '../../../assets/images/ThisWebsite/ENLogo.png';
import NavItems from '../NavItems/NavItems';

//TODO add in nav bar collapse for mobile

const NavBar = (props) => {
    return (
        <div className={classes.NavBar} style={props.navShrink}>
            <img src={ENLogo} alt="EN"/>
                <NavItems />
        </div>
    )
}

export default withRouter(NavBar);
