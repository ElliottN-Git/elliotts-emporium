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
            <ContentBlock topBlock={true}>
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
                        <h1>Sign Up</h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus leo, congue et ante vel, tincidunt laoreet tortor. Vestibulum tristique lectus felis, a ultrices lorem lobortis pulvinar. Etiam iaculis risus a nisl elementum, at aliquet diam gravida. Duis lobortis vitae purus sed scelerisque. Aenean sit amet erat ac magna auctor porttitor. Ut nec massa sagittis, iaculis elit quis, pulvinar dolor. Aenean pharetra tincidunt arcu, lobortis pulvinar dolor semper condimentum. Nunc dui ante, accumsan sit amet hendrerit eu, molestie at tellus. Fusce dignissim, sapien a suscipit aliquet, erat nunc ultricies turpis, ac dictum metus sem ut nulla. Morbi porttitor posuere pulvinar. Curabitur faucibus tortor vel placerat scelerisque.

                        Morbi vel justo ornare, convallis tellus a, vehicula leo. Donec vel hendrerit leo. Suspendisse tincidunt ac mauris ac lacinia. Aenean accumsan massa et augue sollicitudin viverra. Maecenas dictum, dui id efficitur vestibulum, leo erat iaculis lacus, eu mollis sapien massa vestibulum turpis. Cras sit amet purus et massa ullamcorper vestibulum sit amet ac felis. Cras eget finibus lacus. Aliquam in ante nisl. Nunc ex arcu, viverra vitae augue nec, sodales mollis arcu. Cras vehicula magna velit, a imperdiet lectus accumsan et. Duis quis dolor ut lacus euismod condimentum. Integer erat metus, faucibus ut ex sed, convallis gravida nisi. Quisque eget nulla et velit ultrices congue. Phasellus mattis vehicula ipsum. Sed congue erat nec sollicitudin convallis. Sed sit amet aliquet felis. </p>
                    </div>
                </div>
            </ContentBlock>

            <ContentBlock>
                <div className={classes.Profile}>
                    <h1>Profile Page</h1>
                </div>
            </ContentBlock>

            <ContentBlock>
                <div className={classes.Articles}>
                    <h1>Articles and Comments</h1>
                </div>
            </ContentBlock>

            <ContentBlock>
                <div className={classes.ProfanityFilter}>
                    <h1>****ing Profanity Filter</h1>
                </div>
            </ContentBlock>
        </Aux>
    )
}

export default MindMape;
