//Component that holds the header image

import React from 'react';

//CSS
import classes from './Header.module.css';
//

//Components
//

//Image import
import headerImg from '../../../assets/images/headerImgSpace.jpg';
//
const Header = () => {
    return (
        <div className={classes.Header}>
            <img src={headerImg} alt=''/>
        </div>
    )
}

export default Header;
