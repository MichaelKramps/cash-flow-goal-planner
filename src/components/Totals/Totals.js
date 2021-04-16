import React from 'react';
import './Totals.css';

class Totals extends React.Component {

    calculateTotals() {
        let currentAssetsTotals = this.extractTotalsFromAssets(this.props.currentAssets);
        let futureAssetsTotals = this.extractTotalsFromAssets(this.props.futureAssets);
        let combinedAssetsTotals = {
            initialInvestment: currentAssetsTotals.initialInvestment + futureAssetsTotals.initialInvestment,
            cashFlow: currentAssetsTotals.cashFlow + futureAssetsTotals.cashFlow,
            cashOnCash: this.calculateCashOnCash(currentAssetsTotals.cashFlow + futureAssetsTotals.cashFlow, currentAssetsTotals.initialInvestment + futureAssetsTotals.initialInvestment)
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
            cashFlow: 0,
            cashOnCash: 0
        };

        for (let asset = 0; asset < assetsArray.length; asset ++) {
            totals.initialInvestment += parseFloat(assetsArray[asset].initialInvestment);
            totals.cashFlow += parseFloat(assetsArray[asset].cashFlow);
        }

        totals.cashOnCash = this.calculateCashOnCash(totals.cashFlow, totals.initialInvestment);

        return totals;
    }

    calculateCashOnCash(cashFlow, initialInvestment) {
        return (parseFloat(cashFlow) * 12 / parseFloat(initialInvestment) * 100).toFixed(1);
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
                    <div>{totals.currentTotals.cashOnCash}%</div>
                </div>
                <div className="totals-container">
                    <div>Future Totals</div>
                    <div>&nbsp;</div>
                    <div>{totals.futureTotals.initialInvestment}</div>
                    <div>{totals.futureTotals.cashFlow}</div>
                    <div>{totals.futureTotals.cashOnCash}%</div>
                </div>
                <div className="totals-container">
                    <div>Combined Totals</div>
                    <div>&nbsp;</div>
                    <div>{totals.combinedTotals.initialInvestment}</div>
                    <div>{totals.combinedTotals.cashFlow}</div>
                    <div>{totals.combinedTotals.cashOnCash}%</div>
                </div>
            </React.Fragment>
        );
    }
}

export default Totals;