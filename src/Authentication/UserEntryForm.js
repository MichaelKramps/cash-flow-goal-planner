import React from 'react';
import './UserEntryForm.css';
import Shared from "../components/Shared/Shared";

class UserEntryForm extends React.Component {

    render() {
        return (
            <div id={this.props.id} className={"user-entry-form " + this.props.className + " " + Shared.determineVisibility(this.props)}>
                <div className="user-entry-form-curtain" onClick={this.props.onSubmission}></div>
                <div className="user-entry-form-content">
                    <div>
                        {this.props.children}
                    </div>
                    <div className="promotional-content">
                        <h3>The Investor's Handbook</h3>
                        <p>It's a resource made for cash flow investors. Set investing goals based on your own financial situation, track your current investments, and get step by step guides for acquiring your next investment.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserEntryForm;