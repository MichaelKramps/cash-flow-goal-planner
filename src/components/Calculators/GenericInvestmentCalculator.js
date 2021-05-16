import React from 'react';
import './GenericInvestmentCalculator.css';
import Shared from "../Shared/Shared";

class GenericInvestmentCalculator extends React.Component {

    render() {
        return (
            <div className={"generic-investment-calculator " + Shared.determineVisibility(this.props)}>
                Generic Investment Calculator
            </div>
        );
    }
}

export default GenericInvestmentCalculator;