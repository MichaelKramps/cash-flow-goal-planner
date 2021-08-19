import React from 'react';
import Shared from "../components/Shared/Shared";
import './PaymentForm.css';
import PlannerQueries from "../graphql/PlannerQueries";

class PaymentForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: this.props.emailAddress || "",
            allowedToPay: false
        }

        this.updateEmail = this.updateEmail.bind(this);
        this.emailClass = this.emailClass.bind(this);
    }

    updateEmail(event) {
        this.setState({email: event.target.value}, () => {
            this.attemptToEnablePayButton();
        });
    }

    emailClass() {
        if (this.state.email === "") {
            return "StripeElement--empty";
        }
        return "";
    }

    attemptToEnablePayButton() {
        if (this.emailMatchesAccount()) {
            this.setState({allowedToPay: true})
        } else {
            this.setState({allowedToPay: false})
        }
    }

    async emailMatchesAccount() {
        let gameState = await PlannerQueries.findPlannerByUser(this.state.email);
        console.log(gameState)
        return false;
    }

    successfulPayment() {
        console.log("successful payment was made")
    }

    render() {
        return (
            <div id="stripe-payment-form" className={"stripe-payment-form " + Shared.determineVisibility(this.props)}>
                <div className="payment-details">
                    <h2>Purchase access to Cash Flow Handbook</h2>
                    <div className="payment-row">
                        <div className="payment-field">
                            <input id={"payment-email-address"}
                                className={"input " + this.emailClass()}
                                value={this.state.email}
                                onChange={this.updateEmail} />
                            <label htmlFor="payment-email-address">Email Address: </label>
                            <div className="baseline"></div>
                        </div>
                    </div>
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
                    <button id="submit-payment" onClick={this.onSubmit} disabled={this.state.allowedToPay}>
                        <div className="spinner invisible" id="spinner"></div>
                        Pay Now
                    </button>
                    <span id="signal-successful-payment" className="hide-offscreen" onClick={this.successfulPayment}>&nbsp;</span>
                    <p id="card-error" role="alert"></p>
                    <p className="result-message invisible">
                        Payment succeeded, see your completed payment <a href="#">here</a>.
                    </p>
                </div>
            </div>
        )
    }
}

export default PaymentForm;