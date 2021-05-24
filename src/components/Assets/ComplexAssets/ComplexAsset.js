import React from 'react';
import './ComplexAsset.css';
import EditComplexAsset from "./EditComplexAsset";

class ComplexAsset extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            type: this.props.type,
            cashFlow: this.props.cashFlow,
            initialInvestment: this.props.initialInvestment,
            cashOnCash: this.calculateCashOnCash(this.props.cashFlow, this.props.initialInvestment) || 0,
            advanced: this.props.advanced,
            editing: false
        }

        this.stopEditing = this.stopEditing.bind(this);
    }

    stopEditing(edits) {
        this.setState({
            name: edits.name,
            type: edits.type,
            initialInvestment: edits.initialInvestment,
            cashFlow: edits.cashFlow,
            cashOnCash: this.calculateCashOnCash(edits.cashFlow, edits.initialInvestment) || 0,
            editing: false
        })
    }

    calculateCashOnCash(cashFlow, initialInvestment) {
        if (cashFlow && initialInvestment) {
            return (parseFloat(cashFlow) * 12 / parseFloat(initialInvestment) * 100).toFixed(1)
        } else {
            return 0;
        }
    }

    render() {
        if (this.state.editing) {
            return (
                <EditComplexAsset
                    name={this.state.name}
                    type={this.state.type}
                    visible={this.state.editing}
                    initialInvestment={this.state.initialInvestment}
                    cashFlow={this.state.cashFlow}
                    advanced={this.state.advanced}
                    onSubmission={this.props.onUpdate}
                    stopEditing={this.stopEditing}
                    index={this.props.index}/>
            )
        } else {
            return (
                <div className="complex-asset">
                    <div>{this.state.name}</div>
                    <div>{this.state.type}</div>
                    <div>{this.state.initialInvestment}</div>
                    <div>{this.state.cashFlow}<span onClick={() => {this.setState({editing: true})}}>&#9998;</span></div>
                    <div>{this.state.cashOnCash}%<span onClick={() => {this.props.onDelete(this.props.index)}}>&#x1f5d1;</span></div>
                </div>
            )
        }
    }
}

export default ComplexAsset;
