import React from 'react';
import Authentication from "./Authentication";

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
    }

    setView(view){
        this.setState({view: view});
    }

    determineVisible(view) {
        return view === this.state.view ? "visible" : "invisible";
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
        try {
            await Authentication.signIn(this.state.email, this.state.password)
            this.setView("confirm-sign-in");
        } catch (error) {
            this.setState({error: error.message});
            if (error.code === "UserNotConfirmedException") {
                this.setView("confirm-sign-in");
            }
            console.log("error signing in:", error);
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className={this.determineVisible("sign-in")}>
                    <h2>Sign in</h2>
                    <label>Email: </label>
                    <input
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />
                    <label>Password: </label>
                    <input
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                    />
                    <a href="#" onClick={(e) => {e.preventDefault(); this.setView("sign-up")}}>Sign up</a>
                    <button onClick={this.handleSignIn}>Sign in</button>
                </div>
                <div className={this.determineVisible("sign-up")}>
                    <h2>Sign up</h2>
                    <label>Email: </label>
                    <input
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />
                    <label>Password: </label>
                    <input
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                    />
                    <a href="#" onClick={(e) => {e.preventDefault(); this.setView("sign-in")}}>Sign in</a>
                    <button onClick={this.handleSignUp}>Sign up</button>
                </div>
                <div className={this.determineVisible("confirm-sign-up")}>
                    <label>Confirmation code: </label>
                    <input
                        value={this.state.confirmationCode}
                        onChange={this.handleConfirmationCodeChange}
                    />
                    <a href="#" onClick={this.resendCode}>Send code again</a>
                    <button onClick={this.handleConfirmSignUp}>Confirm code</button>
                </div>
            </React.Fragment>
        )
    }
}

export default LoginForm;