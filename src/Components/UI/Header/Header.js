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
    console.log(props.viewPortHeight);
    return (
        <div className={classes.Header} >
            {/* <img src={headerImg} alt=''/> */}
            {props.children}
        </div>
    )
}
// style={{ height: `${props.viewPortHeight}px` }}

export default Header;