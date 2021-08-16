import React from 'react';
import Authentication from "./Authentication";
import './SignUpForm.css';
import Shared from "../components/Shared/Shared";

class SignUpForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            view: this.props.view || "sign-up",
            email: this.props.email,
            confirmationCode: this.props.confirmationCode,
            password: this.props.password,
            error: ""
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleConfirmationCodeChange = this.handleConfirmationCodeChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleConfirmSignUp = this.handleConfirmSignUp.bind(this);
        this.resendCode = this.resendCode.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    setView(view){
        this.setState({view: view});
    }

    determineVisible(view) {
        return view === this.state.view ? "visible" : "invisible";
    }

    printError() {
        if (this.state.error) {
            return <p className="login-error">*{this.state.error}</p>;
        }
        return null;
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleConfirmationCodeChange(event) {
        this.setState({confirmationCode: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    async handleSignUp() {
        this.setState({error: null});
        try {
            await Authentication.signUp(this.state.email, this.state.password)
            this.setView("confirm-sign-up");
        } catch (error) {
            this.setState({error: error.message});
            if (error.code === "UsernameExistsException") {
                this.setView("confirm-sign-up");
            }
            console.log(error);
        }
    }

    async handleConfirmSignUp() {
        let success = await Authentication.confirmSignUp(this.state.email, this.state.confirmationCode)
        if (success) {
            this.setView("sign-in");
        }
    }

    async createStripeCheckout() {
        const checkoutUrl = "https://tv4p255fj1.execute-api.us-east-1.amazonaws.com/staging/request-stripe-checkout";

        console.log("requesting checkout url");

        await fetch(checkoutUrl, {
            method: 'POST'
        })
    }

    async resendCode() {
        await Authentication.resendConfirmationCode(this.state.email)
    }

    async onSubmit(e) {
        e.preventDefault();
        if (this.state.view === "sign-up") {
            await this.handleSignUp();
        } else if (this.state.view === "confirm-sign-up") {
            await this.handleConfirmSignUp();
        }
    }

    render() {
        return (
            <form className={"sign-up-form " + Shared.determineVisibility(this.props)} onSubmit={this.onSubmit}>
                <div className={this.determineVisible("sign-up")}>
                    <h2>Sign up</h2>
                    {this.printError()}
                    <div className="login-input-container">
                        <label>Email: </label>
                        <input
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                        />
                    </div>
                    <div className="login-input-container">
                        <label>Password: </label>
                        <input
                            value={this.state.password}
                            type="password"
                            onChange={this.handlePasswordChange}
                        />
                    </div>
                    <button onClick={this.handleSignUp}>Sign up</button>
                </div>
                <div className={this.determineVisible("confirm-sign-up")}>
                    <h2>Confirm your email</h2>
                    {this.printError()}
                    <div className="login-input-container">
                        <p>A confirmation code has been sent to your email.</p>
                        <label>Confirmation code: </label>
                        <input
                            value={this.state.confirmationCode}
                            onChange={this.handleConfirmationCodeChange}
                        />
                    </div>
                    <button onClick={this.handleConfirmSignUp}>Confirm code</button>
                    <a href="#" onClick={this.resendCode}>Send code again</a>
                </div>
                <div className={this.determineVisible("pay")}>
                    <h2>Pay</h2>
                    <input type="submit" value="Pay $25 for access" onClick={this.createStripeCheckout} />
                </div>
            </form>
        )
    }
}

export default SignUpForm;