import React from 'react';
import './CashFlowGoalEditor.css';
import ModalForm from "../../Shared/ModalForm";
import FormUtils from "../../Shared/FormUtils";
import InformationIcon from "../../Shared/InformationIcon";

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
            },
            goalDate: this.props.goalDate
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
        this.handleGoalDateChange = this.handleGoalDateChange.bind(this);
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

    handleGoalDateChange(event) {
        let rawDate = event.target.value; //comes in as YYYY-MM-DD
        let splitDate = rawDate.split("-");
        let formattedMonthYear = this.determineMonth(splitDate[1]) + " " + splitDate[0];

        this.setState({goalDate: formattedMonthYear});
    }

    determineMonth (month) {
        switch(month) {
            case "01":
                return "January";
            case "02":
                return "February";
            case "03":
                return "March";
            case "04":
                return "April";
            case "05":
                return "May";
            case "06":
                return "June";
            case "07":
                return "July";
            case "08":
                return "August";
            case "09":
                return "September";
            case "10":
                return "October";
            case "11":
                return "November";
            case "12":
                return "December";
            default:
                return "January"
        }
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
                <div className="calculator-input-container">
                    <label>Monthly cash flow goal: </label>
                    <input
                        value={this.state.cashFlowGoal}
                        onKeyDown={FormUtils.validateIntegerInput}
                        onChange={this.handleGoalChange}
                    />
                </div>
                <div className="calculator-input-container">
                    <label>Mortgage/rent: </label>
                    <input
                        value={this.state.expenses.mortgage}
                        onKeyDown={FormUtils.validateIntegerInput}
                        onChange={this.handleMortgageChange}
                    />
                </div>
                <div className="calculator-input-container">
                    <label>Utilities: </label>
                    <InformationIcon>
                        Include water, electric, sewer, trash, and internet.
                    </InformationIcon>
                    <input
                        value={this.state.expenses.utilities}
                        onKeyDown={FormUtils.validateIntegerInput}
                        onChange={this.handleUtilitiesChange}
                    />
                </div>
                <div className="calculator-input-container">
                    <label>Food: </label>
                    <input
                        value={this.state.expenses.food}
                        onKeyDown={FormUtils.validateIntegerInput}
                        onChange={this.handleFoodChange}
                    />
                </div>
                <div className="calculator-input-container">
                    <label>Travel: </label>
                    <input
                        value={this.state.expenses.travel}
                        onKeyDown={FormUtils.validateIntegerInput}
                        onChange={this.handleTravelChange}
                    />
                </div>
                <div className="calculator-input-container">
                    <label>Insurance: </label>
                    <InformationIcon>
                        Include car insurance, health insurance, vision insurance, life insurance, and any other kind of insurance you expect to pay for.
                    </InformationIcon>
                    <input
                        value={this.state.expenses.insurance}
                        onKeyDown={FormUtils.validateIntegerInput}
                        onChange={this.handleInsuranceChange}
                    />
                </div>
                <div className="calculator-input-container">
                    <label>Entertainment: </label>
                    <input
                        value={this.state.expenses.entertainment}
                        onKeyDown={FormUtils.validateIntegerInput}
                        onChange={this.handleEntertainmentChange}
                    />
                </div>
                <div className="calculator-input-container">
                    <label>Miscellaneous Expenses: </label>
                    <InformationIcon>
                        This includes anything that doesn't fit into another category or unexpected expenses, for example car repairs, gifts or home renovations.
                    </InformationIcon>
                    <input
                        value={this.state.expenses.miscellaneous}
                        onKeyDown={FormUtils.validateIntegerInput}
                        onChange={this.handleMiscellaneousChange}
                    />
                </div>
                <div className="calculator-input-container">
                    <label>Cash for investing: </label>
                    <InformationIcon>
                        Remember that the force of inflation is always present, your money is always losing value and you should never stop investing.
                    </InformationIcon>
                    <input
                        value={this.state.expenses.investing}
                        onKeyDown={FormUtils.validateIntegerInput}
                        onChange={this.handleInvestingChange}
                    />
                </div>
                <h3>Date to Reach Cash Flow Goal</h3>
                    <label>Goal Date</label>
                <input
                    type="date"
                    onChange={this.handleGoalDateChange}
                />
                <input type="submit" value="Update goal" />
            </ModalForm>
        )
    }
}

export default CashFlowGoalEditor;