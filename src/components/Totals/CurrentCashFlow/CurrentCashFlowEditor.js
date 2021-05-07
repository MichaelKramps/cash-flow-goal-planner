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

    submitCurrentAsset(asset) {
        console.log(asset)
        let newAssets = this.state.currentAssets.slice();
        newAssets.push(asset);

        this.setState({currentAssets: newAssets});
    }

    updateCurrentAsset(index, asset) {
        let newAssets = this.state.currentAssets.slice();
        newAssets[index] = asset;

        this.setState({currentAssets: newAssets});
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
                {this.listAssets(this.state.currentAssets, this.updateCurrentAsset)}
                <AddCurrentAsset onSubmission={this.submitCurrentAsset} />
                <button onClick={this.handleSubmit}>Update</button>
            </Modal>
        )
    }
}

export default CurrentCashFlowEditor;