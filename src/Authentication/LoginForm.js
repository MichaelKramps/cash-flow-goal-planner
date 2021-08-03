import React from 'react';
import Authentication from "./Authentication";

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            view: this.props.view || "sign-in",
            email: this.props.email,
            password: this.props.password
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
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

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    async handleSignUp() {
        await Authentication.signUp(this.state.email, this.state.password)
    }

    async handleSignIn() {
        await Authentication.signIn(this.state.email, this.state.password)
    }

    render() {
        return (
            <React.Fragment>
                <div className={this.determineVisible("sign-in")}>
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
                    <input
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />
                    <input
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                    />
                    <a href="#" onClick={(e) => {e.preventDefault(); this.setView("sign-in")}}>Sign in</a>
                    <button onClick={this.handleSignUp}>Sign up</button>
                </div>
            </React.Fragment>
        )
    }
}

export default LoginForm;