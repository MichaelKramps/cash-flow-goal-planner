import React from 'react';
import Authentication from "./Authentication";
import FormUtils from "../components/Shared/FormUtils";

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: this.props.email,
            password: this.props.password
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    async handleSignUp() {
        console.log(this.state)
        await Authentication.signUp(this.state.email, this.state.password)
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <input
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                />
                <button onClick={this.handleSignUp}>Sign up</button>
            </div>
        )
    }
}

export default LoginForm;