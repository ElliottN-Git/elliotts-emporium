import React from 'react';
import classes from './ScrollChevron.module.css';

import chevronImage from '../../../assets/images/chevronSymbol.png';

const ScrollChevron = (props) => {
    return (
        <div className={classes.ScrollChevron}>
            <img src={chevronImage} alt=""/>
        </div>
    )
}

export default ScrollChevron;
