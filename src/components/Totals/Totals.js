import React from 'react';
import './Totals.css';

class Totals extends React.Component {

    calculateTotals() {
        let currentAssetsTotals = this.extractTotalsFromAssets(this.props.currentAssets);
        let futureAssetsTotals = this.extractTotalsFromAssets(this.props.futureAssets);
        let combinedAssetsTotals = {
            initialInvestment: currentAssetsTotals.initialInvestment + futureAssetsTotals.initialInvestment,
            cashFlow: currentAssetsTotals.cashFlow + futureAssetsTotals.cashFlow
        };
        return {
            currentTotals: currentAssetsTotals,
            futureTotals: futureAssetsTotals,
            combinedTotals: combinedAssetsTotals
        };
    }

    extractTotalsFromAssets(assetsArray) {
        let totals = {
            initialInvestment: 0,
            cashFlow: 0
        };

        for (let asset = 0; asset < assetsArray.length; asset ++) {
            totals.initialInvestment += parseFloat(assetsArray[asset].initialInvestment);
            totals.cashFlow += parseFloat(assetsArray[asset].cashFlow);
        }

        return totals;
    }

    render() {
        let totals = this.calculateTotals();
        return (
            <React.Fragment>
                <div className="totals-container">
                    <div>Current Totals</div>
                    <div>&nbsp;</div>
                    <div>{totals.currentTotals.initialInvestment}</div>
                    <div>{totals.currentTotals.cashFlow}</div>
                </div>
                <div className="totals-container">
                    <div>Future Totals</div>
                    <div>&nbsp;</div>
                    <div>{totals.futureTotals.initialInvestment}</div>
                    <div>{totals.futureTotals.cashFlow}</div>
                </div>
                <div className="totals-container">
                    <div>Combined Totals</div>
                    <div>&nbsp;</div>
                    <div>{totals.combinedTotals.initialInvestment}</div>
                    <div>{totals.combinedTotals.cashFlow}</div>
                </div>
            </React.Fragment>
        );
    }
}

export default Totals;