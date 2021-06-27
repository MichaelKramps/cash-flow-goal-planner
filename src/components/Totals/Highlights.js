import React from 'react';
import './Highlights.css';
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

    calculateCashFlowNeededText() {
        let cashFlowNeeded = this.calculateCashFlowNeeded();
        if (cashFlowNeeded > 0) {
            return "$" + cashFlowNeeded + "/month";
        } else {
            return "Goal Reached!";
        }
    }

    calculateCashFlowNeeded() {
        let cashFlowNeeded = FormUtils.parseIntegerInput(this.state.cashFlowGoal.cashFlowGoal) - FormUtils.parseIntegerInput(this.state.currentCashFlow.totalCashFlow);
        return cashFlowNeeded;
    }

    updateSimulator() {
        let updatedState = JSON.parse(JSON.stringify(this.state));
        updatedState.editingCashFlowGoal = false;
        updatedState.editingCurrentCashFlow = false;
        this.props.updateSimulator(updatedState);
    }

    render() {
        let reachedCashFlowGoal = this.calculateCashFlowNeeded() > 0 ? "additional-cash-flow-needed" : "reached-cash-flow-goal";
        return (
            <div className="totals-container">
                <div className="cash-flow-goal highlights-container">
                    <div className="highlights-item">
                        <h3>Cash Flow Goal</h3>
                        <p>
                            ${this.state.cashFlowGoal.cashFlowGoal}/month
                        </p>
                        <p>
                            by: {this.state.cashFlowGoal.goalDate}
                        </p>
                    </div>
                    <div className="highlights-item">
                        <button onClick={() => {this.setState({editingCashFlowGoal: true})}}>Edit&#9998;</button>
                    </div>
                    <CashFlowGoalEditor
                        {...this.state.cashFlowGoal}
                        editing={this.state.editingCashFlowGoal}
                        onSubmission={this.updateCashFlowGoal} />
                </div>
                <div className="current-cash-flow highlights-container">
                    <div className="highlights-item">
                        <h3>Current Cash Flow</h3>
                        <p>${this.state.currentCashFlow.totalCashFlow}/month</p>
                    </div>
                    <div className="highlights-item">
                        <button onClick={() => {this.setState({editingCurrentCashFlow: true})}}>Edit&#9998;</button>
                    </div>
                    <CurrentCashFlowEditor
                        {...this.state.currentCashFlow}
                        editing={this.state.editingCurrentCashFlow}
                        onSubmission={this.updateCurrentCashFlow} />
                </div>
                <div className={"highlights-container " + reachedCashFlowGoal}>
                    <div className="highlights-item">
                        <h3>Additional Cash Flow Needed</h3>
                        <p className="cash-flow-needed-text">{this.calculateCashFlowNeededText()}</p>
                        <p className="enter-cash-flow-goal-text">Enter a Cash Flow Goal</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Highlights;