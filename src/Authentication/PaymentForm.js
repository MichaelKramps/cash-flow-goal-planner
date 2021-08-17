import React from 'react';
import Shared from "../components/Shared/Shared";

class PaymentForm extends React.Component {

    onSubmit(data) {
        console.log("hello Michael")
    }


    render() {
        return (
            <form id="stripe-payment-form" className={"stripe-payment-form " + Shared.determineVisibility(this.props)} onSubmit={this.onSubmit}>
                <h2>Purchase access to Cash Flow Handbook</h2>
                <div id="card-element"></div>
                <button id="submit">
                    <div className="spinner invisible" id="spinner"></div>
                    <input type="submit" id="button-text" value="Pay now" />
                </button>
                <p id="card-error" role="alert"></p>
                <p className="result-message invisible">
                    Payment succeeded
                </p>

            </form>
        )
    }
}

export default PaymentForm;