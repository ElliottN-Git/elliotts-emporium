//Conatiner that holds main navigation components and handles responsiveness

import React from 'react';

//CSS
import classes from './Layout.module.css';
//

//Components
import NavBar from '../../Components/Navigation/NavBar';
import Aux from '../../hoc/Auxillary/Auxillary';


const Layout = (props) => {
    return (
        <Aux>
            <NavBar />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout;