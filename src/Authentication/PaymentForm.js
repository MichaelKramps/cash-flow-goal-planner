import React from 'react';
import Shared from "../components/Shared/Shared";
import './PaymentForm.css';
import PlannerQueries from "../graphql/PlannerQueries";

class PaymentForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: this.props.emailAddress || "",
            errorMessage: "",
            allowedToPay: false
        }

        this.updateEmail = this.updateEmail.bind(this);
        this.emailClass = this.emailClass.bind(this);
    }

    updateEmail(event) {
        this.setState({email: event.target.value}, async () => {
            await this.attemptToEnablePayButton();
        });
    }

    emailClass() {
        if (this.state.email === "") {
            return "StripeElement--empty";
        }
        return "";
    }

    async attemptToEnablePayButton() {
        if (await this.emailMatchesAccount()) {
            this.setState({allowedToPay: true})
        } else {
            this.setState({allowedToPay: false})
        }
    }

    async emailMatchesAccount() {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRegex.test(this.state.email)) {
            let queryResult = await PlannerQueries.findPlannerByUser(this.state.email);
            if (queryResult.data.listPlanners.items.length > 0) {
                this.setState({errorMessage: ""});
                return true;
            }
            this.setState({errorMessage: "We could not find an account associated with the email address you" +
                    " entered."});
        }
        return false;
    }

    errorMessage() {
        if (this.state.errorMessage) {
            return (
                <p>{this.state.errorMessage}</p>
            )
        }
        return null;
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
                    <button id="submit-payment" disabled={!this.state.allowedToPay}>
                        Pay Now
                        <div className="spinner invisible" id="spinner"></div>
                    </button>
                    <span id="signal-successful-payment" className="hide-offscreen" onClick={this.successfulPayment}>&nbsp;</span>
                    <p id="card-error" role="alert"></p>
                    <p className="result-message invisible">
                        Payment succeeded, see your completed payment <a href="#">here</a>.
                    </p>
                    {this.errorMessage()}
                </div>
            </div>
        )
    }
}

export default PaymentForm;