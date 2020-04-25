import React, { Component } from 'react'

//CSS
//

//Components
import Aux from '../../hoc/Auxillary/Auxillary';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../../Components/UI/Header/Header';
import HeaderText from '../../Components/UI/HeaderText/HeaderText';
import Background from '../../Components/UI/Backgrounds/Background';
import ResumeTile from '../../Components/UI/ResumeTile/ResumeTile'
import Modal from '../../Components/UI/Modal/Modal';
//

//Viewport height taken initially and set, then not updated.
//Testing for mobile devices to remove jumping

// const vph = window.innerHeight;
// console.log(vph);

export default class Layout extends Component {

    state = {
        showResume: false,
        // viewPortHeight: vph
    }


    // componentDidMount = () => {
    // //     window.addEventListener('resize', this.windowResizedHandler);
    // }

    // componentWillUnmount = () => {
    //     window.removeEventListener('resize', this.windowResizedHandler);
    // }

    //need to add debounce function to limit number of updates triggered
    // windowResizedHandler = () => {
    //     console.log(this.state.viewPortHeight);
    //     this.setState({viewPortHeight: window.innerHeight});
    // }


    resumeOpenedHandler = (event) => {
        this.setState({ showResume: true });
        event.preventDefault();
    }

    resumeClosedHandler = () => {
        this.setState({ showResume: false });
    }


    render() {
        return (
            <Aux>
                <Header>
                    <HeaderText />
                </Header>
                <Dashboard />
                <Background>
                    <Modal show={this.state.showResume} modalClosed={this.resumeClosedHandler}></Modal>
                    <ResumeTile clicked={this.resumeOpenedHandler} />
                </Background>
            </Aux>
        )
    }
}