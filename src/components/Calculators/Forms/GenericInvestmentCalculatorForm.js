import React from 'react';
import './GenericInvestmentCalculatorForm.css';
import Shared from "../../Shared/Shared";
import FormUtils from "../../Shared/FormUtils";
import InformationIcon from "../../Shared/InformationIcon";

class GenericInvestmentCalculatorForm extends React.Component {

    defaultState = {
        value: this.props.value || 0,
        downPayment: this.props.downPayment || 0,
        otherInitialCosts: this.props.otherInitialCosts || 0,
        yearlyValueGrowth: this.props.yearlyValueGrowth || 0,
        yearlyPayments: this.props.yearlyPayments || 0,
        monthlyPayments: this.props.monthlyPayments || 0,
        yearlyPaymentGrowth: this.props.yearlyPaymentGrowth || 0,
        yearlyExpenses: this.props.yearlyExpenses || 0,
        monthlyExpenses: this.props.monthlyExpenses || 0,
        yearlyExpenseGrowth: this.props.yearlyExpenseGrowth || 0,
        initialInvestment: this.props.initialInvestment || 0,
        cashFlow: this.props.cashFlow || 0
    };

    constructor(props) {
        super(props);

        this.state = this.defaultState;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDownPaymentChange = this.handleDownPaymentChange.bind(this);
        this.handleOtherInitialCostsChange = this.handleOtherInitialCostsChange.bind(this);
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
            this.updateDynamicFields();
        });
    }

    handleDownPaymentChange(event) {
        this.setState({downPayment: event.target.value}, () => {
            this.updateDynamicFields();
        });
    }

    handleOtherInitialCostsChange(event) {
        this.setState({otherInitialCosts: event.target.value}, () => {
            this.updateDynamicFields();
        });
    }

    handleYearlyValueGrowthChange(event) {
        this.setState({yearlyValueGrowth: event.target.value}, () => {
            this.updateDynamicFields();
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
            this.updateDynamicFields();
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
            this.updateDynamicFields();
        });
    }

    handleYearlyChange(event, yearlyItemToUpdate, monthlyItemToUpdate) {
        let newState = JSON.parse(JSON.stringify(this.state));

        let newYearlyValue = FormUtils.parseIntegerInput(event.target.value);
        let newMonthlyValue = (newYearlyValue / 12).toFixed(0);

        newState[yearlyItemToUpdate] = newYearlyValue;
        newState[monthlyItemToUpdate] = newMonthlyValue;
        this.setState(newState, () => {
            this.updateDynamicFields();
        });
    }

    handleMonthlyChange(event, yearlyItemToUpdate, monthlyItemToUpdate) {
        let newState = JSON.parse(JSON.stringify(this.state));

        let newMonthlyValue = FormUtils.parseIntegerInput(event.target.value);
        let newYearlyValue = (newMonthlyValue * 12).toFixed(0);

        newState[yearlyItemToUpdate] = newYearlyValue;
        newState[monthlyItemToUpdate] = newMonthlyValue;
        this.setState(newState, () => {
            this.updateDynamicFields();
        });
    }

    updateInitialInvestment() {
        let initialInvestment = FormUtils.parseIntegerInput(this.state.downPayment);
        initialInvestment += FormUtils.parseIntegerInput(this.state.otherInitialCosts);

        this.setState({initialInvestment: initialInvestment});
    }

    updateCashFlow() {
        let cashFlow = FormUtils.parseIntegerInput(this.state.monthlyPayments) - FormUtils.parseIntegerInput(this.state.monthlyExpenses);

        this.setState({cashFlow: cashFlow});
    }

    updateDynamicFields() {
        this.updateCashFlow();
        this.updateInitialInvestment();
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.formIsValid()) {
            this.props.onSubmission(this.state);
            if (this.props.resetFormOnSubmission) {
                this.setState(this.defaultState);
            }
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
                    <h3>Initial Investment</h3>
                    <div>
                        <label>Value of Investment: </label>
                        <input
                            value={this.state.value}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleValueChange}
                        />
                    </div>
                    <div>
                        <label>Yearly Percentage Increase in Value: </label>
                        <input
                            value={this.state.yearlyValueGrowth}
                            onKeyDown={(event) => {FormUtils.validateFloatInput(event)}}
                            onChange={this.handleYearlyValueGrowthChange}
                        />
                    </div>
                    <div>
                        <label>Down Payment: </label>
                        <input
                            value={this.state.downPayment}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleDownPaymentChange}
                        />
                    </div>
                    <div>
                        <label>Other Initial Costs: </label>
                        <InformationIcon>
                            This can include lawyer fees, accountant fees and other professional consulting fees, as well as renovation costs and a number of other things.
                        </InformationIcon>
                        <input
                            value={this.state.otherInitialCosts}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleOtherInitialCostsChange}
                        />
                    </div>
                    <div>
                        Total Initial Investment: ${this.state.initialInvestment}
                    </div>
                    <h3>Revenue</h3>
                    <div>
                        <label>Payments from Investment Each Year: </label>
                        <input
                            value={this.state.yearlyPayments}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleYearlyPaymentsChange}
                        />
                    </div>
                    <div>
                        <label>Payments from Investment Each Month: </label>
                        <input
                            value={this.state.monthlyPayments}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleMonthlyPaymentsChange}
                        />
                    </div>
                    <div>
                        <label>Yearly Increase in Payments: </label>
                        <InformationIcon>
                            This is your yearly percentage increase in sales or revenue. Put 5 here if your company's sales grow 5% each year.
                        </InformationIcon>
                        <input
                            value={this.state.yearlyPaymentGrowth}
                            onKeyDown={(event) => {FormUtils.validateFloatInput(event)}}
                            onChange={this.handleYearlyPaymentGrowthChange}
                        />
                    </div>
                    <h3>Expenses</h3>
                    <div>
                        <label>Total Expenses for Investment Each Year: </label>
                        <input
                            value={this.state.yearlyExpenses}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleYearlyExpensesChange}
                        />
                    </div>
                    <div>
                        <label>Total Expenses for the Investment Each Month: </label>
                        <input
                            value={this.state.monthlyExpenses}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleMonthlyExpensesChange}
                        />
                    </div>
                    <div>
                        <label>Yearly Increase in Expenses: </label>
                        <InformationIcon>
                            This is your yearly percentage increase in business related expenses. Put 5 here if your company spends 5% more each year.
                        </InformationIcon>
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

export default GenericInvestmentCalculatorForm;