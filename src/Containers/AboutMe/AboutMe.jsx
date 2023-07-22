import React from 'react';


//CSS
import classes from './AboutMe.module.css';
//Components
import Aux from '../../hoc/Auxillary/Auxillary';


//TODO:
// - Animate the divs to pop in on scroll
// - Update the animation on the dashboard items to 'jiggle'

const AboutMe = (props) => {
    return (
        <Aux>
            <div className={classes.Container}>
                {props.children}
                <div className={classes.AboutMe} style={props.srolledTo}>
                <div className={classes.AboutMeOverflowContainer}>

                    <h1>About Me</h1>
                        <p>Hi there! If you're reading this I can only assume that you want to know a little bit more about me...
                            <br></br>
                            <b><u>Career:</u></b>
                            <br></br>
                            In my most recent position at a prominent Asia-Pacific scientific analytical services company
                            based in New Zealand, I held the role of Application Support Analyst. In this capacity, my
                            primary focus was on developing modifications for the information management system
                            used in laboratories. Through this experience, I gained valuable insights into effective
                            teamwork, employing a Kanban workflow to collaborate with my colleagues. A key aspect of
                            my role involved managing stakeholders and ensuring clear communication, as I was
                            responsible for gathering user requirements and devising and implementing technically
                            proficient solutions that also enhanced user experience. An example of a system enhancement that I created was a taxonomic hierarchy to store scientific naming data for insects, plants and diseases.
                            <br></br>
                            I have web development experience from studying Information Technology at the University
                            of Auckland. Here I gained knowledge in Java, Javascript, Node.js, Express, SQL, HTML and
                            CSS. This course also gave me experience with team development of web-applications using
                            programming workflows and Git repositories for source code version-control.
                            Additionally, I have experience with modern frontend frameworks such as React, Redux and
                            React Native which I acquired through personal projects and online courses.
                            <br></br></p>
                        {/* I am eager to build upon this knowledge by entering the industry as a front end developer.</p> */}
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default AboutMe;
