import React from 'react';
import './BusinessCalculator.css';
import Shared from "../Shared/Shared";

class BusinessCalculator extends React.Component {

    render() {
        return (
            <div className={"business-calculator " + Shared.determineVisibility(this.props)}>
                Business Calculator
            </div>
        );
    }
}

export default BusinessCalculator;