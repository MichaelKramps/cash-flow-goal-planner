import React from 'react';
import SimpleAsset from "./SimpleAssets/SimpleAsset";
import AddSimpleAsset from "./SimpleAssets/AddSimpleAsset";
import Modal from "../Shared/Modal";

class CurrentAssets extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            currentAssets: this.props.currentAssets || []
        };

        this.listAssets = this.listAssets.bind(this);
        this.updateCurrentAsset = this.updateCurrentAsset.bind(this);
        this.deleteCurrentAsset = this.deleteCurrentAsset.bind(this);
        this.stopEditing = this.stopEditing.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    listAssets(assetList, updateFunction, deleteFunction) {
        if (assetList.length > 0) {
            return assetList.map((asset, index) => {
                let cashFlow = asset.cashFlow ? asset.cashFlow : asset.monthlyCashFlow;
                return <SimpleAsset
                    key={index}
                    index={index}
                    name={asset.name}
                    type={asset.type}
                    year={asset.year}
                    advanced={asset.advanced}
                    initialInvestment={asset.initialInvestment}
                    cashFlow={cashFlow}
                    onUpdate={updateFunction}
                    onDelete={deleteFunction}
                />
            })
        } else {
            return <div className="simple-asset"><div>You have no assets</div></div>
        }
    }

    updateCurrentAsset(index, asset) {
        let newAssets = this.state.currentAssets.slice();
        newAssets[index] = asset;

        this.setState({currentAssets: []}, () => {
            this.setState({currentAssets: newAssets}, () => {
                this.updateSimulator();
            });
        });
    }

    deleteCurrentAsset(index) {
        let newAssets = this.state.currentAssets.slice();
        newAssets.splice(index, 1);

        // no idea why, but this extra step seems to be necessary
        this.setState({currentAssets: []}, () => {
            this.setState({currentAssets: newAssets}, () => {
                this.updateSimulator();
            })
        });
    }

    updateSimulator() {
        this.props.updateSimulator(this.state);
    }

    stopEditing() {
        this.setState({editing: false});
    }

    handleSubmit(state) {
        this.setState({editing: false}, () => {
            let assetProps = JSON.parse(JSON.stringify(state));
            assetProps.advanced = state;
            let futureAssets = this.state.currentAssets.slice();
            futureAssets.push(assetProps);
            this.setState({currentAssets: futureAssets}, () => {
                this.updateSimulator();
            });
        });
    }

    render() {
        return (
            <div>
                {this.listAssets(this.state.currentAssets, this.updateCurrentAsset, this.deleteCurrentAsset)}
                <button onClick={() => {this.setState({editing: true})}}>Add an existing asset</button>
                <Modal visible={this.state.editing} onSubmission={this.stopEditing}>
                    <AddSimpleAsset visible={this.state.editing} stopEditing={this.stopEditing} onSubmission={this.handleSubmit} />
                </Modal>
            </div>
        );
    }
}

export default CurrentAssets;