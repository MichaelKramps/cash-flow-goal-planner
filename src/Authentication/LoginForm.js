import React from 'react';
import Authentication from "./Authentication";
import './LoginForm.css';
import Shared from "../components/Shared/Shared";

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            view: this.props.view || "sign-in",
            email: this.props.email,
            confirmationCode: this.props.confirmationCode,
            password: this.props.password,
            error: ""
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleConfirmationCodeChange = this.handleConfirmationCodeChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
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
        await Authentication.confirmSignUp(this.state.email, this.state.confirmationCode)
    }

    async resendCode() {
        await Authentication.resendConfirmationCode(this.state.email)
    }

    async handleSignIn() {
        this.setState({error: null});
        try {
            await Authentication.signIn(this.state.email, this.state.password);
            this.props.updateUserLoggedIn(Authentication.currentUser(), this.state.email);
        } catch (error) {
            if (!/pending|Pending/.test(error)) {
                this.setState({error: error.message});
                if (error.code === "UserNotConfirmedException") {
                    this.setView("confirm-sign-up");
                }
                console.log("error signing in:", error);
            }
        }
    }

    async onSubmit(e) {
        e.preventDefault();
        if (this.state.view === "sign-in") {
            await this.handleSignIn();
        } else if (this.state.view === "sign-up") {
            await this.handleSignUp();
        } else if (this.state.view === "confirm-sign-up") {
            await this.handleConfirmSignUp();
        }
    }

    render() {
        return (
            <form className={"login-container " + Shared.determineVisibility(this.props)} onSubmit={this.onSubmit}>
                <div className={this.determineVisible("sign-in")}>
                    <h2>Sign in</h2>
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
                    <p>
                        Don't have an account?&nbsp;
                        <a href="#" onClick={(e) => {e.preventDefault(); this.setView("sign-up")}}>Sign up</a>
                    </p>
                    <button onClick={this.handleSignIn}>Sign in</button>
                </div>
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
                    <p>
                        Already have an account?&nbsp;
                        <a href="#" onClick={(e) => {e.preventDefault(); this.setView("sign-in")}}>Sign in</a>
                    </p>
                    <button onClick={this.handleSignUp}>Sign up</button>
                </div>
                <div className={this.determineVisible("confirm-sign-up")}>
                    <h2>Confirm your email</h2>
                    {this.printError()}
                    <div className="login-input-container">
                        <label>Confirmation code: </label>
                        <input
                            value={this.state.confirmationCode}
                            onChange={this.handleConfirmationCodeChange}
                        />
                    </div>
                    <a href="#" onClick={this.resendCode}>Send code again</a>
                    <button onClick={this.handleConfirmSignUp}>Confirm code</button>
                </div>
            </form>
        )
    }
}

export default LoginForm;