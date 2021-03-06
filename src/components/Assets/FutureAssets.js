import React from 'react';
import CreateComplexAsset from "./ComplexAssets/CreateComplexAsset";
import ComplexAsset from "./ComplexAssets/ComplexAsset";

class FutureAssets extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            editing: this.props.editing || false,
            futureAssets: this.props.futureAssets || []
        };

        this.listAssets = this.listAssets.bind(this);
        this.updateFutureAsset = this.updateFutureAsset.bind(this);
        this.deleteFutureAsset = this.deleteFutureAsset.bind(this);
        this.stopEditing = this.stopEditing.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    listAssets(assetList, updateFunction, deleteFunction) {
        if (assetList.length > 0) {
            return assetList.map((asset, index) => {
                let cashFlow = asset.cashFlow ? asset.cashFlow : asset.monthlyCashFlow;
                return <ComplexAsset
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
            return <div className="complex-asset"><div>You have no future assets</div></div>
        }
    }

    updateFutureAsset(index, asset) {
        let newAssets = this.state.futureAssets.slice();
        newAssets[index] = asset;

        this.setState({futureAssets: []}, () => {
            this.setState({futureAssets: newAssets}, () => {
                this.updateSimulator();
            });
        });
    }

    deleteFutureAsset(index) {
        let newAssets = this.state.futureAssets.slice();
        newAssets.splice(index, 1);

        // no idea why, but this extra step seems to be necessary
        this.setState({futureAssets: []}, () => {
            this.setState({futureAssets: newAssets}, () => {
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
            let futureAssets = this.state.futureAssets.slice();
            futureAssets.push(assetProps);
            this.setState({futureAssets: futureAssets}, () => {
                this.updateSimulator();
            });
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps) {
            this.setState({
                editing: this.props.editing || false,
                futureAssets: this.props.futureAssets || []
            })
        }
    }

    render() {
        return (
            <div>
                {this.listAssets(this.state.futureAssets, this.updateFutureAsset, this.deleteFutureAsset)}
                <button onClick={() => {this.setState({editing: true})}}>Add my next investment</button>
                <CreateComplexAsset visible={this.state.editing} stopEditing={this.stopEditing} onSubmission={this.handleSubmit} />
            </div>
        );
    }
}

export default FutureAssets;