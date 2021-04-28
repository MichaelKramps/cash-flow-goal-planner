import React from 'react';
import './LoanCalculator.css';
import AmortizationSchedule from "../Shared/AmortizationSchedule";

class LoanCalculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            amount: this.props.price,
            term: this.props.term,
            interestRate: this.props.interestRate,
            monthlyPayment: 0,
            amortization: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleInterestRateChange = this.handleInterestRateChange.bind(this);
        this.validateInterestRateKeyPress = this.validateInterestRateKeyPress.bind(this);
    }

    handleAmountChange(event) {
        this.setState({amount: parseInt(event.target.value)});
    }

    handleTermChange(event) {
        this.setState({term: parseInt(event.target.value)});
    }

    handleInterestRateChange(event) {
        this.setState({interestRate: event.target.value});
    }

    validateInterestRateKeyPress(event) {
        let interestRateRegex = /[1234567890.]|Backspace|Delete|ArrowRight|ArrowLeft/;
        if (!interestRateRegex.test(event.key)) {
            event.preventDefault();
        } else if (event.key === "." && this.state.interestRate.toString().includes(".")) {
            event.preventDefault();
        }
    }

    calculateMonthlyPayments() {
        let loanAmount = parseInt(this.state.amount);
        let periodicInterestRate = parseFloat(this.state.interestRate) / 1200;
        let numberPayments = parseInt(this.state.term) * 12;
        let topDivider = Math.pow(1 + periodicInterestRate, numberPayments) - 1;
        let bottomDivider = periodicInterestRate * Math.pow(1 + periodicInterestRate, numberPayments);
        let denominator = topDivider / bottomDivider;

        return (loanAmount / denominator).toFixed(2);
    }

    createAmortization() {
        let monthlyPayment = this.state.monthlyPayment;
        let loanBalance = this.state.amount;
        let periodicInterestRate = this.state.interestRate / 1200;
        this.state.amortization = [];

        for(let payment = 1; payment < this.state.term * 12; payment++) {
            let entry = {};
            entry.payment = monthlyPayment;
            entry.interestPaid = (loanBalance * periodicInterestRate).toFixed(2);
            entry.principalPaid = (monthlyPayment - entry.interestPaid).toFixed(2);
            loanBalance = (loanBalance - entry.principalPaid).toFixed(2);
            entry.loanBalance = loanBalance;

            this.state.amortization.push(entry);
        }

        let lastEntry = {};
        lastEntry.interestPaid = (loanBalance * periodicInterestRate).toFixed(2);
        lastEntry.principalPaid = loanBalance;
        lastEntry.payment = (parseFloat(loanBalance) + parseFloat(lastEntry.interestPaid)).toFixed(2);
        lastEntry.loanBalance = 0;

        this.state.amortization.push(lastEntry);
        this.forceUpdate();
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({monthlyPayment: this.calculateMonthlyPayments()}, () => {
            this.createAmortization();
        });
    }

    render() {
        return (
            <div>
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
                        <input value={this.state.interestRate} onKeyDown={this.validateInterestRateKeyPress} onChange={this.handleInterestRateChange} />
                    </div>
                    <div>
                        Monthly Payment: ${this.state.monthlyPayment}
                    </div>
                    <div>
                        <input type="submit" value="Calculate" />
                    </div>
                </form>
                <AmortizationSchedule amortization={this.state.amortization} />
            </div>
        );
    }
}

export default LoanCalculator;