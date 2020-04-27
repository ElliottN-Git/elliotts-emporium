import React, { Component } from 'react'

//CSS and assets
import aboutMeBackgroundImage from '../../assets/images/BGimg2.jpg';

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
import DownScrollChevron from '../../Components/UI/ScrollChevron/DownScrollChevron';
import UpScrollChevron from '../../Components/UI/ScrollChevron/UpScrollChevron';
import ContentBlock from '../ContentBlock/ContentBlock';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';




export default class Layout extends Component {

    state = {
        showResume: false,
        showUpScrollChevron: true,
        showDownScrollChevron: true,
        currentScrollBlock: 1
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


    //Handlers for opening and closing the resume modal
    resumeOpenedHandler = (event) => {
        this.setState({ showResume: true });
        event.preventDefault();
        //Locks body scrolling when the modal is open
        document.body.style.overflowY = "hidden";
    }

    resumeClosedHandler = () => {
        this.setState({ showResume: false });
        //Unlocks body scrolling when modal is closed
        document.body.style.overflowY = "scroll";
    }

    upChevronClickedhandler = () => {
        const windowHeight = window.innerHeight - 40;    //700
        // console.log(`wHeight: ${windowHeight}`);

        let currentY = window.scrollY;
        // console.log(`currentY: ${currentY}`);

        let currentScrollBlock = this.state.currentScrollBlock;
        // console.log(`currentScrollBlock: ${this.state.currentScrollBlock}`);

        let currentYAdjustment = Math.ceil((currentY - 1) / windowHeight);
        // console.log(`currentYAdjustment: ${currentYAdjustment}`);

        if (currentScrollBlock === currentYAdjustment) {
            window.scrollTo({ top: ((currentScrollBlock) * windowHeight) - windowHeight, behavior: "smooth" })
            this.setState({ currentScrollBlock: (currentScrollBlock) });
        } else {
            currentYAdjustment = currentScrollBlock + currentYAdjustment;
            // console.log(`currentYAdjustment2: ${currentYAdjustment}`);

            // let scrollToBlock = (currentYAdjustment - currentScrollBlock);
            // console.log(`scrollToBlock: ${scrollToBlock}`);

            window.scrollTo({ top: ((currentYAdjustment - currentScrollBlock) * windowHeight) - windowHeight, behavior: "smooth" })
            this.setState({ currentScrollBlock: (currentScrollBlock - 1) });
        }
    }

    downChevronClickedHandler = () => {
        const windowHeight = window.innerHeight - 40;    //700
        // console.log(`wHeight: ${windowHeight}`);
        let currentY = window.scrollY;
        // console.log(`currentY: ${currentY}`);

        let currentScrollBlock = this.state.currentScrollBlock;
        // console.log(`currentScrollBlock: ${this.state.currentScrollBlock}`);

        let currentYAdjustment = Math.ceil((currentY + 1) / windowHeight);
        // console.log(`currentYAdjustment: ${currentYAdjustment}`);

        currentYAdjustment = currentScrollBlock - currentYAdjustment;
        // console.log(`currentYAdjustment2: ${currentYAdjustment}`);

        window.scrollTo({ top: ((currentScrollBlock - currentYAdjustment) * windowHeight), behavior: "smooth" })
        this.setState({ currentScrollBlock: (currentScrollBlock + 1) });
    }


    render() {
        return (
            <Aux>
                <UpScrollChevron
                    show={this.state.showScrollChevron}
                    clicked={this.upChevronClickedhandler}
                />
                <DownScrollChevron
                    show={this.state.showScrollChevron}
                    clicked={this.downChevronClickedHandler}
                />
                <Header>
                </Header>
                <ContentBlock backgroundImage={aboutMeBackgroundImage}>
                    <AboutMe>
                        <Dashboard clicked={this.resumeOpenedHandler}>
                            <Modal show={this.state.showResume} modalClosed={this.resumeClosedHandler}></Modal>
                        </Dashboard>
                    </AboutMe>
                </ContentBlock>
                <Projects />
            </Aux >
        )
    }
}