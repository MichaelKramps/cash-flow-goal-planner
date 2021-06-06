import React from 'react';
import './CashFlowOutlook.css';
import FormUtils from "../Shared/FormUtils";

class CashFlowOutlook extends React.Component {

    createYearsArray() {
        let yearsArray = [];
        let thisYear = new Date().getFullYear();

        yearsArray.push(thisYear);
        yearsArray.push(thisYear + 1);
        yearsArray.push(thisYear + 2);
        yearsArray.push(thisYear + 3);
        yearsArray.push(thisYear + 4);

        return yearsArray;
    }

    listAllAssets() {
        let allAssetsWithFutureCashFlow = this.createAllAssetsWithCashFlow();

        return allAssetsWithFutureCashFlow.map((asset) => {
            return (
                <tr key={asset.name}>
                    <td>{asset.name}</td>
                    <td>${asset.cashFlow[0]}</td>
                    <td>${asset.cashFlow[1]}</td>
                    <td>${asset.cashFlow[2]}</td>
                    <td>${asset.cashFlow[3]}</td>
                    <td>${asset.cashFlow[4]}</td>
                </tr>
            )
        })
    }

    calculateCashFlowTotals() {
        let cashFlowTotals = [0, 0, 0, 0, 0];
        let allAssetsWithFutureCashFlow = this.createAllAssetsWithCashFlow();

        for (let asset = 0; asset < allAssetsWithFutureCashFlow.length; asset ++) {
            let thisAsset = allAssetsWithFutureCashFlow[asset];
            cashFlowTotals[0] += FormUtils.parseFloatInput(thisAsset.cashFlow[0]);
            cashFlowTotals[1] += FormUtils.parseFloatInput(thisAsset.cashFlow[1]);
            cashFlowTotals[2] += FormUtils.parseFloatInput(thisAsset.cashFlow[2]);
            cashFlowTotals[3] += FormUtils.parseFloatInput(thisAsset.cashFlow[3]);
            cashFlowTotals[4] += FormUtils.parseFloatInput(thisAsset.cashFlow[4]);
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
        let rawExistingAssets = this.props.highlights.currentCashFlow ? this.props.highlights.currentCashFlow.currentAssets : [];

        for (let index = 0; index < rawExistingAssets.length; index++) {
            existingAssetsWithCashFlow.push(this.createCurrentAssetWithCashFlow(rawExistingAssets[index]));
        }

        return existingAssetsWithCashFlow;
    }

    createCurrentAssetWithCashFlow(currentAsset) {
        let assetWithCashFlow = {};
        assetWithCashFlow.name = currentAsset.name;
        assetWithCashFlow.cashFlow = [];

        for (let year = 0; year < 5; year++) {
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

        for (let yearIndex = 0; yearIndex < 5; yearIndex++) {
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
        let years = this.createYearsArray();
        let cashFlowTotals = this.calculateCashFlowTotals();
        return (
            <table className="cash-flow-outlook">
                <thead>
                    <tr>
                        <th>Asset</th>
                        <th>{years[0]}</th>
                        <th>{years[1]}</th>
                        <th>{years[2]}</th>
                        <th>{years[3]}</th>
                        <th>{years[4]}</th>
                    </tr>
                </thead>
                <tbody>
                    {this.listAllAssets()}
                    <tr>
                        <td>Total</td>
                        <td>${cashFlowTotals[0].toFixed(2)}</td>
                        <td>${cashFlowTotals[1].toFixed(2)}</td>
                        <td>${cashFlowTotals[2].toFixed(2)}</td>
                        <td>${cashFlowTotals[3].toFixed(2)}</td>
                        <td>${cashFlowTotals[4].toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default CashFlowOutlook;