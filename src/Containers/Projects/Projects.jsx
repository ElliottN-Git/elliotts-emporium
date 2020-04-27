import React from 'react';

//CSS and Assets
import classes from './Projects.module.css';
import MindMapeImg from '../../assets/images/MindMape/loginpage.png';
import BurgerBuilderImg from '../../assets/images/BurgerBuilder/BuildPage.png';
import ThisWebsiteImg from '../../assets/images/ThisWebsite/thisSiteFaviconBig.png';

//Components
import Aux from '../../hoc/Auxillary/Auxillary';

const Projects = () => {
    return (
        <Aux>
            <div className={classes.Projects}>
                <div className={classes.MindMape}>
                    <div className={classes.Blurb}>
                        <h1>MindMape</h1>
                        <p>A blogging website I developed with a team of three others as the final project in my PostGraduate Certificate in Information Technology.</p>
                    </div>
                    <img src={MindMapeImg} alt="MindMapeImg" />
                </div>
                <div className={classes.BurgerBuilder}>
                    <img src={BurgerBuilderImg} alt="BurgerBuilderImg" />
                    <div className={classes.Blurb}>
                        <h1>BurgerBuilder</h1>
                        <p>Hungry? I created a BurgerBuilder webapp in the Udemy React course by AcadeMind.</p>
                    </div>

                </div>
                <div className={classes.ThisWebsite}>
                    <div className={classes.Blurb}>
                        <h1>This Website!</h1>
                        <p>Hungry? I created a BurgerBuilder webapp in the Udemy React course by AcadeMind.</p>
                    </div>
                    <img src={ThisWebsiteImg} alt="ThisWebsiteImg" />
                </div>
            </div>
        </Aux>
    )
}

export default Projects;
