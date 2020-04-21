import React, { Component } from 'react';

//CSS
import classes from './Modal.module.css';
//

//Components
import Aux from '../../../hoc/Auxillary/Auxillary';
//

class Modal extends Component {

    render() {
        return (
            <Aux>
                <div
                    className={classes.Modal}
                    style={{transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'}}
                >
                </div>
            </Aux>
        )
    }
}

export default Modal;