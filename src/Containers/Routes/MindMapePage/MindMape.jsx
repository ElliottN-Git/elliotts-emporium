import React, { Component } from 'react';

//CSS and assets
import classes from './MindMape.module.css';
import blockOneImage from '../../../assets/images/MindMape/mindMapeHeader.png';
import signUpImage from '../../../assets/images/MindMape/signUpFormHalfWidth.png';
import gitBranchingImage from '../../../assets/images/MindMape/git-branching-model-croppedjpg.jpg';
import databasePlanImage from '../../../assets/images/MindMape/mindMape ERD v2.1.png';
import avatarSelectionImg from '../../../assets/images/MindMape/Avatar selection2.gif';
import profilePageImg from '../../../assets/images/MindMape/profilePage3.png';
import writeArticleImg from '../../../assets/images/MindMape/WriteArticle.png';
import articlesPageImg from '../../../assets/images/MindMape/Articles page.png';
import commentSectionImg from '../../../assets/images/MindMape/WriteComment.png';

//Components
import Aux from '../../../hoc/Auxillary/Auxillary';
import ContentBlock from '../../ContentBlock/ContentBlock';
import Backdrop from '../../../Components/UI/Backdrop/Backdrop';

class MindMape extends Component {
    state = {
        showCommentsExpanded: false,
        showArticlesExpanded: false,
        showWriteExpanded: false
    }

//TODO finesse the positioning of these expanding divs
    articlesAndCommentsClickHandler = (event) => {
        console.log(event.target.alt);
        let whichDiv = `show${event.target.alt}Expanded`;
        console.log(whichDiv);
        
        if (!this.state.showCommentsExpanded && whichDiv === 'showCommentsExpanded') {
            this.setState({ showCommentsExpanded: true });
        } else if(this.state.showCommentsExpanded && whichDiv === 'showCommentsExpanded') {
            this.setState({ showCommentsExpanded: false });
        } if (!this.state.showArticlesExpanded && whichDiv === 'showArticlesExpanded') {
            this.setState({ showArticlesExpanded: true });
        } else if(this.state.showArticlesExpanded && whichDiv === 'showArticlesExpanded') {
            this.setState({ showArticlesExpanded: false });
        } if (!this.state.showWriteExpanded && whichDiv === 'showWriteExpanded') {
            this.setState({ showWriteExpanded: true });
        } else if(this.state.showWriteExpanded && whichDiv === 'showWriteExpanded') {
            this.setState({ showWriteExpanded: false });
        }
    }


    render() {
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
                        <div className={classes.SignUpRightBlock}>
                            <div className={classes.SignUpBlurb}>
                                <h1>Sign Up</h1>
                                <p>The account creation page was the form seen on the left. <br />
                                This form was submitted to the database using a POST request through Express and a custom Data Access Object module. <br />
                                On the database the user's password was not stored as plaintext. Instead, the NPM module 'Crypto' was used to salt and hash the password. <br />
                                    <br />
                                    <br />
                                Below is the Avatar selction interface, which was located beneath the form on the website.
                                This gave users the option to upload an avatar of their own choosing. The NPM module 'fs' renamed and saved the file in the public folder, followed by the 'Jimp' module resizing the image to a thumbnail and overwriting the original full-sized image. <br />
                                Care was taken so that only one image could be uploaded or selected.
                            </p>
                                <img src={avatarSelectionImg} alt="" />
                            </div>
                        </div>
                    </div>
                </ContentBlock>

                <ContentBlock>
                    <div className={classes.Profile}>
                        <h1>Profile Page</h1>
                        <p>Below is the profile page once signed in. The user can log in and out, with authentication being handled by the Data Access Object and Crypto, adding a session and assigning
                        them a cookie to access their account's data. <br />
                            <br />
                        On the 'My Profile' tab users can edit and delete their account, as well as all of their account's articles and comments in the 'My Article History' tab.
                    </p>
                        <img src={profilePageImg} alt="profilePageImg" />
                    </div>
                </ContentBlock>

                <ContentBlock>
                    <div className={classes.Articles}>
                        <h1>Articles and Comments</h1>
                        <h2>Click on the images for more info!</h2>
                        <div className={classes.PanelContainer}>
                            <div className={classes.ArticlesPanel}>
                            <Backdrop show={this.state.showArticlesExpanded} clicked={this.articlesAndCommentsClickHandler} />
                                <div onClick={this.articlesAndCommentsClickHandler}
                                    style={{
                                        transform: this.state.showArticlesExpanded ? 'scale(1.75) translate(30%, 5vh)' : '',
                                        width: this.state.showArticlesExpanded ? '100%' : '',
                                        backgroundColor: this.state.showArticlesExpanded ? 'rgb(51, 52, 47)' : '',
                                        zIndex: this.state.showArticlesExpanded ? '51' : '',
                                        borderRadius: this.state.showArticlesExpanded ? '5px' : '0',
                                    }}>
                                    <h3>All users can view articles.</h3>
                                    <img src={articlesPageImg} alt="Articles" />
                                </div>
                                <Backdrop show={this.state.showWriteExpanded} clicked={this.articlesAndCommentsClickHandler} />
                                <div onClick={this.articlesAndCommentsClickHandler} 
                                    style={{
                                        transform: this.state.showWriteExpanded ? 'scale(1.75) translate(-30%, 5vh)' : '',
                                        width: this.state.showWriteExpanded ? '100%' : '',
                                        backgroundColor: this.state.showWriteExpanded ? 'rgb(51, 52, 47)' : '',
                                        zIndex: this.state.showWriteExpanded ? '51' : '',
                                        borderRadius: this.state.showWriteExpanded ? '5px' : '0',
                                    }}>
                                    <h3>Logged in users can write articles and comments.</h3>
                                    <img src={writeArticleImg} alt="Write" />
                                </div>
                            </div>
                            <div className={classes.CommentsPanel}>
                                <Backdrop show={this.state.showCommentsExpanded} clicked={this.articlesAndCommentsClickHandler} />
                                <div
                                    onClick={this.articlesAndCommentsClickHandler}
                                    style={{
                                        transform: this.state.showCommentsExpanded ? 'scale(1.75) translateY(-15vh)' : '',
                                        width: this.state.showCommentsExpanded ? '100%' : '',
                                        backgroundColor: this.state.showCommentsExpanded ? 'rgb(51, 52, 47)' : '',
                                        zIndex: this.state.showCommentsExpanded ? '51' : '',
                                        borderRadius: this.state.showCommentsExpanded ? '5px' : '0',
                                    }}
                                >
                                    <h3 style={{
                                        transform: this.state.showCommentsExpanded ? 'translateY(0)' : 'translateY(70px)',
                                        transitionDuration: '0.5s'
                                    }}>Each article has its own comments sectiion.</h3>
                                    {/* {this.state.showCommentsExpanded 
                                        ? <p>blahblahblahblahblahblahblah.<br />blahblahblahblahblahblahblahblahblahbl.<br />ahblahblahblahblahblahblahblahblah</p>
                                        : null} */}
                                    <p style={{
                                        transform: this.state.showCommentsExpanded ? 'translateY(0)' : 'translateY(100px)',
                                        transitionDuration: '0.5s',
                                        zIndex: this.state.showCommentsExpanded ? '1' : '-1'
                                    }}>blahblahblahblahblahblahblah.<br />blahblahblahblahblahblahblahblahblahbl.<br />ahblahblahblahblahblahblahblahblah</p>
                                    <img src={commentSectionImg} alt="Comments" />
                                </div>
                            </div>
                        </div>
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
}

export default MindMape;
