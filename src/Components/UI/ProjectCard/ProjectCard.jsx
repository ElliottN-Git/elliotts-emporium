//Modules
import React from 'react';
// import { useEffect } from 'react';
import { motion } from 'framer-motion';
// import { useInView } from "react-intersection-observer";

//CSS
import classes from './ProjectCard.module.css';

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


    return (
        <Aux>
            {/* <div ref={soloRef} style={{background: 'black', position: 'relative', height: '100px', width: '100px', top: '500px'}}></div>
            <div className={classes.CardScrollViewRef} /*ref={soloRef}> */}
            <motion.div className={classes.ProjectCard}
                animate={props.controls}
                variants={props.cardVariants}
                initial={props.cardVariants.offscreen}
                // whileInView={props.cardVariants.onscreen}
                // viewport={{ root: props.scrollRef }}
                // viewport={{ once: true }}
            >
                {/* <h3>MindMAPE</h3> */}
                <h3>{props.text}</h3>
            </motion.div>
            {/* </div> */}

        </Aux>
    )
}

export default ProjectCard;