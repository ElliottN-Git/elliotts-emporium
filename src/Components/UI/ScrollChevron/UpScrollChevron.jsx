import React from 'react';
import classes from './UpScrollChevron.module.css';

import chevronImage from '../../../assets/images/chevronSymbol.png';

const UpScrollChevron = (props) => {
    return (
        <div 
            className={classes.UpScrollChevron}
            onClick={props.clicked} 
            style={props.style}>
            <img src={chevronImage} alt=""/>
        </div>
    )
}

export default UpScrollChevron;
