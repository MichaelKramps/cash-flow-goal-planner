import React from 'react';
import './LoanCalculator.css';
import AmortizationSchedule from "../Shared/AmortizationSchedule";
import FormUtils from "../Shared/FormUtils";
import Shared from "../Shared/Shared";

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
    }

    handleAmountChange(event) {
        this.setState({amount: event.target.value});
    }

    handleTermChange(event) {
        this.setState({term: event.target.value});
    }

    handleInterestRateChange(event) {
        this.setState({interestRate: event.target.value});
    }

    calculateMonthlyPayments() {
        let loanAmount = FormUtils.parseIntegerInput(this.state.amount);
        let periodicInterestRate = FormUtils.parseFloatInput(this.state.interestRate) / 1200;
        let numberPayments = FormUtils.parseIntegerInput(this.state.term) * 12;
        let topDivider = Math.pow(1 + periodicInterestRate, numberPayments) - 1;
        let bottomDivider = periodicInterestRate * Math.pow(1 + periodicInterestRate, numberPayments);
        let denominator = topDivider / bottomDivider;

        return (loanAmount / denominator).toFixed(2);
    }

    createAmortization() {
        let monthlyPayment = this.state.monthlyPayment;
        let loanBalance = FormUtils.parseIntegerInput(this.state.amount);
        let periodicInterestRate = FormUtils.parseFloatInput(this.state.interestRate) / 1200;
        this.setState({amortization: []});

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
        lastEntry.payment = (FormUtils.parseFloatInput(loanBalance) + FormUtils.parseFloatInput(lastEntry.interestPaid)).toFixed(2);
        lastEntry.loanBalance = 0;

        this.state.amortization.push(lastEntry);
        this.forceUpdate();
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.formIsValid()) {
            this.setState({monthlyPayment: this.calculateMonthlyPayments()}, () => {
                this.createAmortization();
            });
        } else {
            alert("All fields are required")
        }
    }

    formIsValid() {
        return this.state.amount && this.state.term && this.state.interestRate;
    }

    render() {
        return (
            <div className={"loan-calculator " + Shared.determineVisibility(this.props)}>
                <form onSubmit={this.handleSubmit}>
                    <h2>Loan Calculator</h2>
                    <div className="calculator-input-container">
                        <label>Loan Amount</label>
                        <input
                            value={this.state.amount}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleAmountChange}
                        />
                    </div>
                    <div className="calculator-input-container">
                        <label>Length of Loan</label>
                        <input
                            value={this.state.term}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleTermChange} />
                    </div>
                    <div className="calculator-input-container">
                        <label>Interest Rate</label>
                        <input
                            value={this.state.interestRate}
                            onKeyDown={(event) => {FormUtils.validateFloatInput(event, this.state.interestRate)}}
                            onChange={this.handleInterestRateChange}
                        />
                    </div>
                    <div className="calculator-cash-flow-result">
                        Monthly Payment: ${this.state.monthlyPayment}
                    </div>
                    <div>
                        <input type="submit" value="Calculate" onChange={() => {}} />
                    </div>
                </form>
                <AmortizationSchedule amortization={this.state.amortization} />
            </div>
        );
    }
}

export default LoanCalculator;