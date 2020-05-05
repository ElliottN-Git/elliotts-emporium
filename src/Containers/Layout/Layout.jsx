//Conatiner that holds main navigation components and handles responsiveness

import React, { Component } from 'react';

//CSS
import classes from './Layout.module.css';
//

//Components
import NavBar from '../../Components/Navigation/NavBar';
import Aux from '../../hoc/Auxillary/Auxillary';


class Layout extends Component {

    state = {
        navShrink: false
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.debounce(this.scrollFromTopListener, 100));
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.scrollFromTopListener);
    }

    //Debounce function to limit number of updates triggered on a listener function
    debounce = (callback, wait) => {
        let timeout;
        return (...args) => {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => callback.apply(context, args), wait);
        };
    }

    scrollFromTopListener = (event) => {
        let scrollHeight = window.scrollY;
        console.log(scrollHeight);
        if (scrollHeight > 50) {
            this.setState({ navShrink: true });
        } else {
            this.setState({ navShrink: false });
        }
    }

    render() {
        let navHeight = {};
        if(this.state.navShrink) {
            navHeight = {height: "40px"};
        }

        return (
            <Aux>
                <NavBar navShrink={navHeight}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;