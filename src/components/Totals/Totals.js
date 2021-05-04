import React from 'react';
import './Totals.css';
import CashFlowGoalEditor from "../CashFlowGoal/CashFlowGoalEditor";
import FormUtils from "../Shared/FormUtils";

class Totals extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cashFlowGoal: 2000,
            currentCashFlow: 0
        }

        this.updateCashFlowGoal = this.updateCashFlowGoal.bind(this);
    }

    updateCashFlowGoal(state) {
        this.setState({cashFlowGoal: state.cashFlowGoal});
    }

    calculateCashFlowNeeded() {
        return FormUtils.parseIntegerInput(this.state.cashFlowGoal) - FormUtils.parseIntegerInput(this.state.currentAssets);
    }

    render() {
        return (
            <div className="totals-container">
                <div>
                    <h2>Cash Flow Goal</h2>
                    <CashFlowGoalEditor
                        cashFlowGoal={this.state.cashFlowGoal}
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