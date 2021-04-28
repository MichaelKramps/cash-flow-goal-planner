import React from 'react';
import './MortgageCalculator.css';
import FormUtils from "../Shared/FormUtils";

class MortgageCalculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            price: this.props.price,
            downPayment: this.props.downPayment,
            term: this.props.term,
            interestRate: this.props.interestRate,
            insurance: this.props.insurance,
            propertyTax: this.props.propertyTax,
            hoa: this.props.hoa,
            monthlyPayment: 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleDownPaymentChange = this.handleDownPaymentChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleInterestRateChange = this.handleInterestRateChange.bind(this);
        this.handleInsuranceChange = this.handleInsuranceChange.bind(this);
        this.handlePropertyTaxChange = this.handlePropertyTaxChange.bind(this);
        this.handleHoaChange = this.handleHoaChange.bind(this);
    }

    handlePriceChange(event) {
        this.setState({price: event.target.value});
    }

    handleDownPaymentChange(event) {
        this.setState({downPayment: event.target.value});
    }

    handleTermChange(event) {
        this.setState({term: event.target.value});
    }

    handleInterestRateChange(event) {
        this.setState({interestRate: event.target.value});
    }

    handleInsuranceChange(event) {
        this.setState({insurance: event.target.value});
    }

    handlePropertyTaxChange(event) {
        this.setState({propertyTax: event.target.value});
    }

    handleHoaChange(event) {
        this.setState({Hoa: event.target.value});
    }

    calculateMonthlyPayments() {
        let loanAmount = parseInt(this.state.price) - parseInt(this.state.downPayment);
        let periodicInterestRate = parseInt(this.state.interestRate) / 1200;
        let numberPayments = parseInt(this.state.term) * 12;
        let topDivider = Math.pow(1 + periodicInterestRate, numberPayments) - 1;
        let bottomDivider = periodicInterestRate * Math.pow(1 + periodicInterestRate, numberPayments);
        let denominator = topDivider / bottomDivider;

        return (loanAmount / denominator).toFixed(2);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({monthlyPayment: this.calculateMonthlyPayments()});
    }

    render() {
        return (
            <form className="mortgage-calculator" onSubmit={this.handleSubmit}>
                <h2>Mortgage Calculator</h2>
                <div>
                    <label>Price of the home</label>
                    <input
                        value={this.state.price}
                        onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                        onChange={this.handlePriceChange}
                    />
                </div>
                <div>
                    <label>Down Payment</label>
                    <input
                        value={this.state.downPayment}
                        onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                        onChange={this.handleDownPaymentChange}
                    />
                </div>
                <div>
                    <label>Length of Loan</label>
                    <input
                        value={this.state.term}
                        onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                        onChange={this.handleTermChange}
                    />
                </div>
                <div>
                    <label>Interest Rate</label>
                    <input
                        value={this.state.interestRate}
                        onKeyDown={(event) => {FormUtils.validateFloatInput(event, this.state.interestRate)}}
                        onChange={this.handleInterestRateChange}
                    />
                </div>
                <div>
                    <label>Home Insurance</label>
                    <input
                        value={this.state.insurance}
                        onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                        onChange={this.handleInsuranceChange}
                    />
                </div>
                <div>
                    <label>Property Taxes</label>
                    <input
                        value={this.state.propertyTax}
                        onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                        onChange={this.handlePropertyTaxChange}
                    />
                </div>
                <div>
                    <label>Home Owner's Association Fee</label>
                    <input
                        value={this.state.hoa}
                        onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                        onChange={this.handleHoaChange}
                    />
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

export default MortgageCalculator;