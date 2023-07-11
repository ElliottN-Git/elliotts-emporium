import React, { Component } from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import classes from './ResumePage.module.css';

//import resumeImg from '../../../assets/images/Elliott Nixon - CV-1.jpg';

const resumeLink = 'https://firebasestorage.googleapis.com/v0/b/elliotts-emporium.appspot.com/o/Elliott%20Nixon%20-%20CV.pdf?alt=media&token=dda90261-ea39-40dc-97a8-bf2f45f7baa8'

export class ResumePage extends Component {
    render() {
        return (
            <Aux>
                <div className={classes.ResumePage} >
                    {/* <img src={resumeImg} alt=""/> */}
                    <iframe src={resumeLink} title="Resumé PDF"></iframe>
                </div>
            </Aux>
        )
    }
}

export default ResumePage;
