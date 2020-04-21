import React from 'react';

//CSS
import classes from './Background.module.css';
//

const Background = (props) => {
    return (
        <div className={classes.Background} style={{ height: `${props.viewPortHeight}` }}>
            {props.children}
        </div>
    )
}

export default Background;
