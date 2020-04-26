import React, { Component } from 'react'

//CSS and assets
import aboutMeBackgroundImage from '../../assets/images/BGimg2.jpg';
import projectsBackgroundImage from '../../assets/images/testDynamicBG.jpg'
//

//Components
import Aux from '../../hoc/Auxillary/Auxillary';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../../Components/UI/Header/Header';
import Modal from '../../Components/UI/Modal/Modal';
import ScrollChevron from '../../Components/UI/ScrollChevron/ScrollChevron';
import ContentBlock from '../ContentBlock/ContentBlock';
import AboutMe from '../AboutMe/AboutMe';
//

//Colour codes from CV
    //Header Background Colour
        // HTML/HEX code:	#33342f	
        // RGB code:	rgb(51, 52, 47)
    //Header Text Colour
        // HTML/HEX code:	#c6dec0	
        // RGB code:	rgb(198, 222, 192)

export default class Layout extends Component {

    state = {
        showResume: false,
        showScrollChevron: true
    }


    componentDidMount = () => {
        window.addEventListener('scroll', this.scrollFromTopListener);
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.scrollFromTopListener);
    }

    // need to add debounce function to limit number of updates triggered


    scrollFromTopListener = (event) => {
        let scrollHeight = window.scrollY;
        console.log(scrollHeight);
        if (scrollHeight > 1) {
            this.setState({ showScrollChevron: false });
        } else {
            this.setState({ showScrollChevron: true });
        }
    }


    resumeOpenedHandler = (event) => {
        this.setState({ showResume: true });
        event.preventDefault();

        //Locks body scrolling when the modal is open
        document.body.style.overflowY = "hidden";
    }


    resumeClosedHandler = () => {
        this.setState({ showResume: false });
        document.body.style.overflowY = "scroll";
    }

    chevronClickedhandler = () => {
        window.scrollTo({ top: window.innerHeight - 40, behavior: "smooth" });
    }


    render() {
        return (
            <Aux>
                <Header>
                    <ScrollChevron
                        show={this.state.showScrollChevron}
                        clicked={this.chevronClickedhandler}
                    />
                </Header>
                <ContentBlock backgroundImage={aboutMeBackgroundImage}>
                    <Dashboard clicked={this.resumeOpenedHandler}>
                        <Modal show={this.state.showResume} modalClosed={this.resumeClosedHandler}></Modal>
                    </Dashboard>
                    <AboutMe />
                </ContentBlock>
                <ContentBlock backgroundImage={projectsBackgroundImage}>

                </ContentBlock>
            </Aux >
        )
    }
}