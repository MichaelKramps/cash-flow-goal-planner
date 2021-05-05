import React from 'react';
import Modal from "./Modal";

class ModalForm extends React.Component {

    render() {
        return (
            <Modal visible={this.props.visible} onSubmission={this.props.onSubmission}>
                <form onSubmit={this.props.onSubmission}>
                    {this.props.children}
                </form>
            </Modal>
        );
    }
}

export default ModalForm;