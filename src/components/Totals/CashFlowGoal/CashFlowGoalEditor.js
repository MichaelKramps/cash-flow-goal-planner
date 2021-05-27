import React from 'react';
import './CashFlowGoalEditor.css';
import ModalForm from "../../Shared/ModalForm";
import FormUtils from "../../Shared/FormUtils";

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
                insurance: 0,
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
        this.handleInsuranceChange = this.handleInsuranceChange.bind(this);
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
        this.handleExpenseChange(event, "mortgage");
    }

    handleUtilitiesChange(event) {
        this.handleExpenseChange(event, "utilities");
    }

    handleFoodChange(event) {
        this.handleExpenseChange(event, "food");
    }

    handleTravelChange(event) {
        this.handleExpenseChange(event, "travel");
    }

    handleInsuranceChange(event) {
        this.handleExpenseChange(event, "insurance");
    }

    handleEntertainmentChange(event) {
        this.handleExpenseChange(event, "entertainment");
    }

    handleMiscellaneousChange(event) {
        this.handleExpenseChange(event, "miscellaneous");
    }

    handleInvestingChange(event) {
        this.handleExpenseChange(event, "investing");
    }

    calculateGoal() {
        return FormUtils.parseIntegerInput(this.state.expenses.mortgage) +
            FormUtils.parseIntegerInput(this.state.expenses.utilities) +
            FormUtils.parseIntegerInput(this.state.expenses.food) +
            FormUtils.parseIntegerInput(this.state.expenses.travel) +
            FormUtils.parseIntegerInput(this.state.expenses.insurance) +
            FormUtils.parseIntegerInput(this.state.expenses.entertainment) +
            FormUtils.parseIntegerInput(this.state.expenses.miscellaneous) +
            FormUtils.parseIntegerInput(this.state.expenses.investing);
    }

    handleExpenseChange(event, name) {
        let newExpenses = this.state.expenses;
        newExpenses[name] = event.target.value;
        this.setState({
            cashFlowGoal: this.calculateGoal(),
            expenses: newExpenses
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({cashFlowGoal: this.calculateGoal()}, () => {
            this.props.onSubmission(this.state);
        });
    }

    render() {
        return (
            <ModalForm visible={this.props.editing} onSubmission={this.handleSubmit}>
                <h3>Update your monthly cash flow goal</h3>
                <div>
                    <label>Monthly cash flow goal</label>
                    <input
                        value={this.state.cashFlowGoal}
                        onKeyDown={FormUtils.validateIntegerInput}
                        onChange={this.handleGoalChange}
                    />
                </div>
                <div>
                    <label>Mortgage/rent</label>
                    <input
                        value={this.state.expenses.mortgage}
                        onKeyDown={FormUtils.validateIntegerInput}
                        onChange={this.handleMortgageChange}
                    />
                </div>
                <div>
                    <label>Utilities</label>
                    <input
                        value={this.state.expenses.utilities}
                        onKeyDown={FormUtils.validateIntegerInput}
                        onChange={this.handleUtilitiesChange}
                    />
                </div>
                <div>
                    <label>Food</label>
                    <input
                        value={this.state.expenses.food}
                        onKeyDown={FormUtils.validateIntegerInput}
                        onChange={this.handleFoodChange}
                    />
                </div>
                <div>
                    <label>Travel</label>
                    <input
                        value={this.state.expenses.travel}
                        onKeyDown={FormUtils.validateIntegerInput}
                        onChange={this.handleTravelChange}
                    />
                </div>
                <div>
                    <label>Insurance</label>
                    <input
                        value={this.state.expenses.insurance}
                        onKeyDown={FormUtils.validateIntegerInput}
                        onChange={this.handleInsuranceChange}
                    />
                </div>
                <div>
                    <label>Entertainment</label>
                    <input
                        value={this.state.expenses.entertainment}
                        onKeyDown={FormUtils.validateIntegerInput}
                        onChange={this.handleEntertainmentChange}
                    />
                </div>
                <div>
                    <label>Miscellaneous Expenses</label>
                    <input
                        value={this.state.expenses.miscellaneous}
                        onKeyDown={FormUtils.validateIntegerInput}
                        onChange={this.handleMiscellaneousChange}
                    />
                </div>
                <div>
                    <label>Cash for investing</label>
                    <input
                        value={this.state.expenses.investing}
                        onKeyDown={FormUtils.validateIntegerInput}
                        onChange={this.handleInvestingChange}
                    />
                </div>
                <input type="submit" value="Update goal" />
            </ModalForm>
        )
    }
}

export default CashFlowGoalEditor;