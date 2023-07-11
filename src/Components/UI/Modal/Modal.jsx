import React, { Component } from 'react';

//CSS
import classes from './Modal.module.css';

//Components
import Aux from '../../../hoc/Auxillary/Auxillary';
import Backdrop from '../Backdrop/Backdrop';
//import ResumePDF from '../../../assets/pdfs/Elliott Nixon - CV.pdf';

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
                    <iframe src={this.props.modalLink} title="Resumé PDF"></iframe>
                </div>
            </Aux>
        )
    }
}

export default Modal;