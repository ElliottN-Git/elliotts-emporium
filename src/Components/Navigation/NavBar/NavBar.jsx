import React from 'react';
import { withRouter } from 'react-router-dom';
//CSS
import classes from './NavBar.module.css';
import ENLogo from '../../../assets/images/ThisWebsite/ENLogo.png';
import NavItems from '../NavItems/NavItems';
import Dropdown from '../../UI/Dropdown/Dropdown';

//TODO add in nav bar collapse for mobile

const NavBar = (props) => {
    return (
        <div className={classes.NavBar} style={props.navShrink}>
            <a href='/'>
                <img src={ENLogo} alt="EN" /> {/* Add link to home */}
            </a>
            <Dropdown navShrink={props.navShrink} />
            <NavItems navShrink={props.navShrink} />
        </div>
    )
}

export default withRouter(NavBar);
