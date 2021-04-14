import React from 'react';
import SimpleAsset from './Assets/SimpleAsset';
import './Simulator.css';
import AddAsset from "./Assets/AddAsset";
import Totals from "./Calculations/Totals";
import CashFlowGoalEditor from "./Editors/CashFlowGoalEditor";

class Simulator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            targetCashFlow: {
                goal: 2000,
                expenses: {
                    mortgage: 0,
                    utilities: 200,
                    internet: 100,
                    food: 700,
                    travel: 500,
                    entertainment: 500
                }
            },
            currentAssets: [{name: "westridge", type: "real estate", initialInvestment: "30000", cashFlow: "500"}],
            futureAssets: [],
            totals: []
        };

        this.listAssets = this.listAssets.bind(this);
        this.updateCashFlowGoal = this.updateCashFlowGoal.bind(this);
        this.updateCurrentAsset = this.updateCurrentAsset.bind(this);
        this.updateFutureAsset = this.updateFutureAsset.bind(this);
        this.submitCurrentAsset = this.submitCurrentAsset.bind(this);
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

    updateCashFlowGoal(targetCashFlow) {
        this.setState({targetCashFlow: targetCashFlow});
    }

    updateCurrentAsset(index, asset) {
        let newAssets = this.state.currentAssets.slice();
        newAssets[index] = asset;

        this.setState({currentAssets: newAssets});
    }

    updateFutureAsset(index, asset) {
        let newAssets = this.state.futureAssets.slice();
        newAssets[index] = asset;

        this.setState({futureAssets: newAssets});
    }

    submitCurrentAsset(asset) {
        let newAssets = this.state.currentAssets.slice();
        newAssets.push(asset);

        this.setState({currentAssets: newAssets});
    }

    submitFutureAsset(asset) {
        let newAssets = this.state.futureAssets.slice();
        newAssets.push(asset);

        this.setState({futureAssets: newAssets});
    }

    render() {
        return (
            <div>
                <div className="simulator-header-container">
                    <div>Name</div>
                    <div>Type</div>
                    <div>Initial Investment</div>
                    <div>Cash Flow
                        <CashFlowGoalEditor
                        goal={this.state.targetCashFlow.goal}
                        expenses={this.state.targetCashFlow.expenses}
                        onSubmission={this.updateCashFlowGoal} />
                    </div>
                </div>
                <h2>Current Assets</h2>
                <div>
                    {this.listAssets(this.state.currentAssets, this.updateCurrentAsset)}
                    <AddAsset onSubmission={this.submitCurrentAsset} />
                </div>
                <h2>Future Assets</h2>
                <div>
                    {this.listAssets(this.state.futureAssets, this.updateFutureAsset)}
                    <AddAsset onSubmission={this.submitFutureAsset} />
                </div>
                <h2>Totals</h2>
                <div className="simulator-totals-container">
                    <Totals {...this.state} />
                </div>
            </div>
        );
    }
}

export default Simulator;