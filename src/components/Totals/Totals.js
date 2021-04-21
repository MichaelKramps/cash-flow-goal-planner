import React from 'react';
import './Totals.css';
import CashFlowGoalEditor from "../CashFlowGoal/CashFlowGoalEditor";

class Totals extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cashFlowGoal: 2000,
            expenses: {
                mortgage: 0,
                utilities: 300,
                food: 700,
                travel: 500,
                entertainment: 500,
                miscellaneous: 0,
                investing: 0
            }
        }

        this.updateCashFlowGoal = this.updateCashFlowGoal.bind(this);
    }


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
            totals.initialInvestment += parseFloat(assetsArray[asset].initialInvestment) || 0;
            totals.cashFlow += parseFloat(assetsArray[asset].cashFlow) || 0;
        }

        if (assetsArray.length > 0) {
            totals.cashOnCash = this.calculateCashOnCash(totals.cashFlow, totals.initialInvestment);
        }

        return totals;
    }

    calculateCashOnCash(cashFlow, initialInvestment) {
        return (parseFloat(cashFlow) * 12 / parseFloat(initialInvestment) * 100).toFixed(1) || 0;
    }

    updateCashFlowGoal(newCashFlowGoal) {
        this.setState(newCashFlowGoal);
    }

    render() {
        let totals = this.calculateTotals();
        return (
            <React.Fragment>
                <div className="totals-container">
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <CashFlowGoalEditor
                        cashFlowGoal={this.state.cashFlowGoal}
                        expenses={this.state.expenses}
                        onSubmission={this.updateCashFlowGoal} />
                    <div>&nbsp;</div>
                </div>
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