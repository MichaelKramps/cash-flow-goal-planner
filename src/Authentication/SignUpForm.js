import React from 'react';
import Authentication from "./Authentication";
import './SignUpForm.css';
import Shared from "../components/Shared/Shared";
import PlannerQueries from "../graphql/PlannerQueries";
import UserEntryForm from "./UserEntryForm";

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
        this.setState({email: event.target.value}, () => {
            this.props.updateEmail(event.target.value)
        });
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
        }
    }

    async handleConfirmSignUp() {
        let confirm = await Authentication.confirmSignUp(this.state.email, this.state.confirmationCode)
        if (confirm === "SUCCESS") {
            await PlannerQueries.createPlanner({}, this.state.email, "immediately");
            window.location.href = '/payment';
        } else {
            this.setState({error: confirm.message});
        }
    }

    async resendCode() {
        await Authentication.resendConfirmationCode(this.state.email)
    }

    render() {
        return (
            <UserEntryForm className="sign-up-form" visible={this.props.visible}>
                <div className={"sign-up " + this.determineVisible("sign-up")}>
                    <h2>Create a new account</h2>
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
                    <p>Already have an account?&nbsp;
                        <a href="#"
                           onClick={(e) => {e.preventDefault();this.setState({view: "confirm-sign-up"})}}>
                            confirm your email address
                        </a>
                        &nbsp;or&nbsp;
                        <a href="/payment">
                            pay for access
                        </a>
                    </p>
                </div>
                <div className={"confirm-sign-up " + this.determineVisible("confirm-sign-up")}>
                    <h2>Confirm your email address</h2>
                    {this.printError()}
                    <div>
                        <p>A confirmation code has been sent to your email.</p>
                        <div className="login-input-container">
                            <label>My email: </label>
                            <input
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                            />
                        </div>
                        <div className="login-input-container">
                            <label>Confirmation code: </label>
                            <input
                                value={this.state.confirmationCode}
                                onChange={this.handleConfirmationCodeChange}
                            />
                        </div>
                    </div>
                    <button onClick={this.handleConfirmSignUp}>
                        Confirm code
                    </button>
                    <p>
                        <a href="#" onClick={this.resendCode}>Send code again</a>
                    </p>
                </div>
            </UserEntryForm>
        )
    }
}

export default SignUpForm;