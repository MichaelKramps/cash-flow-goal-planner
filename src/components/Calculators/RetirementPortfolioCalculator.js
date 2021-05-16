import React from 'react';
import './RetirementPortfolioCalculator.css';
import Shared from "../Shared/Shared";

class RetirementPortfolioCalculator extends React.Component {

    render() {
        return (
            <div className={"retirement-portfolio-calculator " + Shared.determineVisibility(this.props)}>
                Retirment Portfolio Calculator
            </div>
        );
    }
}

export default RetirementPortfolioCalculator;