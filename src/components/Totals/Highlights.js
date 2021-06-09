import React from 'react';
import './Totals.css';
import CashFlowGoalEditor from "./CashFlowGoal/CashFlowGoalEditor";
import FormUtils from "../Shared/FormUtils";
import CurrentCashFlowEditor from "./CurrentCashFlow/CurrentCashFlowEditor";

class Highlights extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cashFlowGoal: {
                cashFlowGoal: 0
            },
            currentCashFlow: {
                totalCashFlow: 0
            },
            editingCashFlowGoal: false,
            editingCurrentCashFlow: false
        }

        this.updateCashFlowGoal = this.updateCashFlowGoal.bind(this);
        this.updateCurrentCashFlow = this.updateCurrentCashFlow.bind(this);
    }

    updateCashFlowGoal(state) {
        this.setState({cashFlowGoal: state}, () => {
            this.setState({editingCashFlowGoal: false}, () => {
                this.updateSimulator();
            });
        });
    }

    updateCurrentCashFlow(state) {
        this.setState({currentCashFlow: state}, () => {
            this.setState({editingCurrentCashFlow: false}, () => {
                this.updateSimulator();
            });
        });
    }

    calculateCashFlowNeeded() {
        console.log(this.state.currentCashFlow)
        return FormUtils.parseIntegerInput(this.state.cashFlowGoal.cashFlowGoal) - FormUtils.parseIntegerInput(this.state.currentCashFlow.totalCashFlow);
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
                            Goal: ${this.state.cashFlowGoal.cashFlowGoal}/month
                            <span onClick={() => {this.setState({editingCashFlowGoal: true})}}>&#9998;</span>
                        </p>
                        <p>
                            by: {this.state.cashFlowGoal.goalDate}
                        </p>
                    </div>
                    <CashFlowGoalEditor
                        {...this.state.cashFlowGoal}
                        editing={this.state.editingCashFlowGoal}
                        onSubmission={this.updateCashFlowGoal} />
                </div>
                <div>
                    <h3>Current Cash Flow</h3>
                    <div className="current-cash-flow">
                        Goal: ${this.state.currentCashFlow.totalCashFlow}/month
                        <span onClick={() => {this.setState({editingCurrentCashFlow: true})}}>&#9998;</span>
                    </div>
                    <CurrentCashFlowEditor
                        {...this.state.currentCashFlow}
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