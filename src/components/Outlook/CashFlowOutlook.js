import React from 'react';
import './CashFlowOutlook.css';
import FormUtils from "../Shared/FormUtils";

class CashFlowOutlook extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            yearsToPredict: 5
        };
    }
    createYearsArray() {
        let yearsArray = [];
        let thisYear = new Date().getFullYear();
        let yearsToPredict = this.getYearsToPredict();

        for (let year = 0; year <= yearsToPredict; year ++) {
            yearsArray.push(thisYear + year);
        }

        return yearsArray;
    }

    getYearsToPredict() {
        let thisYear = new Date().getFullYear();
        let goalYear = this.props.highlights.cashFlowGoal && this.props.highlights.cashFlowGoal.goalDate ? FormUtils.parseIntegerInput(this.props.highlights.cashFlowGoal.goalDate.split(" ")[1]) : thisYear;
        let yearsToPredict = goalYear - thisYear > 5 ? goalYear - thisYear : 5;

        return yearsToPredict;
    }

    listAllAssets() {
        let allAssetsWithFutureCashFlow = this.createAllAssetsWithCashFlow();

        return allAssetsWithFutureCashFlow.map((asset) => {
            return (
                <tr key={asset.name}>
                    <td>{asset.name}</td>
                    {this.listAssetCashFlow(asset.cashFlow)}
                </tr>
            )
        })
    }

    listAssetCashFlow(cashFlowArray) {
        return cashFlowArray.map((cashFlow) => {
            return (
                <React.Fragment>
                    <td>${cashFlow}</td>
                </React.Fragment>
            )
        })
    }

    listYears() {
        let years = this.createYearsArray();

        return years.map((year) => {
            return (
                <React.Fragment>
                    <td>{year}</td>
                </React.Fragment>
            )
        })
    }

    listCashFlowTotals() {
        let totals = this.calculateCashFlowTotals();

        return totals.map((total) => {
            return (
                <React.Fragment>
                    <td>${total.toFixed(2)}</td>
                </React.Fragment>
            )
        })
    }

    calculateCashFlowTotals() {
        let cashFlowTotals = [];
        let allAssetsWithFutureCashFlow = this.createAllAssetsWithCashFlow();

        for (let asset = 0; asset < allAssetsWithFutureCashFlow.length; asset ++) {
            let thisAsset = allAssetsWithFutureCashFlow[asset];
            for (let year = 0; year <= this.getYearsToPredict(); year++) {
                if (cashFlowTotals[year]){
                    cashFlowTotals[year] += FormUtils.parseFloatInput(thisAsset.cashFlow[year]);
                } else {
                    cashFlowTotals[year] = FormUtils.parseFloatInput(thisAsset.cashFlow[year]);
                }

            }
        }

        return cashFlowTotals;
    }

    createAllAssetsWithCashFlow() {
        let listOfExistingAssetsWithCashFlow = this.createListOfExistingAssetsWithCashFlow();
        let listOfFutureAssetsWithCashFlow = this.createListOfFutureAssetsWithCashFlow();
        return listOfExistingAssetsWithCashFlow.concat(listOfFutureAssetsWithCashFlow);
    }

    createListOfExistingAssetsWithCashFlow() {
        let existingAssetsWithCashFlow = [];
        let rawExistingAssets = this.props.highlights.currentCashFlow && this.props.highlights.currentCashFlow.currentAssets ? this.props.highlights.currentCashFlow.currentAssets : [];

        for (let index = 0; index < rawExistingAssets.length; index++) {
            existingAssetsWithCashFlow.push(this.createCurrentAssetWithCashFlow(rawExistingAssets[index]));
        }

        return existingAssetsWithCashFlow;
    }

    createCurrentAssetWithCashFlow(currentAsset) {
        let assetWithCashFlow = {};
        assetWithCashFlow.name = currentAsset.name;
        assetWithCashFlow.cashFlow = [];

        for (let year = 0; year <= this.getYearsToPredict(); year++) {
            let thisSegmentsCashFlow = (currentAsset.cashFlow * Math.pow(1.03, year)).toFixed(2);
            assetWithCashFlow.cashFlow.push(thisSegmentsCashFlow)
        }

        return assetWithCashFlow;
    }

    createListOfFutureAssetsWithCashFlow() {
        let futureAssetsWithCashFlow = [];
        let rawFutureAssets = this.props.futureAssets.futureAssets ? this.props.futureAssets.futureAssets : [];

        for (let index = 0; index < rawFutureAssets.length; index++) {
            futureAssetsWithCashFlow.push(this.createFutureAssetWithCashFlow(rawFutureAssets[index]));
        }

        return futureAssetsWithCashFlow;
    }

    createFutureAssetWithCashFlow(futureAsset) {
        let assetWithCashFlow = {};
        assetWithCashFlow.name = futureAsset.name;
        assetWithCashFlow.cashFlow = [];

        for (let yearIndex = 0; yearIndex <= this.getYearsToPredict(); yearIndex++) {
            let thisYear = new Date().getFullYear() + yearIndex;
            let thisSegmentsCashFlow = 0;
            if (thisYear >= FormUtils.parseIntegerInput(futureAsset.year)) {
                let yearsSincePurchased = thisYear - FormUtils.parseIntegerInput(futureAsset.year);
                thisSegmentsCashFlow = (futureAsset.cashFlow * Math.pow(1.03, yearsSincePurchased)).toFixed(2);
            }
            assetWithCashFlow.cashFlow.push(thisSegmentsCashFlow)
        }

        return assetWithCashFlow;
    }

    render() {
        return (
            <table className="cash-flow-outlook">
                <thead>
                    <tr>
                        <th>Asset</th>
                        {this.listYears()}
                    </tr>
                </thead>
                <tbody>
                    {this.listAllAssets()}
                    <tr>
                        <td>Total</td>
                        {this.listCashFlowTotals()}
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default CashFlowOutlook;