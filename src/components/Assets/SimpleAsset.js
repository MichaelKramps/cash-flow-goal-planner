import React from 'react';
import './SimpleAsset.css';
import EditAsset from "./EditAsset";

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
        this.setState({
            name: edits.name,
            type: edits.type,
            initialInvestment: edits.initialInvestment,
            cashFlow: edits.cashFlow,
            editing: false
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="simple-asset">
                    <div>{this.state.name}</div>
                    <div>{this.state.type}</div>
                    <div>{this.state.initialInvestment}</div>
                    <div>{this.state.cashFlow}<span onClick={() => {this.setState({editing: true})}}>&#9998;</span></div>
                </div>
                <EditAsset
                    name={this.state.name}
                    type={this.state.type}
                    visible={this.state.editing}
                    initialInvestment={this.state.initialInvestment}
                    cashFlow={this.state.cashFlow}
                    onSubmission={this.props.onUpdate}
                    stopEditing={this.stopEditing}
                    index={this.props.index}/>
            </React.Fragment>
        );
    }
}

export default SimpleAsset;
