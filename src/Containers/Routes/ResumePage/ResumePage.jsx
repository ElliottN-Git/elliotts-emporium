import React, { Component } from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import classes from './ResumePage.module.css';

import resumeImg from '../../../assets/images/Elliott Nixon - CV-1.jpg';

export class ResumePage extends Component {
    render() {
        return (
            <Aux>
                <div className={classes.ResumePage}>
                    <img src={resumeImg} alt=""/>
                </div>
            </Aux>
        )
    }
}

export default ResumePage;
