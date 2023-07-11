import React from 'react';

//CSS
import classes from './Background.module.css';
//


const Background = (props) => {
    // let bgType = 'colour';
    let bgStyle = {background: '#fff'} //{background: 'linear-gradient(454deg, #4f4080, #9553ff)'};
    if (props.backgroundType === 'image') {
        bgStyle = {backgroundImage: `url(${props.backgroundImage})`}
    } else if(props.backgroundColour) {
        console.log(props.backgroundColour);
        bgStyle = {background: `${props.backgroundColour}`};
    }

    // let bgStyle = {background: `${props.backgroundColour}`};

    return (
        <div
            className={classes.Background}
            style={bgStyle}
        >
            {props.children}
        </div>
    )
}

export default Background;
