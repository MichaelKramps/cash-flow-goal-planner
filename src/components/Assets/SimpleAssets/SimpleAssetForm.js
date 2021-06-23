import React from 'react';
import FormUtils from "../../Shared/FormUtils";

class SimpleAssetForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            type: this.props.type,
            initialInvestment: this.props.initialInvestment,
            cashFlow: this.props.cashFlow,
            cashFlowIncrease: this.props.cashFlowIncrease || 3
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleInitialInvestmentChange = this.handleInitialInvestmentChange.bind(this);
        this.handleCashFlowChange = this.handleCashFlowChange.bind(this);
        this.handleCashFlowIncreaseChange = this.handleCashFlowIncreaseChange.bind(this);
        this.formIsValid = this.formIsValid.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleTypeChange(event) {
        this.setState({type: event.target.value});
    }

    handleInitialInvestmentChange(event) {
        this.setState({initialInvestment: event.target.value});
    }

    handleCashFlowChange(event) {
        this.setState({cashFlow: event.target.value});
    }

    handleCashFlowIncreaseChange(event) {
        this.setState({cashFlowIncrease: event.target.value});
    }

    formIsValid() {
        return this.state.name && this.state.type && this.state.initialInvestment && this.state.cashFlow;
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.formIsValid()) {
            this.props.onSubmission(this.state);
        } else {
            alert("All fields are required.")
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Tell me about your new asset</h3>
                <div className="calculator-input-container">
                    <label>Investment Name: </label><input value={this.state.name} onChange={this.handleNameChange} />
                </div>
                <div className="calculator-input-container">
                    <label>Type: </label>
                    <select value={this.state.type} onChange={this.handleTypeChange}>
                        <option value=""></option>
                        <option value="Short Term Rental">Short Term Rental</option>
                        <option value="Long Term Rental">Long Term Rental</option>
                        <option value="Business">Business</option>
                        <option value="Stock Portfolio">Stock Portfolio</option>
                        <option value="Retirement Account">Retirement Account</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="calculator-input-container">
                    <label>Initial Investment: </label>
                    <input
                        value={this.state.initialInvestment}
                        onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                        onChange={this.handleInitialInvestmentChange}
                    />
                </div>
                <div className="calculator-input-container">
                    <label>Monthly Cash Flow: </label>
                    <input
                        value={this.state.cashFlow}
                        onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                        onChange={this.handleCashFlowChange}
                    />
                </div>
                <div className="calculator-input-container">
                    <label>Yearly Percentage Increase to Monthly Cash Flow: </label>
                    <input
                        value={this.state.cashFlowIncrease}
                        onKeyDown={(event) => {FormUtils.validateFloatInput(event, this.state.cashFlowIncrease)}}
                        defaultValue={3}
                        onChange={this.handleCashFlowIncreaseChange}
                    />&nbsp;%
                </div>
                <input className="submit-simple-asset" type="submit" value="Submit Asset" />
            </form>
        );
    }
}

export default SimpleAssetForm;