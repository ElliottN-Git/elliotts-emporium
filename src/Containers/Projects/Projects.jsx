import React, { useEffect } from 'react';

import { useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";

//CSS and Assets
import classes from './Projects.module.css';
// import projectsBackgroundImage from '../../assets/images/testDynamicBG.jpg'
// import MindMapeImg from '../../assets/images/MindMape/loginpage.png';
// import BurgerBuilderImg from '../../assets/images/BurgerBuilder/BuildPage.png';
// import ThisWebsiteImg from '../../assets/images/ThisWebsite/thisSiteFaviconBig.png';
import ProjectCard from '../../Components/UI/ProjectCard/ProjectCard.jsx';

//Components
// import ContentBlock from '../ContentBlock/ContentBlock';
import Aux from '../../hoc/Auxillary/Auxillary';
// import { Component } from 'react';
// import { Link } from 'react-router-dom';
import cardVariants from './cardVariants';


//TODO:
// - Populate the cards with relevant imgs
// - Animate the slide-in of the cards to be staggered
//      -- Probably through determining the grid location of the card and using that to inform the transition delay value

const Projects = () => {

    //--------//SMALL SCREEN HANDLING REMOVE FOR NOW AS CHANGED TO FUNCTIONAL COMPONENT//--------//
    //SEE HERE TO ADD IT BACK IN BUT WITH useEffect: https://stackoverflow.com/questions/53945763/componentdidmount-equivalent-on-a-react-function-hooks-component

    // const state = useState({
    //     smallScreen: false
    // });

    // componentDidMount = () => {
    //     const widthCheck = window.innerWidth;
    //     //console.log(`WidthCheck: ${widthCheck}`);

    //     // const heightCheck = document.body.scrollHeight;

    //     if (widthCheck <= 1000) {
    //         smallScreenHandler();
    //     }
    // }

    // const smallScreenHandler = () => {
    //     this.setState({ smallScreen: true });
    //     // console.log(this.state.smallScreen);
    // }

     // render() {
//------------------------------------------------------------------------------------------------//
    
    // const scrollRef = useRef(null);

    const controls = useAnimation();
    const [scrollRef, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("onscreen");
        } else {
            controls.start("offscreen");
        }
    }, [controls, inView]);

    // const staggerCards = stagger(0.1);

    return (
        <Aux>
            <div className={classes.ProjectsContentBlock}>
                <h1 className={classes.ProjectsContentBlockHeader}>Projects</h1>
                <div className={classes.ProjectCardContainer} ref={scrollRef}>
                    <ProjectCard 
                        controls={controls} 
                        text="MindMape"
                        cardVariants={cardVariants.cardVariantsCol1}
                        // scrollRef={scrollRef}
                    />
                    <ProjectCard 
                        controls={controls} 
                        text="BurgerBuilder"
                        cardVariants={cardVariants.cardVariantsCol2}
                    />
                    <ProjectCard 
                        controls={controls} 
                        text="React Native Meals App"
                        cardVariants={cardVariants.cardVariantsCol3}
                    />
                    <ProjectCard 
                        controls={controls} 
                        text="Next.js + bored API"
                        cardVariants={cardVariants.cardVariantsCol1}
                    />
                    <ProjectCard 
                        controls={controls} 
                        text="Some other thing"
                        cardVariants={cardVariants.cardVariantsCol2}
                    />
                    <ProjectCard 
                        controls={controls} 
                        text="Some other thing"
                        cardVariants={cardVariants.cardVariantsCol3}
                    />
                    <ProjectCard 
                        controls={controls} 
                        text="Some other thing"
                        cardVariants={cardVariants.cardVariantsCol1}
                    />
                    <ProjectCard 
                        controls={controls} 
                        text="The last thing"
                        cardVariants={cardVariants.cardVariantsCol2}
                    />
                </div>
            </div>
            {/* </ContentBlock> */}
        </Aux>
    )
}
// }
// }

export default Projects;
