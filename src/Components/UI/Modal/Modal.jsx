import React, { Component } from 'react';

//CSS
import classes from './Modal.module.css';

//Components
import Aux from '../../../hoc/Auxillary/Auxillary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0',
                        zIndex: this.props.show ? '100' : '-1'
                    }}
                >
                    <button type="button" onClick={this.props.modalClosed}>Close</button>
                    <iframe src="https://firebasestorage.googleapis.com/v0/b/elliotts-emporium.appspot.com/o/Elliott%20Nixon%20-%20CV.pdf?alt=media&token=dda90261-ea39-40dc-97a8-bf2f45f7baa8" title="resume PDF"></iframe>
                </div>
            </Aux>
        )
    }
}

export default Modal;