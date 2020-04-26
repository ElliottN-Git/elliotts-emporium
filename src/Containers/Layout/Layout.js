//Conatiner that holds main navigation components and handles responsiveness

import React, { Component } from 'react'

//CSS
import classes from './Layout.module.css';
//

//Components
import NavBar from '../../Components/Navigation/NavBar';
import Aux from '../../hoc/Auxillary/Auxillary';


export default class Layout extends Component {
    render() {
        return (
            <Aux>
                <NavBar />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}