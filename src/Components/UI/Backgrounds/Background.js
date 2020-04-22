import React from 'react';

//CSS
import classes from './Background.module.css';
//

const Background = (props) => {
    console.log(props.viewPortHeight);
    return (
        <div className={classes.Background} >
            {props.children}
        </div>
    )
}

// style={{ height: `${props.viewPortHeight}px` }}

export default Background;
