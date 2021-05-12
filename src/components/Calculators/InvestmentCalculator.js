import React from 'react';
import './InvestmentCalculator.css';
import Shared from "../Shared/Shared";

class InvestmentCalculator extends React.Component {

    render() {
        return (
            <div className={"investment-calculator " + Shared.determineVisibility(this.props)}>
                Investment "Cash flow" Calculator
                - Initial value
                - annual growth in value
                - ultimately need cash flow as final metric (not value)
            </div>
        );
    }
}

export default InvestmentCalculator;