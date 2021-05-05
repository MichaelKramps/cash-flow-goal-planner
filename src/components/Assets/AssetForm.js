import React from 'react';

class AssetForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            type: this.props.type,
            initialInvestment: this.props.initialInvestment,
            cashFlow: this.props.cashFlow
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleInitialInvestmentChange = this.handleInitialInvestmentChange.bind(this);
        this.handleCashFlowChange = this.handleCashFlowChange.bind(this);
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value,
            type: this.state.type,
            initialInvestment: this.state.initialInvestment,
            cashFlow: this.state.cashFlow
        });
    }

    handleTypeChange(event) {
        this.setState({
            name: this.state.name,
            type: event.target.value,
            initialInvestment: this.state.initialInvestment,
            cashFlow: this.state.cashFlow
        });
    }

    handleInitialInvestmentChange(event) {
        this.setState({
            name: this.state.name,
            type: this.state.type,
            initialInvestment: event.target.value,
            cashFlow: this.state.cashFlow
        });
    }

    handleCashFlowChange(event) {
        this.setState({
            name: this.state.name,
            type: this.state.type,
            initialInvestment: this.state.initialInvestment,
            cashFlow: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmission(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Name: </label><input value={this.state.name} onChange={this.handleNameChange} />
                </div>
                <div>
                    <label>Type: </label>
                    <select value={this.state.type} onChange={this.handleTypeChange}>
                        <option value="">Select an investment type</option>
                        <option value="Short Term Rental">Short Term Rental</option>
                        <option value="Long Term Rental">Long Term Rental</option>
                        <option value="Business">Business</option>
                        <option value="Stock Portfolio">Stock Portfolio</option>
                        <option value="Retirement Account">Retirement Account</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Initial Investment: </label><input value={this.state.initialInvestment} type="number" onChange={this.handleInitialInvestmentChange} />
                </div>
                <div>
                    <label>Monthly Cash Flow: </label><input value={this.state.cashFlow} type="number" onChange={this.handleCashFlowChange} />
                </div>
                <input type="submit" value="Add Asset" />
            </form>
        );
    }
}

export default AssetForm;