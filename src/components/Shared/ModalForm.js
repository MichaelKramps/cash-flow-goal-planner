import React from 'react';
import './ModalForm.css';

class ModalForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal-form">
                <div className="modal-curtain" onClick={this.props.onSubmission}></div>
                <form onSubmit={this.props.onSubmission}>
                    {this.props.children}
                </form>
            </div>
        );
    }
}

export default ModalForm;