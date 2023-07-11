import React, { Component } from 'react';
//CSS and assets
// import aboutMeBackgroundImage from '../../assets/images/chemistrybg.jpg';

//Colour codes from CV
//Header Background Colour
// HTML/HEX code:	#33342f	
// RGB code:	rgb(51, 52, 47)
//Header Text Colour
// HTML/HEX code:	#c6dec0	
// RGB code:	rgb(198, 222, 192)


//Components
import Aux from '../../hoc/Auxillary/Auxillary';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../../Components/UI/Header/Header';
import Modal from '../../Components/UI/Modal/Modal';
import ContentBlock from '../ContentBlock/ContentBlock';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';

export default class Home extends Component {

    state = {
        showResume: false,
        modalLink: ''
    }

    //Handlers for opening and closing the resume modal
    resumeOpenedHandler = (event) => {
        //const ResumePDF = "Elliott Nixon - CV.pdf";
        this.setState({
            showResume: true,
            modalLink: "https://firebasestorage.googleapis.com/v0/b/elliotts-emporium.appspot.com/o/Elliott%20Nixon%20-%20CV.pdf?alt=media&token=71238e41-fbb8-41a8-9153-e18c7c6db2ce"
        });

        event.preventDefault();
        //Locks body scrolling when the modal is open
        document.body.style.overflowY = "hidden";
        //
    }

    resumeClosedHandler = () => {
        this.setState({ showResume: false });
        //Unlocks body scrolling when modal is closed
        document.body.style.overflowY = "scroll";
    }

    render() {
        return (
            <Aux>
                <Header>
                </Header>
                <ContentBlock backgroundColour={'linear-gradient(454deg, #404c80, #53ff88)'}>
                    <AboutMe>
                        <Dashboard clicked={this.resumeOpenedHandler}>
                            <Modal show={this.state.showResume} modalClosed={this.resumeClosedHandler} modalLink={this.state.modalLink}></Modal>
                        </Dashboard>
                    </AboutMe>
                </ContentBlock>
                <Projects />
            </Aux >
        )
    }
}