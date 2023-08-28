//Modules
import React from 'react';
// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import { useInView } from "react-intersection-observer";

//CSS
import classes from './ProjectCard.module.css';

//Assets


//Components
import Aux from '../../../hoc/Auxillary/Auxillary';
// import Background from '../Background/Background';

const ProjectCard = (props) => {

    //Using framer-motion and some hooks we can define which element is considered the in-view start...
    //...trigger for the animation: https://egghead.io/blog/how-to-animate-elements-when-in-view-on-scroll-with-framer-motion
    //This has been moved to 
    // const controls = useAnimation();
    // const [soloRef, inView] = useInView();

    // useEffect(() => {
    //     if (inView) {
    //         controls.start("onscreen");
    //     }
    // }, [controls, inView]);

    // let img;
    let cardImageElement;
    try {
        // img = require(`../../../assets/images/${props.cardImage}`);
        cardImageElement = (<img src={require(`../../../assets/images/${props.cardImage}`)} alt=''></img>);
    } catch {
        cardImageElement = '';
    }


    let layout = <motion.div className={classes.ProjectCard}
        animate={props.controls}
        variants={props.cardVariants}
        initial={props.cardVariants.offscreen}
            // whileInView={props.cardVariants.onscreen}
            // viewport={{ root: props.scrollRef }}
            // viewport={{ once: true }}
    >
        <h3>{props.text}</h3>
        {cardImageElement}
    </motion.div>

    if(props.link !== '') {
        layout = <Link to={props.link} className={classes.ProjectLink}>{layout}</Link>
    }
    
    return (
        <Aux>
            {layout}
        </Aux>
    )
}

export default ProjectCard;