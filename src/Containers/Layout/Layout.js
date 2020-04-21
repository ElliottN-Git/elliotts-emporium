//Conatiner that holds main navigation components and handles responsiveness

import React, { Component } from 'react'

//CSS
import classes from './Layout.module.css';
//

//Components
import Aux from '../../hoc/Auxillary/Auxillary';
import ParallaxContainer from '../ParallaxContainer/ParallaxContainer';
//

export default class Layout extends Component {
    render() {
        return (
            <Aux>
                <main className={classes.Content}>
                    {/* <ParallaxContainer> */}
                        <div className={classes.InDevelopmentBanner}>
                            <h1>Website In Development...</h1>
                        </div>
                        {this.props.children}
                    {/* </ParallaxContainer> */}
                </main>
            </Aux>
        )
    }
}