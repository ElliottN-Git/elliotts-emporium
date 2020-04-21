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
        showResume: false
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