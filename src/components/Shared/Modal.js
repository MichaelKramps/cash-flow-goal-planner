import React from 'react';
import './Modal.css';

class Modal extends React.Component {

    render() {
        let visible = this.props.visible ? "visible" : "";
        return (
            <div className={"modal " + visible}>
                <div className="modal-curtain" onClick={this.props.onSubmission}></div>
                {this.props.children}
            </div>
        );
    }
}

export default Modal;