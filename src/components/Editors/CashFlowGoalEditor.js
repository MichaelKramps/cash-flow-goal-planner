import React from 'react';

class CashFlowGoalEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            goal: this.props.goal,
            expenses: this.props.expenses,
            editing: false
        }

        this.handleGoalChange = this.handleGoalChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleGoalChange(event) {
        this.setState({
            goal: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmission(this.state);
        this.setState({editing: false});
    }

    render() {
        if (this.state.editing) {
            return (
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.goal} onChange={this.handleGoalChange} />
                    <input type="submit" value="Change goal" />
                </form>
            )
        } else {
            return (
                <div>Goal: ${this.state.goal}/month<span onClick={() => {this.setState({editing: true})}}>&#9998;</span></div>
            );
        }
    }
}

export default CashFlowGoalEditor;