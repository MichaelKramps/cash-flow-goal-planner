import React from 'react';
import './Modal.css';
import Shared from './Shared';

class Modal extends React.Component {

    render() {
        return (
            <div className={"modal " + this.props.className + " " + Shared.determineVisibility(this.props)}>
                <div className="modal-curtain" onClick={this.props.onSubmission}></div>
                <div className="modal-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Modal;