import React from 'react';
import './CashFlowOutlook.css';

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
        let listOfExistingAssetsWithCashFlow = this.createListOfExistingAssetsWithCashFlow();
        let listOfFutureAssetsWithCashFlow = this.createListOfFutureAssetsWithCashFlow();
        let allAssetsWithFutureCashFlow = listOfExistingAssetsWithCashFlow.concat(listOfFutureAssetsWithCashFlow);

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

        for (let year = 0; year < 5; year++) {
            let thisSegmentsCashFlow = (futureAsset.cashFlow * Math.pow(1.03, year)).toFixed(2);
            assetWithCashFlow.cashFlow.push(thisSegmentsCashFlow)
        }

        return assetWithCashFlow;
    }

    render() {
        let years = this.createYearsArray();
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
                        <td>total cash flow year 1</td>
                        <td>total cash flow year 2</td>
                        <td>total cash flow year 3</td>
                        <td>total cash flow year 4</td>
                        <td>total cash flow year 5</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default CashFlowOutlook;