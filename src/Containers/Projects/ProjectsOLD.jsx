import React from 'react';

//CSS and Assets
import classes from './Projects.module.css';
// import projectsBackgroundImage from '../../assets/images/testDynamicBG.jpg'
import MindMapeImg from '../../assets/images/MindMape/loginpage.png';
import BurgerBuilderImg from '../../assets/images/BurgerBuilder/BuildPage.png';
import ThisWebsiteImg from '../../assets/images/ThisWebsite/thisSiteFaviconBig.png';

//Components
import ContentBlock from '../ContentBlock/ContentBlock';
import Aux from '../../hoc/Auxillary/Auxillary';
import { Component } from 'react';
import { Link } from 'react-router-dom';


//needed to change something for git
//blah blah blah

class Projects extends Component {
    state = {
        smallScreen: false
    }

    componentDidMount = () => {
        const widthCheck = window.innerWidth;
        //console.log(`WidthCheck: ${widthCheck}`);

        // const heightCheck = document.body.scrollHeight;

        if (widthCheck <= 1000) {
            this.smallScreenHandler();
        }
    }

    smallScreenHandler() {
        this.setState({ smallScreen: true });
        // console.log(this.state.smallScreen);
    }


    render() {
        //console.log(this.state.smallScreen);
        if (this.state.smallScreen) {
            return (
                <Aux>
                    <ContentBlock
                        className={classes.ProjectsContentBlock}
                        backgroundColour={'linear-gradient(454deg, #9574ff, #ff5353)'}
                    >
                        <div className={classes.Projects}>
                            <div className={classes.MindMape}>
                                <div className={classes.Blurb}>
                                    <Link
                                        className={classes.MindMapeLink}
                                        to="/mindmape"
                                    >
                                        <h1>MindMape</h1>
                                    </Link>
                                    <p>A blogging website I developed with a team of three others as the final project in my PostGraduate Certificate in Information Technology.</p>
                                </div>
                                <img src={MindMapeImg} alt="MindMapeImg" />
                            </div>
                        </div>
                    </ContentBlock>

                    <ContentBlock
                        className={classes.ProjectsContentBlock}
                        backgroundColour={'linear-gradient(454deg, #9574ff, #ff5353)'}
                    >
                        <div className={classes.Projects}>

                            <div className={classes.BurgerBuilder}>
                                <img src={BurgerBuilderImg} alt="BurgerBuilderImg" />
                                <div className={classes.Blurb}>
                                    <Link
                                        className={classes.BurgerBuilderLink}
                                        to="/burgerbuilder"
                                    >
                                        <h1>BurgerBuilder</h1>
                                    </Link>
                                    <p>Hungry? I created a BurgerBuilder webapp in the Udemy React course by AcadeMind.</p>
                                </div>

                            </div>
                        </div>
                    </ContentBlock>

                    <ContentBlock
                        className={classes.ProjectsContentBlock}
                        backgroundColour={'linear-gradient(454deg, #9574ff, #ff5353)'}
                    >
                        <div className={classes.Projects}>

                            <div className={classes.ThisWebsite}>
                                <div className={classes.Blurb}>
                                    <h1>This Website!</h1>
                                    <p>The page you are currently on was also developed with React!</p>
                                </div>
                                <img src={ThisWebsiteImg} alt="ThisWebsiteImg" />
                            </div>
                        </div>
                    </ContentBlock>
                </Aux >
            )
        } else {

            return (
                <Aux>
                    <ContentBlock
                        className={classes.ProjectsContentBlock}
                        backgroundColour={'linear-gradient(454deg, #9574ff, #ff5353)'}
                    >
                        <div className={classes.Projects}>
                            <div className={classes.MindMape}>
                                <div className={classes.Blurb}>
                                    <Link
                                        className={classes.MindMapeLink}
                                        to="/mindmape"
                                    >
                                        <h1>MindMape</h1>
                                    </Link>
                                    <p>A blogging website I developed with a team of three others as the final project in my PostGraduate Certificate in Information Technology.</p>
                                </div>
                                <img src={MindMapeImg} alt="MindMapeImg" />
                            </div>
                            <div className={classes.BurgerBuilder}>
                                <img src={BurgerBuilderImg} alt="BurgerBuilderImg" />
                                <div className={classes.Blurb}>
                                    <Link
                                        className={classes.BurgerBuilderLink}
                                        to="/burgerbuilder"
                                    >
                                        <h1>BurgerBuilder</h1>
                                    </Link>
                                    <p>Hungry? I created a BurgerBuilder webapp in the Udemy React course by AcadeMind.</p>
                                </div>

                            </div>
                            <div className={classes.ThisWebsite}>
                                <div className={classes.Blurb}>
                                    <h1>This Website!</h1>
                                    <p>The page you are currently on was also developed with React!</p>
                                </div>
                                <img src={ThisWebsiteImg} alt="ThisWebsiteImg" />
                            </div>
                        </div>
                    </ContentBlock>
                </Aux>
            )
        }
    }
}

export default Projects;
