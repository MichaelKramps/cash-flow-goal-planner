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
            password: this.props.password,
            error: ""
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
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

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
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
                    {/*<p>forgot your password?</p>*/}
                    <button onClick={this.handleSignIn}>Sign in</button>
                </div>
            </form>
        )
    }
}

export default LoginForm;