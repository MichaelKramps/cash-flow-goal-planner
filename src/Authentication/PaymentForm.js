import React from 'react';
import Shared from "../components/Shared/Shared";
import './PaymentForm.css';

class PaymentForm extends React.Component {

    onSubmit(data) {
        console.log("hello Michael")
    }


    render() {
        return (
            <form id="stripe-payment-form" className={"stripe-payment-form " + Shared.determineVisibility(this.props)} onSubmit={this.onSubmit}>
                <div className="payment-details">
                    <h2>Purchase access to Cash Flow Handbook</h2>
                    <div className="payment-row">
                        <div className="payment-field">
                            <div id="card-number" className="input empty"></div>
                            <label htmlFor="card-number" data-tid="elements_examples.form.card_number_label">Card
                                number</label>
                            <div className="baseline"></div>
                        </div>
                    </div>
                    <div className="payment-row">
                        <div className="payment-field">
                            <div id="card-expiry" className="input empty"></div>
                            <label htmlFor="card-expiry"
                                   data-tid="elements_examples.form.card_expiry_label">Expiration</label>
                            <div className="baseline"></div>
                        </div>
                        <div className="payment-field">
                            <div id="card-cvc" className="input empty"></div>
                            <label htmlFor="card-cvc" data-tid="elements_examples.form.card_cvc_label">CVC</label>
                            <div className="baseline"></div>
                        </div>
                    </div>
                    <button id="submit-payment">
                        <div className="spinner invisible" id="spinner"></div>
                        <input type="submit" id="button-text" value="Pay now" />
                    </button>
                    <p id="card-error" role="alert"></p>
                    <p className="result-message invisible">
                        Payment succeeded
                    </p>
                </div>
            </form>
        )
    }
}

export default PaymentForm;