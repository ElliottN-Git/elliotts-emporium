import React from 'react';

//CSS and assets
import classes from './MindMape.module.css';
import blockOneImage from '../../../assets/images/MindMape/mindMapeHeader.png';
import blockTwoImage from '../../../assets/images/MindMape/profilePage.png';

//Components
import Aux from '../../../hoc/Auxillary/Auxillary';
import ContentBlock from '../../ContentBlock/ContentBlock';


const MindMape = () => {
    return (
        <Aux>
            <ContentBlock>
                <div className={classes.CB1}>
                    <div className={classes.CB1Background} style={{ backgroundImage: `url(${blockOneImage})` }}>
                    </div>
                    <div className={classes.CB1Text}>
                        <h1>The Brief</h1>
                        <h2>Create a blogging platform with the following features:</h2>
                        <ul>
                            <li>Users can create and edit their unique accounts</li>
                            <li>A home-page with a list of articles that are available for everyone to view</li>
                            <li>Logged in users can write, edit and delete their own articles</li>
                            <li>Logged in users can also view and write comments, delete their own comments, and moderate others' comments on their own articles</li>
                            <li>All articles and user information is stored in a database, with no passwords saved as plaintext</li>
                            <li>An extra feature of our team's choosing - we chose to implement a toggleable site-wide profanity filter</li>
                        </ul>
                    </div>
                </div>
            </ContentBlock>

            <ContentBlock backgroundImage={blockTwoImage}>
                <div className={classes.CB2}>
                    <h1>Planning</h1>
                    
                </div>
            </ContentBlock>
        </Aux>
    )
}

export default MindMape;
