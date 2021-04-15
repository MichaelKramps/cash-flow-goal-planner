import React from 'react';
import ModalForm from "../Shared/ModalForm";

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
    }

    render() {
        return (
            <ModalForm visible={this.props.visible} onSubmission={this.handleSubmit}>
                <label>Name: </label><input value={this.state.name} onChange={this.handleNameChange} />
                <label>Type: </label><input value={this.state.type} onChange={this.handleTypeChange} />
                <label>Initial Investment: </label><input value={this.state.initialInvestment} type="number" onChange={this.handleInitialInvestmentChange} />
                <label>Monthly Cash Flow: </label><input value={this.state.cashFlow} type="number" onChange={this.handleCashFlowChange} />
                <input type="submit" value="Add Asset" />
            </ModalForm>
        );
    }
}

export default AssetForm;