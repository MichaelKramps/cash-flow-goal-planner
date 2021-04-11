import React from 'react';
import './AddAsset.css';

class AddAsset extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            type: "",
            initialInvestment: 0,
            cashFlow: 0
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
        this.props.onSubmission(this.state);
        event.preventDefault();

        this.setState({
            name: "",
                type: "",
            initialInvestment: 0,
            cashFlow: 0
        });
    }

    render() {
        return (
            <form className="add-simple-asset" onSubmit={this.handleSubmit}>
                <div><input onChange={this.handleNameChange} /></div>
                <div><input onChange={this.handleTypeChange} /></div>
                <div><input type="number" onChange={this.handleInitialInvestmentChange} /></div>
                <div>
                    <input type="number" onChange={this.handleCashFlowChange} />
                    <input type="submit" value="Add Asset" />
                </div>
            </form>
        );
    }
}

export default AddAsset;