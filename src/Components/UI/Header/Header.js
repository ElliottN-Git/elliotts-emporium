//Component that holds the header image

import React from 'react';

//CSS
import classes from './Header.module.css';
//

//Components
//

//Image import
// import headerImg from '../../../assets/images/headerImgSpace.jpg';
//

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
    window.addEventListener('resize', () => {
// We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

const Header = (props) => {
    return (
        <div className={classes.Header}>
            {/* <img src={headerImg} alt=''/> */}
            {props.children}
        </div>
    )
}

export default Header;
