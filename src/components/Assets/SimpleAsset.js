import React from 'react';
import './SimpleAsset.css';
import AddAsset from "./AddAsset";

class SimpleAsset extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            type: this.props.type,
            initialInvestment: this.props.initialInvestment,
            cashFlow: this.props.cashFlow,
            editing: false
        }

        this.stopEditing = this.stopEditing.bind(this);
    }

    stopEditing(edits) {
        console.log(edits)
        this.setState({
            name: edits.name,
            type: edits.type,
            initialInvestment: edits.initialInvestment,
            cashFlow: edits.cashFlow,
            editing: false
        })
    }

    render() {
        if (this.state.editing) {
            return <AddAsset
                name={this.state.name}
                type={this.state.type}
                initialInvestment={this.state.initialInvestment}
                cashFlow={this.state.cashFlow}
                onSubmission={this.props.onUpdate}
                stopEditing={this.stopEditing}
                index={this.props.index}
            />
        } else {
            return (
                <div className="simple-asset">
                    <div>{this.state.name}</div>
                    <div>{this.state.type}</div>
                    <div>{this.state.initialInvestment}</div>
                    <div>{this.state.cashFlow}<span onClick={() => {this.setState({editing: true})}}>&#9998;</span></div>
                </div>
            );
        }
    }
}

export default SimpleAsset;
