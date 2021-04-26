import React from 'react';
import './LoanCalculator.css';

class LoanCalculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            amount: this.props.price,
            term: this.props.term,
            interestRate: this.props.interestRate,
            monthlyPayment: 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleInterestRateChange = this.handleInterestRateChange.bind(this);
    }

    handleAmountChange(event) {
        this.setState({amount: parseInt(event.target.value)});
    }

    handleTermChange(event) {
        this.setState({term: parseInt(event.target.value)});
    }

    handleInterestRateChange(event) {
        this.setState({interestRate: parseInt(event.target.value)});
    }

    calculateMonthlyPayments() {
        let loanAmount = parseInt(this.state.amount);
        let periodicInterestRate = parseInt(this.state.interestRate) / 1200;
        let numberPayments = parseInt(this.state.term) * 12;
        let topDivider = Math.pow(1 + periodicInterestRate, numberPayments) - 1;
        let bottomDivider = periodicInterestRate * Math.pow(1 + periodicInterestRate, numberPayments);
        let denominator = topDivider / bottomDivider;

        return loanAmount / denominator;
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({monthlyPayment: this.calculateMonthlyPayments()});
    }

    render() {
        return (
            <form className="loan-calculator" onSubmit={this.handleSubmit}>
                <h2>Loan Calculator</h2>
                <div>
                    <label>Loan Amount</label>
                    <input value={this.state.amount} type="number" onChange={this.handleAmountChange} />
                </div>
                <div>
                    <label>Length of Loan</label>
                    <input value={this.state.term} type="number" onChange={this.handleTermChange} />
                </div>
                <div>
                    <label>Interest Rate</label>
                    <input value={this.state.interestRate} type="number" onChange={this.handleInterestRateChange} />
                </div>
                <div>
                    Monthly Payment: ${this.state.monthlyPayment}
                </div>
                <div>
                    <input type="submit" value="Calculate" />
                </div>
            </form>
        );
    }
}

export default LoanCalculator;