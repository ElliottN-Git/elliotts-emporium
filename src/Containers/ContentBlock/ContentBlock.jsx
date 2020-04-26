import React, { Component } from 'react';

//CSS
import classes from './ContentBlock.module.css';

//Components
import Aux from '../../hoc/Auxillary/Auxillary';
import Background from '../../Components/UI/Backgrounds/Background';

import backgroundImage from '../../assets/images/testDynamicBG.jpg'

export class ContentBlock extends Component {
    render() {
        return (
            <Aux>
                <Background backgroundImage = {backgroundImage}>
                </Background>
            </Aux>
        )
    }
}

export default ContentBlock;
