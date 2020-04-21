import React from 'react';

//CSS
import classes from './Background.module.css';
//

const Background = (props) => {
    return (
        <div className={classes.Background}>
            {props.children}
        </div>
    )
}

export default Background;
