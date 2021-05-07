import React from 'react';
import SimpleAsset from './Assets/SimpleAssets/SimpleAsset';
import './Simulator.css';
import Highlights from "./Totals/Highlights";
import AddFutureAsset from "./Assets/AddFutureAsset";

class Simulator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            futureAssets: [],
            totals: []
        };

        this.listAssets = this.listAssets.bind(this);
        this.updateFutureAsset = this.updateFutureAsset.bind(this);
        this.submitFutureAsset = this.submitFutureAsset.bind(this);
    }

    listAssets(assetList, updateFunction) {
        return assetList.map((asset, index) => {
            return <SimpleAsset
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
                    <Highlights {...this.state} />
                </div>
                <h2>Investment Plan</h2>
                <div>
                    {this.listAssets(this.state.futureAssets, this.updateFutureAsset)}
                    <AddFutureAsset />
                </div>
            </div>
        );
    }
}

export default Simulator;