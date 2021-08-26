import React from 'react';
import Authentication from "./Authentication";
import './LoginForm.css';
import PlannerQueries from "../graphql/PlannerQueries";
import UserEntryForm from "./UserEntryForm";

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: this.props.email,
            password: this.props.password,
            error: "",
            showSpinner: false,
            moreErrorInfo: null
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.checkForFormSubmission = this.checkForFormSubmission.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
    }

    printError() {
        if (this.state.error) {
            return <p className="login-error">*{this.state.error}</p>;
        }
        return null;
    }

    printMoreErrorInfo() {
        if (this.state.moreErrorInfo) {
            return this.state.moreErrorInfo
        }
        return null;
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    spinnerVisible() {
        if (this.state.showSpinner) {
            return "visible";
        }
        return "invisible";
    }

    async checkForFormSubmission(e) {
        if (e.key === "Enter") {
            await this.handleSignIn();
        }
    }

    async handleSignIn() {
        this.setState({error: ""});
        this.setState({moreErrorInfo: ""});
        this.setState({showSpinner: true});
        if (this.state.email && this.state.password) {
            try {
                await Authentication.signIn(this.state.email, this.state.password);
                const queryResult = await PlannerQueries.findPlannerByUser(this.state.email);
                const planners = queryResult.data.listPlanners.items;
                if (planners.length > 0) {
                    const planner = queryResult.data.listPlanners.items[0];
                    const hasPaid = planner.accessExpires === "never" ? true : false;
                    if (hasPaid) {
                        this.props.updateUserLoggedIn(planner, this.state.email);
                    } else {
                        this.setState({
                            moreErrorInfo: <p className="login-error">You have not yet paid for access, you can pay <a
                                href="/payment">here</a></p>
                        })
                    }
                } else {
                    this.setState({
                        moreErrorInfo: <p className="login-error">There is a problem with your account, please contact
                            me at michael@unboundinvestor.com</p>
                    })
                }
                this.setState({showSpinner: false});
            } catch (error) {
                if (!/pending|Pending/.test(error)) {
                    this.setState({error: error.message});
                    if (error.code === "UserNotConfirmedException") {
                        this.setState({
                            moreErrorInfo: <p className="login-error">If you have already created an account, you
                                must <a href="/signup">confirm your account</a>.</p>
                        })
                    } else if (error.code === "InvalidParameterException") {
                        this.setState({
                            moreErrorInfo: <p className="login-error">Please enter a valid username and password.</p>
                        })
                    } else {
                        this.setState({
                            moreErrorInfo: <p className="login-error">If you are having problems logging in, email michael@unboundinvestor.com</p>
                        })
                    }
                }
                this.setState({showSpinner: false});
            }
        } else {
            this.setState({
                moreErrorInfo: <p className="login-error">Please enter a username and a password.</p>
            })
            this.setState({showSpinner: false});
        }
    }

    render() {
        return (
            <UserEntryForm className="login-container" visible={this.props.visible}>
                <div className="login-form">
                    <h2>Sign in to The Investor's Handbook</h2>
                    {this.printError()}
                    {this.printMoreErrorInfo()}
                    <div className="login-input-container">
                        <label>Email: </label>
                        <input
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            onKeyPress={this.checkForFormSubmission}
                        />
                    </div>
                    <div className="login-input-container">
                        <label>Password: </label>
                        <input
                            value={this.state.password}
                            type="password"
                            onChange={this.handlePasswordChange}
                            onKeyPress={this.checkForFormSubmission}
                        />
                    </div>
                    {/*<p>forgot your password?</p>*/}
                    <button onClick={this.handleSignIn}>
                        Sign in
                        <div className={"spinner " + this.spinnerVisible()}></div>
                    </button>
                    <p>If you don't have an account, <a href="/signup">create
                        a new one</a>.</p>
                </div>
            </UserEntryForm>
        )
    }
}

export default LoginForm;