//Conatiner that holds main navigation components and handles responsiveness

import React, { Component } from 'react'

//CSS
import classes from './Layout.module.css';
//

//Components
import Aux from '../../hoc/Auxillary/Auxillary';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../../Components/UI/Header/Header';
import HeaderText from '../../Components/UI/HeaderText/HeaderText';
import Background from '../../Components/UI/Backgrounds/Background';
import ResumeTile from '../../Containers/ResumeTile/ResumeTile';
import Modal from '../../Components/UI/Modal/Modal';
//

export default class Layout extends Component {
    state = {
        showResume: false,
        viewPortHeight: window.innerHeight
    }
    
    
    componentDidMount = () => {
        window.addEventListener('resize', this.windowResizedHandler);
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.windowResizedHandler);
    }

    //need to add debounce function to limit number of updates triggered
    windowResizedHandler = () => {
        console.log(this.state.viewPortHeight);
        this.setState({viewPortHeight: window.innerHeight});
    }
    

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
                <main className={classes.Content}>
                    <div className={classes.InDevelopmentBanner}>
                        <h1>Website In Development...</h1>
                    </div>
                    <Header>
                        <HeaderText />
                    </Header>
                    <Dashboard />
                    <Background>
                        <Modal show={this.state.showResume} modalClosed={this.resumeClosedHandler}></Modal>
                        <ResumeTile clicked={this.resumeOpenedHandler} />
                    </Background>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}