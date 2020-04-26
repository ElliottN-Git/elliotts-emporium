import React from 'react';
import classes from './ScrollChevron.module.css';

import chevronImage from '../../../assets/images/chevronSymbol.png';

const ScrollChevron = (props) => {
    return (
        <div 
            className={classes.ScrollChevron}
            onClick={props.clicked} 
            style={{
                opacity: props.show 
                    ? '1' 
                    : '-10', 
                animationPlayState: props.show
                    ? 'initial'
                    : 'paused'
            }}>
            <img src={chevronImage} alt=""/>
        </div>
    )
}

export default ScrollChevron;
