import React from 'react';
import Asset from './Assets/Asset';
import './Simulator.css';
import Totals from "./Totals/Totals";

class Simulator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentAssets: [{name: "westridge", type: "real estate", initialInvestment: "30000", cashFlow: "500"}],
            futureAssets: [],
            totals: []
        };

        this.listAssets = this.listAssets.bind(this);
        this.updateFutureAsset = this.updateFutureAsset.bind(this);
        this.submitFutureAsset = this.submitFutureAsset.bind(this);
    }

    listAssets(assetList, updateFunction) {
        return assetList.map((asset, index) => {
            return <Asset
                key={index}
                index={index}
                name={asset.name}
                type={asset.type}
                initialInvestment={asset.initialInvestment}
                cashFlow={asset.cashFlow}
                onUpdate={updateFunction}
            />
        })
    }

    updateFutureAsset(index, asset) {
        let newAssets = this.state.futureAssets.slice();
        newAssets[index] = asset;

        this.setState({futureAssets: newAssets});
    }

    submitFutureAsset(asset) {
        let newAssets = this.state.futureAssets.slice();
        newAssets.push(asset);

        this.setState({futureAssets: newAssets});
    }

    render() {
        return (
            <div className="simulator">
                <h1>Cash Flow Early Retirement Planner</h1>
                <div className="simulator-totals-container">
                    <Totals {...this.state} />
                </div>
                <h2>Future Assets</h2>
                <div>
                    {this.listAssets(this.state.futureAssets, this.updateFutureAsset)}
                    {/*<AddFutureAsset onSubmission={this.submitFutureAsset} />*/}
                </div>
            </div>
        );
    }
}

export default Simulator;