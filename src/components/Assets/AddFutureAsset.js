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
        this.deleteFutureAsset = this.deleteFutureAsset.bind(this);
        this.submitFutureAsset = this.submitFutureAsset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    listAssets(assetList, updateFunction, deleteFunction) {
        return assetList.map((asset, index) => {
            let cashFlow = asset.cashFlow ? asset.cashFlow : asset.monthlyCashFlow;
            return <SimpleAsset
                key={index}
                index={index}
                name={asset.name}
                type={asset.type}
                initialInvestment={asset.initialInvestment}
                cashFlow={cashFlow}
                onUpdate={updateFunction}
                onDelete={deleteFunction}
            />
        })
    }

    updateFutureAsset(index, asset) {
        let newAssets = this.state.futureAssets.slice();
        newAssets[index] = asset;

        this.setState({futureAssets: newAssets});
    }

    deleteFutureAsset(index) {
        let newAssets = this.state.futureAssets.slice();
        newAssets.splice(index, 1);

        // no idea why, but this extra step seems to be necessary
        this.setState({futureAssets: []}, () => {
            this.setState({futureAssets: newAssets})
        });
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
                {this.listAssets(this.state.futureAssets, this.updateFutureAsset, this.deleteFutureAsset)}
                <button onClick={() => {this.setState({editing: true})}}>Add my next investment</button>
                <CreateComplexAsset visible={this.state.editing} onSubmission={this.handleSubmit} />
            </div>
        );
    }
}

export default AddFutureAsset;