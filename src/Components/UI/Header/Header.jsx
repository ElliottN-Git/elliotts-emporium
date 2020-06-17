//Component that holds the header image

import React, { Component } from 'react';

//CSS
import classes from './Header.module.css';

import heroImg from '../../../assets/images/heroImgBeach.png';
import headerText from '../../../assets/images/heyImElliottTextTransparentBG.png';
import headShot from '../../../assets/images/EN-headshotCircle.png';
import enhancedBackground from '../../../assets/images/headerImgSpace.jpg';

class Header extends Component {

    render() {
        return (
            // <div className={classes.Header} style={{backgroundImage: this.state.bgLoaded ? `url(${enhancedBackground})` : ''}}>
            //     <img src={enhancedBackground} alt="enhBG" onLoad={() => this.setState({bgLoaded: true})}
            //     style={{
            //         visibility: "hidden",
            //         position: "fixed",
            //         height: "0",
            //         width: "0"}} />
            //     <img src={headShot} alt="Headshot" 
            //         onLoad={() => {
            //             this.setState({headShotLoaded: true});
            //         }}/>
            <div className={classes.Header} style={{backgroundImage: `url(${heroImg})`}}>
                <div className={classes.Blurb}>
                    <h3>Hey, I'm</h3>
                    <h1>ELLIOTT NIXON</h1>
                    {/* <p>and what follows is why I think you should hire me...</p> */}
                </div>
                {/* <img src={headerText} /> */}
            </div>
        )
    }
}
export default Header;