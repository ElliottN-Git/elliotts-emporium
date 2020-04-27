//Component that holds the header image

import React from 'react';

//CSS
import classes from './Header.module.css';
//

//Components
//

const Header = (props) => {
    return (
        <div className={classes.Header} >
            <h1>Hi! I'm Elliott.</h1>
            {props.children}
        </div>
    )
}

export default Header;