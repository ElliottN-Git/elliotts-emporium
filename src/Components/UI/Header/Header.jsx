//Component that holds the header image

import React, { Component } from 'react';

//CSS
import classes from './Header.module.css';
import headShot from '../../../assets/images/EN-headshotCircle.png';
import enhancedBackground from '../../../assets/images/headerImgSpace.jpg';

let style = {};

console.log("enhancedBackground imported");
console.log(enhancedBackground);
style = { backgroundImage: `url(${enhancedBackground})` };


class Header extends Component {
    render() {
        return (
            <div className={classes.Header} style={style}>
                <img src={headShot} alt="Headshot" /> {/* Placeholder image */}
                <h1>Hi! I'm Elliott.</h1>
                {this.props.children}
            </div>
        )
    }
}
export default Header;