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
        <div className={classes.Header} >
            <h1>Hi! I'm Elliott.</h1>
            {props.children}
        </div>
    )
}
// style={{ height: `${props.viewPortHeight}px` }}

export default Header;