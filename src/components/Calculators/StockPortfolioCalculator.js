import React from 'react';
import './StockPortfolioCalculator.css';
import Shared from "../Shared/Shared";

class StockPortfolioCalculator extends React.Component {

    render() {
        return (
            <div className={"stock-calculator " + Shared.determineVisibility(this.props)}>
                Stock Portfolio Calculator
            </div>
        );
    }
}

export default StockPortfolioCalculator;