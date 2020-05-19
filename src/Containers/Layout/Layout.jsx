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
        window.addEventListener('scroll', this.debounce(this.scrollFromTopListener, 50));
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
        if (this.state.navShrink) {
            navHeight = { height: "40px", backgroundColor: "rgba(25,25,25,1)", boxShadow: "0 1px 2px 0 rgba(201, 197, 197, 0.25)" };
        }

        return (
            <Aux>
                <main className={classes.Content}>
                    <NavBar navShrink={navHeight} />
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;