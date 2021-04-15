import React from 'react';
import './CashFlowGoalEditor.css';
import ModalForm from "../Shared/ModalForm";

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
        return (
            <React.Fragment>
                <div className="cash-flow-goal">
                    Goal: ${this.props.goal}/month
                    <span onClick={() => {this.setState({editing: true})}}>&#9998;</span>
                </div>
                <ModalForm visible={this.state.editing} onSubmission={this.handleSubmit}>
                    <h3>Update your monthly cash flow goal</h3>
                    <input value={this.state.goal} onChange={this.handleGoalChange} />
                    <input type="submit" value="Change goal" />
                </ModalForm>
            </React.Fragment>
        )
    }
}

export default CashFlowGoalEditor;