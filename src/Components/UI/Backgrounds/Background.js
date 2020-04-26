import React from 'react';

//CSS
import classes from './Background.module.css';
//


const Background = (props) => {
    const backgroundImage = props.backgroundImage
    // const backgroundStyle = {
    //     backgroundImage: `url(${backgroundImage})`,
    // }

    return (
        <div className={classes.Background} style={{backgroundImage: `url(${backgroundImage})`}}>
            {props.children}
        </div>
    )
}

export default Background;
