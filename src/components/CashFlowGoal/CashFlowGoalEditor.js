import React from 'react';
import './CashFlowGoalEditor.css';
import ModalForm from "../Shared/ModalForm";
import FormUtils from "../Shared/FormUtils";

class CashFlowGoalEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cashFlowGoal: this.props.cashFlowGoal,
            expenses: {
                mortgage: 0,
                utilities: 0,
                food: 0,
                travel: 0,
                entertainment: 0,
                miscellaneous: 0,
                investing: 0
            }
        };

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
                cashFlowGoal: event.target.value
            })
        } else {
            let difference = FormUtils.parseIntegerInput(event.target.value) - this.calculateGoal();
            let newExpenses = this.state.expenses;
            newExpenses.investing = FormUtils.parseIntegerInput(this.state.investing) + difference + FormUtils.parseIntegerInput(this.state.expenses.investing);

            this.setState({
                cashFlowGoal: FormUtils.parseIntegerInput(event.target.value),
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
        console.log(FormUtils.parseIntegerInput(this.state.expenses.mortgage))
        console.log(FormUtils.parseIntegerInput(this.state.expenses.utilities))
        console.log(FormUtils.parseIntegerInput(this.state.expenses.food))
        console.log(FormUtils.parseIntegerInput(this.state.expenses.travel))
        console.log(FormUtils.parseIntegerInput(this.state.expenses.entertainment))
        console.log(FormUtils.parseIntegerInput(this.state.expenses.miscellaneous))
        console.log(FormUtils.parseIntegerInput(this.state.expenses.investing))

        return FormUtils.parseIntegerInput(this.state.expenses.mortgage) +
            FormUtils.parseIntegerInput(this.state.expenses.utilities) +
            FormUtils.parseIntegerInput(this.state.expenses.food) +
            FormUtils.parseIntegerInput(this.state.expenses.travel) +
            FormUtils.parseIntegerInput(this.state.expenses.entertainment) +
            FormUtils.parseIntegerInput(this.state.expenses.miscellaneous) +
            FormUtils.parseIntegerInput(this.state.expenses.investing);
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
            newExpenses[expense] = FormUtils.parseIntegerInput(event.target.value);
            this.setState({
                cashFlowGoal: this.calculateGoal(),
                expenses: newExpenses
            })
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmission(this.state);
    }

    render() {
        return (
            <ModalForm visible={this.props.editing} onSubmission={this.handleSubmit}>
                <h3>Update your monthly cash flow goal</h3>
                <div>
                    <label>Monthly cash flow goal</label>
                    <input value={this.state.cashFlowGoal} onChange={this.handleGoalChange} />
                </div>
                <div>
                    <label>Mortgage/rent</label>
                    <input value={this.state.expenses.mortgage} onChange={this.handleMortgageChange} />
                </div>
                <div>
                    <label>Utilities</label>
                    <input value={this.state.expenses.utilities} onChange={this.handleUtilitiesChange} />
                </div>
                <div>
                    <label>Food</label>
                    <input value={this.state.expenses.food} onChange={this.handleFoodChange} />
                </div>
                <div>
                    <label>Travel</label>
                    <input value={this.state.expenses.travel} onChange={this.handleTravelChange} />
                </div>
                <div>
                    <label>Entertainment</label>
                    <input value={this.state.expenses.entertainment} onChange={this.handleEntertainmentChange} />
                </div>
                <div>
                    <label>Miscellaneous Expenses</label>
                    <input value={this.state.expenses.miscellaneous} onChange={this.handleMiscellaneousChange} />
                </div>
                <div>
                    <label>Cash for investing</label>
                    <input value={this.state.expenses.investing} onChange={this.handleInvestingChange} />
                </div>
                <input type="submit" value="Change goal" />
            </ModalForm>
        )
    }
}

export default CashFlowGoalEditor;