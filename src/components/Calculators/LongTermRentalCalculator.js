import React from 'react';
import './LongTermRentalCalculator.css'
import Shared from "../Shared/Shared";

class LongTermRentalCalculator extends React.Component {

    render() {
        return (
            <div className={"long-term-rental-calculator " + Shared.determineVisibility(this.props)}>
                Long Term Rental Calculator
            </div>
        );
    }
}

export default LongTermRentalCalculator;