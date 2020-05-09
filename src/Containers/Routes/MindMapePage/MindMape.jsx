import React from 'react';

//CSS and assets
import classes from './MindMape.module.css';
import blockOneImage from '../../../assets/images/MindMape/mindMapeHeader.png';
import signUpImage from '../../../assets/images/MindMape/signUpFormHalfWidth.png';
import gitBranchingImage from '../../../assets/images/MindMape/git-branching-model-croppedjpg.jpg';
import databasePlanImage from '../../../assets/images/MindMape/mindMape ERD v2.1.png'

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

            <ContentBlock>
                <div className={classes.CB2}>
                    <h1>Planning</h1>
                    <div className={classes.VersionControl}>
                        <img src={gitBranchingImage} alt="Feature Branching Diagram" />
                        <div className={classes.VersionControlBlurb}>
                            <h2>Git Feature Branching</h2>
                            <p>Our project was managed in a GitLab repository. We researched early on how to effectively use Git and decided on the ‘Feature Branching’ workflow. We would individually work on features on our own branches and when completed would push to upstream, informing the other team members we had done so. The other team members would then pull from upstream, alerting them to any potential merge conflicts with their features. These conflicts would be more easily resolved while actively working on these conflicting areas. This worked extremely well as conflicts were regularly identified and resolved, and all team members had up-to-date versions of the project.</p>
                        </div>
                    </div>
                    <div className={classes.DatabasePlan}>
                        <div className={classes.DatabasePlanBlurb}>
                            <h2>Database Design</h2>
                            <p>The database we used was SQL so we started by outlining the entities, their attributes and relationships between them. We decided that the primary keys for users, articles and comments would all be automatically generated integers (using not null primary key in the SQL set-up). <br />
                            <br />
                            The main entity was the users as they have relationships with all of the other entities, and have the most attributes. The articles and comments both had userId as foreign keys, as they each have exactly one user that posts them. However, comments differed from articles because a comment also had and articleId foreign key, again because a comment is associated with one article. Additionally comments had a replyTo_Id attribute that was a foreign key of commentId. This was to add in the functionality of being able to reply to comments.  </p>
                        </div>
                        <img src={databasePlanImage} alt="Database Plan" />
                    </div>
                </div>
            </ContentBlock>

            <ContentBlock>
                <div className={classes.SignUpBlock}>
                    <div className={classes.SignUpFormImg} style={{ backgroundImage: `url(${signUpImage})` }}></div>
                    <div className={classes.SignUpBlurb}>
                        <h1>Sign Up Form</h1>
                        <p></p>
                    </div>
                </div>
            </ContentBlock>
        </Aux>
    )
}

export default MindMape;
