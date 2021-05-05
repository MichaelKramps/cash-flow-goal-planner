import React from 'react';
import AddCurrentAsset from "../../Assets/AddCurrentAsset";
import Asset from "../../Assets/Asset";
import Modal from "../../Shared/Modal";

class CurrentCashFlowEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            totalCashFlow: 0,
            currentAssets: [{name: "westridge", type: "real estate", initialInvestment: "30000", cashFlow: "500"}],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitCurrentAsset = this.submitCurrentAsset.bind(this);
        this.updateCurrentAsset = this.updateCurrentAsset.bind(this);
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

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmission(this.state);
    }

    render() {
        return (
            <Modal visible={this.props.editing}>
                {this.listAssets(this.state.currentAssets, this.updateCurrentAsset)}
                <AddCurrentAsset onSubmission={this.submitCurrentAsset} />
                <input type="submit" value="Submit" />
            </Modal>
        )
    }
}

export default CurrentCashFlowEditor;