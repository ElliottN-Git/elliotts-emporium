//Component that holds the header image

import React from 'react';

//CSS
import classes from './Header.module.css';

import headShot from '../../../assets/images/EN-headshotCircle.png';

//Components


const Header = (props) => {
    return (
        <div className={classes.Header}>
            <img src={headShot} alt="Headshot" /> {/* Placeholder image */}
            <h1>Hi! I'm Elliott.</h1>
            {props.children}
        </div>
    )
}

export default Header;