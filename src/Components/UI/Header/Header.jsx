//Component that holds the header image

import React, { Component } from 'react';

//CSS
import classes from './Header.module.css';
import headShot from '../../../assets/images/EN-headshotCircle.png';
import enhancedBackground from '../../../assets/images/headerImgSpace.jpg';

class Header extends Component {
    state = {
        bgLoaded: false,
        headShotLoaded: false
    }

    render() {
        return (
            <div className={classes.Header} style={{backgroundImage: this.state.bgLoaded ? `url(${enhancedBackground})` : ''}}>
                <img src={enhancedBackground} alt="enhBG" onLoad={() => this.setState({bgLoaded: true})}
                style={{
                    visibility: "hidden",
                    position: "fixed",
                    height: "0",
                    width: "0"}} />
                <img src={headShot} alt="Headshot" 
                    onLoad={() => {
                        this.setState({headShotLoaded: true});
                    }}/>
                <h1>Hi! I'm Elliott.</h1>
                {this.props.children}
            </div>
        )
    }
}
export default Header;