import React, { Component } from 'react';

//CSS and assets
import classes from './ContentBlock.module.css';

//Components
import Aux from '../../hoc/Auxillary/Auxillary';
import Background from '../../Components/UI/Background/Background';


export class ContentBlock extends Component {
    render() {
        return (
            <Aux>
                <Background backgroundImage={this.props.backgroundImage}>
                    <div className={classes.ContentBlock}>
                        {this.props.children}
                    </div>
                </Background>
            </Aux>
        )
    }
}

export default ContentBlock;
