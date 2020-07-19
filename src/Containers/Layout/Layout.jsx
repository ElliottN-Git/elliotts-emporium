//Conatiner that holds main navigation components and handles responsiveness

import React, { Component } from 'react';

//CSS
import classes from './Layout.module.css';
//

//Components
import NavBar from '../../Components/Navigation/NavBar/NavBar';
import Aux from '../../hoc/Auxillary/Auxillary';
import DownScrollChevron from '../../Components/UI/ScrollChevron/DownScrollChevron';
import UpScrollChevron from '../../Components/UI/ScrollChevron/UpScrollChevron';

class Layout extends Component {

    state = {
        navShrink: false,
        showUpScrollChevron: true,
        showDownScrollChevron: true,
        currentScrollBlock: 1,
        showSideDrawer: false
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


    upChevronClickedhandler = () => {
        const windowHeight = window.innerHeight - 40;
        let currentY = window.scrollY;
        let currentScrollBlock = this.state.currentScrollBlock;
        let currentYAdjustment = Math.ceil((currentY - 1) / windowHeight);
        if (currentScrollBlock === currentYAdjustment) {
            window.scrollTo({ top: ((currentScrollBlock) * windowHeight) - windowHeight, behavior: "smooth" })
            this.setState({ currentScrollBlock: (currentScrollBlock) });
        } else {
            currentYAdjustment = currentScrollBlock + currentYAdjustment;
            window.scrollTo({ top: ((currentYAdjustment - currentScrollBlock) * windowHeight) - windowHeight, behavior: "smooth" })
            this.setState({ currentScrollBlock: (currentScrollBlock - 1) });
        }
    }

    downChevronClickedHandler = () => {
        const windowHeight = window.innerHeight - 40;
        let currentY = window.scrollY;
        let currentScrollBlock = this.state.currentScrollBlock;
        let currentYAdjustment = Math.ceil((currentY + 1) / windowHeight);
        currentYAdjustment = currentScrollBlock - currentYAdjustment;
        window.scrollTo({ top: ((currentScrollBlock - currentYAdjustment) * windowHeight), behavior: "smooth" })
        this.setState({ currentScrollBlock: (currentScrollBlock + 1) });
    }

    render() {
        let navHeight = null;
        if (this.state.navShrink) {
            navHeight = { height: "40px", backgroundColor: "rgba(25,25,25,1)", boxShadow: "0 1px 2px 0 rgba(201, 197, 197, 0.25)" };
        }

        return (
            <Aux>
                <main className={classes.Content}>
                    <UpScrollChevron
                        show={this.state.showScrollChevron}
                        clicked={this.upChevronClickedhandler}
                    />
                    <DownScrollChevron
                        show={this.state.showScrollChevron}
                        clicked={this.downChevronClickedHandler}
                    />
                    <NavBar navShrink={navHeight} />
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;