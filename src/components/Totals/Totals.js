import React from 'react';
import './Totals.css';
import CashFlowGoalEditor from "../CashFlowGoal/CashFlowGoalEditor";
import FormUtils from "../Shared/FormUtils";

class Totals extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cashFlowGoal: 2000,
            currentCashFlow: 0,
            editingCashFlowGoal: false,
            editingCurrentCashFlow: false
        }

        this.updateCashFlowGoal = this.updateCashFlowGoal.bind(this);
    }

    updateCashFlowGoal(state) {
        console.log(state);
        this.setState({cashFlowGoal: state.cashFlowGoal}, () => {
            this.setState({editingCashFlowGoal: false});
        });
    }

    calculateCashFlowNeeded() {
        return FormUtils.parseIntegerInput(this.state.cashFlowGoal) - FormUtils.parseIntegerInput(this.state.currentAssets);
    }

    render() {
        return (
            <div className="totals-container">
                <div>
                    <h2>Cash Flow Goal</h2>
                    <div className="cash-flow-goal">
                        Goal: ${this.state.cashFlowGoal}/month
                        <span onClick={() => {this.setState({editingCashFlowGoal: true})}}>&#9998;</span>
                    </div>
                    <CashFlowGoalEditor
                        editing={this.state.editingCashFlowGoal}
                        onSubmission={this.updateCashFlowGoal} />
                </div>
                <div>
                    <h3>Current Cash Flow</h3>
                    {/*<CurrentCashFlowEditor />*/}
                </div>
                <div>
                    <h3>Additional Cash Flow Needed</h3>
                    <div>${this.calculateCashFlowNeeded()}/month</div>
                </div>
            </div>
        );
    }
}

export default Totals;