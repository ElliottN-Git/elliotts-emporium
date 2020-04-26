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
import DownScrollChevron from '../../Components/UI/ScrollChevron/DownScrollChevron';
import UpScrollChevron from '../../Components/UI/ScrollChevron/UpScrollChevron';
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


    // componentDidMount = () => {
    //     window.addEventListener('scroll', this.debounce(this.scrollFromTopListener, 500));
    // }

    // componentWillUnmount = () => {
    //     window.removeEventListener('scroll', this.scrollFromTopListener);
    // }

    // //Debounce function to limit number of updates triggered on a listener function
    // debounce = (callback, wait) => {
    //     let timeout;
    //     return (...args) => {
    //         const context = this;
    //         clearTimeout(timeout);
    //         timeout = setTimeout(() => callback.apply(context, args), wait);
    //     };
    // }

    // scrollFromTopListener = (event) => {
    //     let scrollHeight = window.scrollY;
    //     console.log(scrollHeight);
    //     if (scrollHeight > 1) {
    //         this.setState({ showScrollChevron: true });
    //     } else {
    //         this.setState({ showScrollChevron: true });
    //     }
    // }


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

    upChevronClickedhandler = () => {
        let currentY = window.scrollY;
        let windowHeight = window.innerHeight;
        let scrollModifier = Math.ceil(currentY / windowHeight);
        let scrollModifier2 = Math.ceil((currentY + (scrollModifier*40) + 40) / windowHeight);
        if (currentY <= windowHeight) {
            window.scrollTo({ top: (0 - 40), behavior: "smooth" })
        } else {
            window.scrollTo({ top: (scrollModifier2 * windowHeight) - ((scrollModifier2 - 1) * windowHeight) - 40, behavior: "smooth" })
        }
    }

    downChevronClickedHandler = () => {
        let currentY = window.scrollY;
        let windowHeight = window.innerHeight;
        let scrollModifier = Math.ceil(currentY / windowHeight);
        let scrollModifier2 = Math.ceil((currentY + (scrollModifier*40) + 40)/ windowHeight);
        if (currentY === 0) {
            window.scrollTo({ top: (windowHeight - 40), behavior: "smooth" })
        } else {
            window.scrollTo({ top: (scrollModifier2 * windowHeight) - 40, behavior: "smooth" })
        }
    }



    render() {
        return (
            <Aux>
                <Header>
                    <UpScrollChevron
                        show={this.state.showScrollChevron}
                        clicked={this.upChevronClickedhandler}
                    />
                    <DownScrollChevron
                        show={this.state.showScrollChevron}
                        clicked={this.downChevronClickedHandler}
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