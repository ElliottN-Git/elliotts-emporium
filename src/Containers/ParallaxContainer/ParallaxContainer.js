import React from 'react';

import classes from './ParallaxContainer.module.css';

const ParallaxContainer = (props) => {
    return (
        <div className={classes.Parallaxcontainer}>
            {props.children}
        </div>
    )
}

export default ParallaxContainer;
