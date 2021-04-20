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
        this.handleMortgageChange = this.handleMortgageChange.bind(this);
        this.handleUtilitiesChange = this.handleUtilitiesChange.bind(this);
        this.handleFoodChange = this.handleFoodChange.bind(this);
        this.handleTravelChange = this.handleTravelChange.bind(this);
        this.handleEntertainmentChange = this.handleEntertainmentChange.bind(this);
        this.handleMiscellaneousChange = this.handleMiscellaneousChange.bind(this);
        this.handleInvestingChange = this.handleInvestingChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleGoalChange(event) {
        if (event.target.value === '') {
            this.setState({
                goal: event.target.value
            })
        } else {
            let difference = this.parseInput(event.target.value) - this.calculateGoal();
            let newExpenses = this.state.expenses;
            newExpenses.investing = this.parseInput(this.state.investing) + difference;

            this.setState({
                goal: event.target.value,
                expenses: newExpenses
            })
        }
    }

    handleMortgageChange(event) {
        this.handleExpenseChange(event, 'mortgage');
    }

    handleUtilitiesChange(event) {
        this.handleExpenseChange(event, 'utilities');
    }

    handleFoodChange(event) {
        this.handleExpenseChange(event, 'food');
    }

    handleTravelChange(event) {
        this.handleExpenseChange(event, 'travel');
    }

    handleEntertainmentChange(event) {
        this.handleExpenseChange(event, 'entertainment');
    }

    handleMiscellaneousChange(event) {
        this.handleExpenseChange(event, 'miscellaneous');
    }

    handleInvestingChange(event) {
        this.handleExpenseChange(event, 'investing');
    }

    calculateGoal() {
        console.log(this.state);
        return this.parseInput(this.state.expenses.mortgage) +
            this.parseInput(this.state.expenses.utilities) +
            this.parseInput(this.state.expenses.food) +
            this.parseInput(this.state.expenses.travel) +
            this.parseInput(this.state.expenses.entertainment) +
            this.parseInput(this.state.expenses.miscellaneous) +
            this.parseInput(this.state.expenses.investing);
    }
    
    parseInput(value) {
        return parseInt(value) || 0;
    }

    handleExpenseChange (event, expense) {
        if (event.target.value === '') {
            let newExpenses = this.state.expenses;
            newExpenses[expense] = '';
            this.setState({
                expenses: newExpenses
            })
        } else {
            let newExpenses = this.state.expenses;
            newExpenses[expense] = this.parseInput(event.target.value);
            this.setState({
                goal: this.calculateGoal(),
                expenses: newExpenses
            })
        }
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
                    <div>
                        <label>Monthly cash flow goal</label><input value={this.state.goal} onChange={this.handleGoalChange} />
                    </div>
                    <div>
                        <label>Mortgage/rent</label><input value={this.state.expenses.mortgage} onChange={this.handleMortgageChange} />
                    </div>
                    <div>
                        <label>Utilities</label><input value={this.state.expenses.utilities} onChange={this.handleUtilitiesChange} />
                    </div>
                    <div>
                        <label>Food</label><input value={this.state.expenses.food} onChange={this.handleFoodChange} />
                    </div>
                    <div>
                        <label>Travel</label><input value={this.state.expenses.travel} onChange={this.handleTravelChange} />
                    </div>
                    <div>
                        <label>Entertainment</label><input value={this.state.expenses.entertainment} onChange={this.handleEntertainmentChange} />
                    </div>
                    <div>
                        <label>Miscellaneous Expenses</label><input value={this.state.expenses.miscellaneous} onChange={this.handleMiscellaneousChange} />
                    </div>
                    <div>
                        <label>Cash for investing</label><input value={this.state.expenses.investing} onChange={this.handleInvestingChange} />
                    </div>
                    <input type="submit" value="Change goal" />
                </ModalForm>
            </React.Fragment>
        )
    }
}

export default CashFlowGoalEditor;