import React from 'react';
import AddCurrentAsset from "../../Assets/AddCurrentAsset";
import SimpleAsset from "../../Assets/SimpleAssets/SimpleAsset";
import Modal from "../../Shared/Modal";
import FormUtils from "../../Shared/FormUtils";

class CurrentCashFlowEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            totalCashFlow: 0,
            currentAssets: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitCurrentAsset = this.submitCurrentAsset.bind(this);
        this.updateCurrentAsset = this.updateCurrentAsset.bind(this);
        this.deleteCurrentAsset = this.deleteCurrentAsset.bind(this);
    }

    listAssets(assetList, updateFunction, deleteFunction) {
        if (assetList.length > 0) {
            return assetList.map((asset, index) => {
                return <SimpleAsset
                    key={index}
                    index={index}
                    name={asset.name}
                    type={asset.type}
                    initialInvestment={asset.initialInvestment}
                    cashFlow={asset.cashFlow}
                    onUpdate={updateFunction}
                    onDelete={deleteFunction}
                />
            })
        } else {
            return <div>You currently have no assets.</div>
        }
    }

    submitCurrentAsset(asset) {
        let newAssets = this.state.currentAssets.slice();
        newAssets.push(asset);

        this.setState({currentAssets: newAssets});
    }

    updateCurrentAsset(index, asset) {
        let newAssets = this.state.currentAssets.slice();
        newAssets[index] = asset;

        this.setState({currentAssets: newAssets});
    }

    deleteCurrentAsset(index) {
        let newAssets = this.state.currentAssets.slice();
        newAssets.splice(index, 1);

        // no idea why, but this extra step seems to be necessary
        this.setState({currentAssets: []}, () => {
            this.setState({currentAssets: newAssets})
        });
    }

    calculateTotalCashFlow() {
        let totalCashFlow = 0;

        for (let asset = 0; asset < this.state.currentAssets.length; asset ++) {
            let thisAsset = this.state.currentAssets[asset];
            totalCashFlow += FormUtils.parseIntegerInput(thisAsset.cashFlow);
        }

        return totalCashFlow;
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({totalCashFlow: this.calculateTotalCashFlow()}, () => {
            this.props.onSubmission(this.state);
        })
    }

    render() {
        return (
            <Modal visible={this.props.editing} onSubmission={this.handleSubmit}>
                <h3>Add assets you currently own to increase your current cash flow.</h3>
                {this.listAssets(this.state.currentAssets, this.updateCurrentAsset, this.deleteCurrentAsset)}
                <AddCurrentAsset onSubmission={this.submitCurrentAsset} />
                <button onClick={this.handleSubmit}>Update</button>
            </Modal>
        )
    }
}

export default CurrentCashFlowEditor;