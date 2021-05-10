import React from 'react';
import './Modal.css';

class Modal extends React.Component {

    render() {
        let visible = this.props.visible ? "visible " : "";
        return (
            <div className={"modal " + visible + this.props.className}>
                <div className="modal-curtain" onClick={this.props.onSubmission}></div>
                <div className="modal-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Modal;