import React from 'react';
import SimpleAsset from "./SimpleAssets/SimpleAsset";
import CreateComplexAsset from "./ComplexAssets/CreateComplexAsset";

class AddFutureAsset extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            futureAssets: []
        };

        this.listAssets = this.listAssets.bind(this);
        this.updateFutureAsset = this.updateFutureAsset.bind(this);
        this.submitFutureAsset = this.submitFutureAsset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(state) {
        this.setState({editing: false}, () => {
            let futureAssets = this.state.futureAssets.slice();
            futureAssets.push(state);
            this.setState({futureAssets: futureAssets});
        });
    }

    render() {
        return (
            <div>
                {this.listAssets(this.state.futureAssets, this.updateFutureAsset)}
                <button onClick={() => {this.setState({editing: true})}}>Add my next investment</button>
                <CreateComplexAsset visible={this.state.editing} onSubmission={this.handleSubmit} />
            </div>
        );
    }
}

export default AddFutureAsset;