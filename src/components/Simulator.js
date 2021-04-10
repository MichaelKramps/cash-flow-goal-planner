import React from 'react';
import SimpleAsset from './Assets/SimpleAsset';
import './Simulator.css';
import AddAsset from "./Assets/AddAsset";

class Simulator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            targetCashFlow: 2000,
            currentAssets: [{name: "westridge", type: "real estate", initialInvestment: "30000", cashFlow: "500"}],
            futureAssets: [],
            totals: []
        };

        this.listAssets = this.listAssets.bind(this);
        this.submitCurrentAsset = this.submitCurrentAsset.bind(this);
        this.submitFutureAsset = this.submitFutureAsset.bind(this);
    }

    listAssets(assetList) {
        console.log(this.state)
        return assetList.map((asset, index) => {
            return <SimpleAsset
                key={index}
                name={asset.name}
                type={asset.type}
                initialInvestment={asset.initialInvestment}
                cashFlow={asset.cashFlow}
            />
        })
    }

    submitCurrentAsset(asset) {
        let newAssets = this.state.currentAssets.slice();
        newAssets.push(asset);

        this.setState({
            targetCashFlow: this.state.targetCashFlow,
            currentAssets: newAssets,
            futureAssets: this.state.futureAssets,
            totals: this.state.totals
        });
    }

    submitFutureAsset(asset) {
        let newAssets = this.state.futureAssets.slice();
        newAssets.push(asset);

        this.setState({
            targetCashFlow: this.state.targetCashFlow,
            currentAssets: this.state.currentAssets,
            futureAssets: newAssets,
            totals: this.state.totals
        });
    }

    render() {
        return (
            <div>
                <div className="simulator-header-container">
                    <div>Name</div>
                    <div>Type</div>
                    <div>Initial Investment</div>
                    <div>Cash Flow</div>
                </div>
                <h2>Current Assets</h2>
                <div>
                    {this.listAssets(this.state.currentAssets)}
                    <AddAsset onSubmission={this.submitCurrentAsset} />
                </div>
                <h2>Future Assets</h2>
                <div>
                    {this.listAssets(this.state.futureAssets)}
                    <AddAsset onSubmission={this.submitFutureAsset} />
                </div>
                <h2>Totals</h2>
                <div className="simulator-totals-container">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Simulator;