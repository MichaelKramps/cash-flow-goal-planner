import React from 'react';
import './UserEntryForm.css';
import Shared from "../components/Shared/Shared";

class UserEntryForm extends React.Component {

    render() {
        return (
            <div id={this.props.id} className={"user-entry-form " + this.props.className + " " + Shared.determineVisibility(this.props)}>
                <div className="user-entry-form-curtain" onClick={this.props.onSubmission}></div>
                <div className="user-entry-form-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default UserEntryForm;