import React from 'react';
import './SimpleAsset.css';
import EditSimpleAsset from "./EditSimpleAsset";
import Modal from "../../Shared/Modal";
import AdditionalActions from "../../Shared/AdditionalActions";

class SimpleAsset extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            type: this.props.type,
            initialInvestment: this.props.initialInvestment,
            cashFlow: this.props.cashFlow,
            cashFlowIncrease: this.props.cashFlowIncrease,
            cashOnCash: this.calculateCashOnCash(this.props.cashFlow, this.props.initialInvestment),
            editing: false
        }

        this.stopEditing = this.stopEditing.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    stopEditing(edits) {
        this.setState({
            name: edits.name,
            type: edits.type,
            initialInvestment: edits.initialInvestment,
            cashFlow: edits.cashFlow,
            cashOnCash: this.calculateCashOnCash(edits.cashFlow, edits.initialInvestment),
            editing: false
        })
    }

    calculateCashOnCash(cashFlow, initialInvestment) {
        return (parseFloat(cashFlow) * 12 / parseFloat(initialInvestment) * 100).toFixed(1);
    }

    onEdit() {
        this.setState({editing: true});
    }

    onDelete() {
        this.props.onDelete(this.props.index)
    }

    render() {
        if (this.state.editing) {
            return (
                <Modal visible={true} onSubmission={this.props.onUpdate}>
                    <EditSimpleAsset
                        name={this.state.name}
                        type={this.state.type}
                        visible={this.state.editing}
                        initialInvestment={this.state.initialInvestment}
                        cashFlow={this.state.cashFlow}
                        cashFlowIncrease={this.state.cashFlowIncrease}
                        onSubmission={this.props.onUpdate}
                        stopEditing={this.stopEditing}
                        index={this.props.index}/>
                </Modal>
            )
        } else {
            return (
                <div className="simple-asset">
                    <div>{this.state.name}</div>
                    <div>{this.state.type}</div>
                    <div>{this.state.initialInvestment}</div>
                    <div>{this.state.cashFlow}</div>
                    <div>{this.state.cashOnCash}%</div>
                    <div><AdditionalActions onEdit={this.onEdit} onDelete={this.onDelete} /></div>
                </div>
            )
        }
    }
}

export default SimpleAsset;
