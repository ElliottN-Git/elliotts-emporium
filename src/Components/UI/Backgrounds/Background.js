import React from 'react';

//CSS
import classes from './Background.module.css';
//

const Background = (props) => {
    console.log(props.viewPortHeight);
    return (
        <div className={classes.Background} style={{ height: `${props.viewPortHeight}px` }}>
            {props.children}
        </div>
    )
}

export default Background;
