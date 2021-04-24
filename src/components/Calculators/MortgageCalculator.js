import React from 'react';
import './MortgageCalculator.css';

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
        this.setState({price: parseInt(event.target.value)});
    }

    handleDownPaymentChange(event) {
        this.setState({downPayment: parseInt(event.target.value)});
    }

    handleTermChange(event) {
        this.setState({term: parseInt(event.target.value)});
    }

    handleInterestRateChange(event) {
        this.setState({interestRate: parseInt(event.target.value)});
    }

    handleInsuranceChange(event) {
        this.setState({insurance: parseInt(event.target.value)});
    }

    handlePropertyTaxChange(event) {
        this.setState({propertyTax: parseInt(event.target.value)});
    }

    handleHoaChange(event) {
        this.setState({Hoa: parseInt(event.target.value)});
    }

    calculateMonthlyPayments() {
        let loanAmount = parseInt(this.state.price) - parseInt(this.state.downPayment);
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
            <form className="mortgage-calculator" onSubmit={this.handleSubmit}>
                <h2>Mortgage Calculator</h2>
                <div>
                    <label>Price of the home</label>
                    <input value={this.state.price} type="number" onChange={this.handlePriceChange} />
                </div>
                <div>
                    <label>Down Payment</label>
                    <input value={this.state.downPayment} type="number" onChange={this.handleDownPaymentChange} />
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
                    <label>Home Insurance</label>
                    <input value={this.state.insurance} type="number" onChange={this.handleInsuranceChange} />
                </div>
                <div>
                    <label>Property Taxes</label>
                    <input value={this.state.propertyTax} type="number" onChange={this.handlePropertyTaxChange} />
                </div>
                <div>
                    <label>Home Owner's Association Fee</label>
                    <input value={this.state.hoa} type="number" onChange={this.handleHoaChange} />
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