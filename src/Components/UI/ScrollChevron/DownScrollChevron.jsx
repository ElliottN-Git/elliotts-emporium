import React from 'react';
import classes from './DownScrollChevron.module.css';

import chevronImage from '../../../assets/images/chevronSymbol.png';

const DownScrollChevron = (props) => {
    return (
        <div 
            className={classes.DownScrollChevron}
            onClick={props.clicked} 
            style={props.style}>
            <img src={chevronImage} alt=""/>
        </div>
    )
}

export default DownScrollChevron;
