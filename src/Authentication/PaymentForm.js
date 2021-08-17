import React from 'react';
import Shared from "../components/Shared/Shared";

class PaymentForm extends React.Component {


    render() {
        return (
            <form className={"stripe-payment-form " + Shared.determineVisibility(this.props)} onSubmit={this.onSubmit}>
                <div id="card-element"></div>
                <button id="submit">
                    <div className="spinner invisible" id="spinner"></div>
                    <span id="button-text">Pay now</span>
                </button>
                <p id="card-error" className="invisible" role="alert"></p>
                <p className="result-message invisible">
                    Payment succeeded
                </p>
            </form>
        )
    }
}

export default PaymentForm;