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
const Header = (props) => {
    return (
        <div className={classes.Header}>
            {/* <img src={headerImg} alt=''/> */}
            {props.children}
        </div>
    )
}

export default Header;
