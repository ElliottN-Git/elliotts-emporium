import React from 'react';

//CSS
import classes from './Background.module.css';
//


const Background = (props) => {
    return (
        <div className={classes.Background} style={{backgroundImage: `url(${props.backgroundImage})`}}>
            {props.children}
        </div>
    )
}

export default Background;
