import React from 'react';

//CSS
import classes from './AboutMe.module.css';
//Components
import Aux from '../../hoc/Auxillary/Auxillary';


const AboutMe = (props) => {
    return (
        <Aux>
            <div className={classes.Container}>
                {props.children}
                <div className={classes.AboutMe} style={props.srolledTo}>
                    <h1>About Me</h1>
                    <p>I'm an enthusiastic and highly motivated individual seeking a challenging new career after four years in the chemistry industry. Working in this field has developed my attention to detail and analytical ability when faced with complex tasks and customer requirements. I now want to use these skills in a new field by shifting into software development. To kick-start this career move, I have completed a Postgraduate Certificate in Information Technology which covered software and web development using Java, Javascript, NodeJs, SQL and more. I have also completed an online course to learn React, which I used to build this website. <br></br>
                I am eager to build upon this knowledge by entering the industry as a junior developer.</p>
                </div>
            </div>
        </Aux>
    )
}

export default AboutMe;
