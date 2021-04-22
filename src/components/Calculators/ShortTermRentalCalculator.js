import React from 'react';
import './ShortTermRentalCalculator.css'

class ShortTermRentalCalculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            monthlyIncome: this.props.monthlyIncome || 0,
            mortgage: this.props.mortgage,
            utilities: this.props.utilities,
            maintenance: this.props.maintenance,
            cleaning: this.props.cleaning,
            supplies: this.props.supplies,
            otherExpenses: this.props.otherExpenses,
            cashFlow: 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMonthlyIncomeChange = this.handleMonthlyIncomeChange.bind(this);
        this.handleMortgageChange = this.handleMortgageChange.bind(this);
        this.handleUtilitiesChange = this.handleUtilitiesChange.bind(this);
        this.handleMaintenanceChange = this.handleMaintenanceChange.bind(this);
        this.handleCleaningChange = this.handleCleaningChange.bind(this);
        this.handleSuppliesChange = this.handleSuppliesChange.bind(this);
        this.handleOtherExpensesChange = this.handleOtherExpensesChange.bind(this);
    }

    handleMonthlyIncomeChange(event) {
        this.setState({monthlyIncome: parseInt(event.target.value)}, () => {
            this.updateCashFlow();
        });
    }

    handleMortgageChange(event) {
        this.setState({mortgage: parseInt(event.target.value)}, () => {
            this.updateCashFlow();
        });
    }

    handleUtilitiesChange(event) {
        this.setState({utilities: parseInt(event.target.value)}, () => {
            this.updateCashFlow();
        });
    }

    handleMaintenanceChange(event) {
        this.setState({maintenance: parseInt(event.target.value)}, () => {
            this.updateCashFlow();
        });
    }

    handleCleaningChange(event) {
        this.setState({cleaning: parseInt(event.target.value)}, () => {
            this.updateCashFlow();
        });
    }

    handleSuppliesChange(event) {
        this.setState({supplies: parseInt(event.target.value)}, () => {
            this.updateCashFlow();
        });
    }

    handleOtherExpensesChange(event) {
        this.setState({mortgage: parseInt(event.target.value)}, () => {
            this.updateCashFlow();
        });
    }

    updateCashFlow() {
        let newCashFlow = this.parseInput(this.state.monthlyIncome);
        newCashFlow -= this.parseInput(this.state.mortgage);
        newCashFlow -= this.parseInput(this.state.utilities);
        newCashFlow -= this.parseInput(this.state.maintenance);
        newCashFlow -= this.parseInput(this.state.cleaning);
        newCashFlow -= this.parseInput(this.state.supplies);
        newCashFlow -= this.parseInput(this.state.otherExpenses);

        this.setState({cashFlow: newCashFlow});
    }

    parseInput(inputValue) {
        return parseInt(inputValue) || 0;
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form className="short-term-rental-calculator">
                <h2>Short Term Rental Calculator</h2>
                <label>Expected Monthly Income</label><input value={this.state.monthlyIncome} type="number" onChange={this.handleMonthlyIncomeChange} />
                <label>Mortgage Payment</label><input value={this.state.mortgage} type="number" onChange={this.handleMortgageChange} />
                <label>Utilities</label><input value={this.state.utilities} type="number" onChange={this.handleUtilitiesChange} />
                <label>Maintenance</label><input value={this.state.maintenance} type="number" onChange={this.handleMaintenanceChange} />
                <label>Cleaning</label><input value={this.state.cleaning} type="number" onChange={this.handleCleaningChange} />
                <label>Supplies</label><input value={this.state.supplies} type="number" onChange={this.handleSuppliesChange} />
                <label>Other Expenses</label><input value={this.state.otherExpenses} type="number" onChange={this.handleOtherExpensesChange} />
                <div>
                    Monthly Cash Flow: ${this.state.cashFlow}
                </div>
            </form>
        );
    }
}

export default ShortTermRentalCalculator;