import React, { Component } from 'react';

//CSS and assets
import classes from './ContentBlock.module.css';

//Components
import Aux from '../../hoc/Auxillary/Auxillary';
import Background from '../../Components/UI/Background/Background';


export class ContentBlock extends Component {
    render() {
        let heightAdjust = {};
        if (this.props.topBlock) {
            heightAdjust = { height: "100vh" };
        }

        return (
            <Aux>
                <Background
                    backgroundType={this.props.backgroundType}
                    backgroundImage={this.props.backgroundImage}
                    backgroundColour={this.props.backgroundColour}
                >
                    <div className={classes.ContentBlock} style={heightAdjust}>
                        {this.props.children}
                    </div>
                </Background>
            </Aux>
        )
    }
}

export default ContentBlock;
