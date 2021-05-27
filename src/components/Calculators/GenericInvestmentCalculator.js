import React from 'react';
import './GenericInvestmentCalculator.css';
import Shared from "../Shared/Shared";
import FormUtils from "../Shared/FormUtils";

class GenericInvestmentCalculator extends React.Component {

    defaultState = {
        value: this.props.value || 0,
        yearlyValueGrowth: this.props.yearlyValueGrowth || 0,
        yearlyPayments: this.props.yearlyPayments || 0,
        monthlyPayments: this.props.monthlyPayments || 0,
        yearlyPaymentGrowth: this.props.yearlyPaymentGrowth || 0,
        yearlyExpenses: this.props.yearlyExpenses || 0,
        monthlyExpenses: this.props.monthlyExpenses || 0,
        yearlyExpenseGrowth: this.props.yearlyExpenseGrowth || 0,
        cashFlow: this.props.cashFlow || 0
    };

    constructor(props) {
        super(props);

        this.state = this.defaultState;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleYearlyValueGrowthChange = this.handleYearlyValueGrowthChange.bind(this);
        this.handleYearlyPaymentsChange = this.handleYearlyPaymentsChange.bind(this);
        this.handleMonthlyPaymentsChange = this.handleMonthlyPaymentsChange.bind(this);
        this.handleYearlyPaymentGrowthChange = this.handleYearlyPaymentGrowthChange.bind(this);
        this.handleYearlyExpensesChange = this.handleYearlyExpensesChange.bind(this);
        this.handleMonthlyExpensesChange = this.handleMonthlyExpensesChange.bind(this);
        this.handleYearlyExpenseGrowthChange = this.handleYearlyExpenseGrowthChange.bind(this);
    }

    handleValueChange(event) {
        this.setState({value: event.target.value}, () => {
            this.updateCashFlow();
        });
    }

    handleYearlyValueGrowthChange(event) {
        this.setState({yearlyValueGrowth: event.target.value}, () => {
            this.updateCashFlow();
        });
    }

    handleYearlyPaymentsChange(event) {
        this.handleYearlyChange(event, "yearlyPayments", "monthlyPayments");
    }

    handleMonthlyPaymentsChange(event) {
        this.handleMonthlyChange(event, "yearlyPayments", "monthlyPayments");
    }

    handleYearlyPaymentGrowthChange(event) {
        this.setState({yearlyPaymentGrowth: event.target.value}, () => {
            this.updateCashFlow();
        });
    }

    handleYearlyExpensesChange(event) {
        this.handleYearlyChange(event, "yearlyExpenses", "monthlyExpenses");
    }

    handleMonthlyExpensesChange(event) {
        this.handleMonthlyChange(event, "yearlyExpenses", "monthlyExpenses");
    }

    handleYearlyExpenseGrowthChange(event) {
        this.setState({yearlyExpenseGrowth: event.target.value}, () => {
            this.updateCashFlow();
        });
    }

    handleYearlyChange(event, yearlyItemToUpdate, monthlyItemToUpdate) {
        let newState = JSON.parse(JSON.stringify(this.state));

        let newYearlyValue = FormUtils.parseIntegerInput(event.target.value);
        let newMonthlyValue = (newYearlyValue / 12).toFixed(0);

        newState[yearlyItemToUpdate] = newYearlyValue;
        newState[monthlyItemToUpdate] = newMonthlyValue;
        this.setState(newState, () => {
            this.updateCashFlow();
        });
    }

    handleMonthlyChange(event, yearlyItemToUpdate, monthlyItemToUpdate) {
        let newState = JSON.parse(JSON.stringify(this.state));

        let newMonthlyValue = FormUtils.parseIntegerInput(event.target.value);
        let newYearlyValue = (newMonthlyValue * 12).toFixed(0);

        newState[yearlyItemToUpdate] = newYearlyValue;
        newState[monthlyItemToUpdate] = newMonthlyValue;
        this.setState(newState, () => {
            this.updateCashFlow();
        });
    }

    updateCashFlow() {
        let cashFlow = FormUtils.parseIntegerInput(this.state.monthlyPayments) - FormUtils.parseIntegerInput(this.state.monthlyExpenses);

        this.setState({cashFlow: cashFlow});
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.formIsValid()) {
            this.props.onSubmission(this.state);
            this.setState(this.defaultState);
        }
    }

    formIsValid() {
        return true;
    }

    render() {
        return (
            <div className={"generic-investment-calculator " + Shared.determineVisibility(this.props)}>
                <form onSubmit={this.handleSubmit}>
                    <h2>Generic Investment Calculator</h2>
                    <div>
                        <label>Value of Investment</label>
                        <input
                            value={this.state.value}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleValueChange}
                        />
                    </div>
                    <div>
                        <label>Yearly Percentage Increase in Value</label>
                        <input
                            value={this.state.yearlyValueGrowth}
                            onKeyDown={(event) => {FormUtils.validateFloatInput(event)}}
                            onChange={this.handleYearlyValueGrowthChange}
                        />
                    </div>
                    <h3>Revenue</h3>
                    <div>
                        <label>Payments from Investment Each Year</label>
                        <input
                            value={this.state.yearlyPayments}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleYearlyPaymentsChange}
                        />
                    </div>
                    <div>
                        <label>Payments from Investment Each Month</label>
                        <input
                            value={this.state.monthlyPayments}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleMonthlyPaymentsChange}
                        />
                    </div>
                    <div>
                        <label>Yearly Increase in Payments</label>
                        <input
                            value={this.state.yearlyPaymentGrowth}
                            onKeyDown={(event) => {FormUtils.validateFloatInput(event)}}
                            onChange={this.handleYearlyPaymentGrowthChange}
                        />
                    </div>
                    <h3>Expenses</h3>
                    <div>
                        <label>Expenses for the Investment Each Year</label>
                        <input
                            value={this.state.yearlyExpenses}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleYearlyExpensesChange}
                        />
                    </div>
                    <div>
                        <label>Expenses for the Investment Each Month</label>
                        <input
                            value={this.state.monthlyExpenses}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleMonthlyExpensesChange}
                        />
                    </div>
                    <div>
                        <label>Yearly Increase in Expenses</label>
                        <input
                            value={this.state.yearlyExpenseGrowth}
                            onKeyDown={(event) => {FormUtils.validateFloatInput(event)}}
                            onChange={this.handleYearlyExpenseGrowthChange}
                        />
                    </div>
                    <div>
                        Current Monthly Cash Flow: ${this.state.cashFlow}
                    </div>
                    <input type="Submit" value="Submit" onChange={() => {}} />
                </form>
            </div>
        );
    }
}

export default GenericInvestmentCalculator;