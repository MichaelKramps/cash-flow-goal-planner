import React from 'react';
import './ComplexAsset.css';
import EditComplexAsset from "./EditComplexAsset";
import AdditionalActions from "../../Shared/AdditionalActions";

class ComplexAsset extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            type: this.props.type,
            year: this.props.year,
            cashFlow: this.props.cashFlow,
            initialInvestment: this.props.initialInvestment,
            cashOnCash: this.calculateCashOnCash(this.props.cashFlow, this.props.initialInvestment) || 0,
            advanced: this.props.advanced,
            editing: false
        }

        this.stopEditing = this.stopEditing.bind(this);
        this.updateComplexAsset = this.updateComplexAsset.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    stopEditing(edits) {
        this.setState({editing: false});
    }

    calculateCashOnCash(cashFlow, initialInvestment) {
        if (cashFlow && initialInvestment) {
            return (parseFloat(cashFlow) * 12 / parseFloat(initialInvestment) * 100).toFixed(1)
        } else {
            return 0;
        }
    }

    updateComplexAsset(state) {
        this.setState({editing: false}, () => {
            this.props.onUpdate(this.props.index, state);
        });
    }

    onEdit() {
        this.setState({editing: true});
    }

    onDelete() {
        this.props.onDelete(this.props.index);
    }

    render() {
        if (this.state.editing) {
            return (
                <EditComplexAsset
                    name={this.state.name}
                    type={this.state.type}
                    year={this.state.year}
                    visible={this.state.editing}
                    advanced={this.state.advanced}
                    onSubmission={this.updateComplexAsset}
                    stopEditing={this.stopEditing}
                    index={this.props.index}/>
            )
        } else {
            return (
                <div className="complex-asset">
                    <div>{this.state.name}</div>
                    <div>{this.state.type}</div>
                    <div>{this.state.initialInvestment}</div>
                    <div>{this.state.cashFlow}</div>
                    <div>{this.state.cashOnCash}%&nbsp;
                        <AdditionalActions onEdit={this.onEdit} onDelete={this.onDelete} />
                    </div>
                </div>
            )
        }
    }
}

export default ComplexAsset;
