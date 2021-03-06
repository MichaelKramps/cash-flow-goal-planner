import React from 'react';
import './PaymentForm.css';
import PlannerQueries from "../graphql/PlannerQueries";
import UserEntryForm from "./UserEntryForm";

class PaymentForm extends React.Component {

    constructor(props) {
        super(props);

        let email = "";

        const url = window.location.href;
        const urlParts = url.split("email=");
        if (urlParts.length > 1) {
            email = decodeURIComponent(urlParts[urlParts.length - 1]);
        }

        this.state = {
            email: email,
            errorMessage: "",
            plannerId: "",
            allowedToPay: false
        }

        this.updateEmail = this.updateEmail.bind(this);
        this.emailClass = this.emailClass.bind(this);
        this.emailMatchesAccount = this.emailMatchesAccount.bind(this);
        this.successfulPayment = this.successfulPayment.bind(this);
    }

    updateEmail(event) {
        this.setState({email: event.target.value}, async () => {
            await this.emailMatchesAccount();
        });
    }

    emailClass() {
        if (this.state.email === "") {
            return "StripeElement--empty";
        }
        return "";
    }

    async emailMatchesAccount() {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRegex.test(this.state.email)) {
            let queryResult = await PlannerQueries.findPlannerByUser(this.state.email);
            if (queryResult.data.listPlanners.items.length > 0) {
                const newState = {};
                newState.errorMessage = "";
                const planner = queryResult.data.listPlanners.items[0];
                newState.plannerId = planner.id;
                newState.email = this.state.email;
                newState.allowedToPay = true;
                this.setState(newState);
            } else {
                const newState = {};
                newState.errorMessage = "We could not find an account associated with the email address you entered.";
                newState.plannerId = "";
                newState.email = this.state.email;
                newState.allowedToPay = false;
                this.setState(newState);
            }
        } else {
            const newState = {};
            newState.errorMessage = "";
            newState.plannerId = "";
            newState.email = this.state.email;
            newState.allowedToPay = false;
            this.setState(newState);
        }
    }

    errorMessage() {
        if (this.state.errorMessage) {
            return (
                <p>{this.state.errorMessage}</p>
            )
        }
        return null;
    }

    async successfulPayment() {
        await PlannerQueries.updatePlannerExpires(this.state.plannerId, "never");
    }

    async componentDidMount() {
        await this.emailMatchesAccount();
    }

    render() {
        return (
            <UserEntryForm id="stripe-payment-form" className="stripe-payment-form" visible={this.props.visible}>
                <div className="payment-details">
                    <h2>Lifetime access to The Investor's Handbook</h2>
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
                        Pay $20
                        <div className="spinner invisible" id="spinner"></div>
                    </button>
                    <span id="signal-successful-payment" className="hide-offscreen" onClick={this.successfulPayment}>&nbsp;</span>
                    <p id="card-error" role="alert"></p>
                    <p className="result-message invisible">
                        Payment succeeded, you may now log in to the <a href="/">cash flow planner</a>.
                    </p>
                    {this.errorMessage()}
                </div>
            </UserEntryForm>
        )
    }
}

export default PaymentForm;