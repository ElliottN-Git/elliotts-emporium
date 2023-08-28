import React, { useEffect } from 'react';

import { useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";

//CSS and Assets
import classes from './Projects.module.css';
import ProjectCard from '../../Components/UI/ProjectCard/ProjectCard.jsx';

//Components
import Aux from '../../hoc/Auxillary/Auxillary';
// import { Component } from 'react';
// import { Link } from 'react-router-dom';
import cardVariants from './cardVariants';


//TODO:
// - Populate the cards with relevant imgs - DONE
// - Animate the slide-in of the cards to be staggered
//      -- Probably through determining the grid location of the card and using that to inform the transition delay value

const Projects = () => {

    //--------//SMALL SCREEN HANDLING REMOVED FOR NOW AS CHANGED TO FUNCTIONAL COMPONENT//--------//
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

    const projectCards = [
        { id: 1, title: 'MindMape', link: '/MindMAPE', image: 'MindMape/WriteArticle.png'},
        { id: 2, title: 'BurgerBuilder', link: '/BurgerBuilder', image: 'BurgerBuilder/BuildPage.png'},
        { id: 3, title: 'Next.js + Bored API', link: '', image: 'boredAPI.png'},
        { id: 4, title: 'React Native Meals App', link: '', image: ''},
         //link: '/NextJSandAPIs',
        { id: 5, title: 'More coming soon!', link: '', image: ''},
        // { id: 6, title: 'Another thing', link: '/', image: ''},
        // { id: 7, title: 'Last thing', link: '/', image: ''}
    ]

    return (
        <Aux>
            <div className={classes.ProjectsContentBlock}>
                <h1 className={classes.ProjectsContentBlockHeader}>Projects</h1>
                <div className={classes.ProjectCardContainer} ref={scrollRef}>

                    {/* Determine which column variant properties should be used given the index of the card */}
                    {projectCards.map((card, index) => {
                        let col = (index + 1) % 3;
                        if (col === 0) {
                            col = 3;
                        }
                        let cardVariantCol = "cardVariantsCol" + col;

                        return (
                            <ProjectCard
                                controls={controls}
                                cardVariants={cardVariants[cardVariantCol]}
                                key={card.id}
                                text={card.title}
                                link={card.link}
                                cardImage={card.image}
                                tag={card.tag}
                            />
                        )
                    })}
                </div>
            </div>
        </Aux>
    )
}
// }
// }

export default Projects;
