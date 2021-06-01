import React from 'react';
import './Totals.css';
import CashFlowGoalEditor from "./CashFlowGoal/CashFlowGoalEditor";
import FormUtils from "../Shared/FormUtils";
import CurrentCashFlowEditor from "./CurrentCashFlow/CurrentCashFlowEditor";

class Highlights extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cashFlowGoal: 0,
            goalDate: "",
            currentCashFlow: 0,
            editingCashFlowGoal: false,
            editingCurrentCashFlow: false
        }

        this.updateCashFlowGoal = this.updateCashFlowGoal.bind(this);
        this.updateCurrentCashFlow = this.updateCurrentCashFlow.bind(this);
    }

    updateCashFlowGoal(state) {
        let newState = JSON.parse(JSON.stringify(this.state));
        newState.cashFlowGoal = state.cashFlowGoal;
        newState.goalDate = state.goalDate;
        newState.editingCashFlowGoal = false;
        this.setState(newState, () => {
            this.updateSimulator();
        });
    }

    updateCurrentCashFlow(state) {
        this.setState({currentCashFlow: state.totalCashFlow}, () => {
            this.updateSimulator();
            this.setState({editingCurrentCashFlow: false});
        });
    }

    calculateCashFlowNeeded() {
        return FormUtils.parseIntegerInput(this.state.cashFlowGoal) - FormUtils.parseIntegerInput(this.state.currentCashFlow);
    }

    updateSimulator() {
        let updatedState = JSON.parse(JSON.stringify(this.state));
        updatedState.editingCashFlowGoal = false;
        updatedState.editingCurrentCashFlow = false;
        this.props.updateSimulator(updatedState);
    }

    render() {
        return (
            <div className="totals-container">
                <div>
                    <h2>Cash Flow Goal</h2>
                    <div className="cash-flow-goal">
                        <p>
                            Goal: ${this.state.cashFlowGoal}/month
                            <span onClick={() => {this.setState({editingCashFlowGoal: true})}}>&#9998;</span>
                        </p>
                        <p>
                            by: {this.state.goalDate}
                        </p>
                    </div>
                    <CashFlowGoalEditor
                        editing={this.state.editingCashFlowGoal}
                        onSubmission={this.updateCashFlowGoal} />
                </div>
                <div>
                    <h3>Current Cash Flow</h3>
                    <div className="current-cash-flow">
                        Goal: ${this.state.currentCashFlow}/month
                        <span onClick={() => {this.setState({editingCurrentCashFlow: true})}}>&#9998;</span>
                    </div>
                    <CurrentCashFlowEditor
                        editing={this.state.editingCurrentCashFlow}
                        onSubmission={this.updateCurrentCashFlow} />
                </div>
                <div>
                    <h3>Additional Cash Flow Needed</h3>
                    <div>${this.calculateCashFlowNeeded()}/month</div>
                </div>
            </div>
        );
    }
}

export default Highlights;