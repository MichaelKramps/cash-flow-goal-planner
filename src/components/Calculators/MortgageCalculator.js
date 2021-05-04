import React from 'react';
import './MortgageCalculator.css';
import AmortizationSchedule from "../Shared/AmortizationSchedule";
import MortgageCalculatorForm from "./Forms/MortgageCalculatorForm";

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
            monthlyPayment: 0,
            amortization: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(state) {
        this.setState(state);
    }

    render() {
        return (
            <div className="mortgage-calculator">
                <MortgageCalculatorForm onSubmission={this.handleSubmit} />
                <AmortizationSchedule amortization={this.state.amortization} />
            </div>
        );
    }
}

export default MortgageCalculator;