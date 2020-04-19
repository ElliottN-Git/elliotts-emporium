//Conatiner that holds main navigation components and handles responsiveness

import React, { Component } from 'react'
//CSS
import classes from './Layout.module.css';
//

//Components
import Aux from '../../hoc/Auxillary/Auxillary';
//

export default class Layout extends Component {
    render() {
        return (
            <Aux>
                <main className={classes.Content}>
                <h1>Website In Development...</h1>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}