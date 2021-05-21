import React from 'react';
import './BusinessCalculator.css';
import Shared from "../Shared/Shared";
import FormUtils from "../Shared/FormUtils";

class BusinessCalculator extends React.Component {

    defaultState = {
        yearlyRevenue: this.props.yearlyRevenue || 0,
        monthlyRevenue: this.props.monthlyRevenue || 0,
        totalYearlyExpenses: this.props.totalYearlyExpenses || 0,
        totalMonthlyExpenses: this.props.totalMonthlyExpenses || 0,
        yearlyRent: this.props.yearlyRent || 0,
        monthlyRent: this.props.monthlyRent || 0,
        yearlyLoanPayment: this.props.yearlyLoanPayment || 0,
        monthlyLoanPayment: this.props.monthlyLoanPayment || 0,
        yearlyPayroll: this.props.yearlyPayroll || 0,
        monthlyPayroll: this.props.monthlyPayroll || 0,
        yearlySubscriptions: this.props.yearlySubscriptions || 0,
        monthlySubscriptions: this.props.monthlySubscriptions || 0,
        yearlyOtherExpenses: this.props.yearlyOtherExpenses || 0,
        monthlyOtherExpenses: this.props.monthlyOtherExpenses || 0,
        yearlyCashFlow: this.props.yearlyCashFlow || 0,
        monthlyCashFlow: this.props.monthlyCashFlow || 0
    }

    constructor(props) {
        super(props);

        this.state = this.defaultState;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleYearlyRevenueChange = this.handleYearlyRevenueChange.bind(this);
        this.handleMonthlyRevenueChange = this.handleMonthlyRevenueChange.bind(this);
        this.handleTotalYearlyExpensesChange = this.handleTotalYearlyExpensesChange.bind(this);
        this.handleTotalMonthlyExpensesChange = this.handleTotalMonthlyExpensesChange.bind(this);
        this.handleYearlyRentChange = this.handleYearlyRentChange.bind(this);
        this.handleMonthlyRentChange = this.handleMonthlyRentChange.bind(this);
        this.handleYearlyLoanPaymentChange = this.handleYearlyLoanPaymentChange.bind(this);
        this.handleMonthlyLoanPaymentChange = this.handleMonthlyLoanPaymentChange.bind(this);
        this.handleYearlyPayrollChange = this.handleYearlyPayrollChange.bind(this);
        this.handleMonthlyPayrollChange = this.handleMonthlyPayrollChange.bind(this);
        this.handleYearlySubscriptionsChange = this.handleYearlySubscriptionsChange.bind(this);
        this.handleMonthlySubscriptionsChange = this.handleMonthlySubscriptionsChange.bind(this);
        this.handleYearlyOtherExpensesChange = this.handleYearlyOtherExpensesChange.bind(this);
        this.handleMonthlyOtherExpensesChange = this.handleMonthlyOtherExpensesChange.bind(this);
        this.updateCashFlow = this.updateCashFlow.bind(this);
    }

    updateCashFlow() {
        this.setState({yearlyCashFlow: this.calculateYearlyCashFlow()}, () => {
            this.setState({monthlyCashFlow: this.calculateMonthlyCashFlow()});
        });
    }

    calculateYearlyCashFlow() {
        let yearlyCashFlow = FormUtils.parseIntegerInput(this.state.yearlyRevenue) -
            FormUtils.parseIntegerInput(this.state.totalYearlyExpenses);
        return yearlyCashFlow;
    }

    calculateMonthlyCashFlow() {
        let monthlyCashFlow = FormUtils.parseIntegerInput(this.state.monthlyRevenue) -
            FormUtils.parseIntegerInput(this.state.totalMonthlyExpenses);
        return monthlyCashFlow;
    }

    handleTotalYearlyExpensesChange(event, calculatedValue){
        if (calculatedValue) {
            this.setState({totalYearlyExpenses: calculatedValue}, () => {
                this.recalculateYearlyExpenses();
            })
        } else {
            let yearlyExpenses = FormUtils.parseIntegerInput(event.target.value);
            this.setState({totalYearlyExpenses: yearlyExpenses}, () => {
                this.recalculateYearlyExpenses();
                this.handleTotalMonthlyExpensesChange(null, (yearlyExpenses / 12).toFixed(0));
            })
        }
    }

    recalculateYearlyExpenses() {
        let yearlyOtherExpenses = FormUtils.parseIntegerInput(this.state.totalYearlyExpenses)
            - FormUtils.parseIntegerInput(this.state.yearlyRent)
            - FormUtils.parseIntegerInput(this.state.yearlyPayroll)
            - FormUtils.parseIntegerInput(this.state.yearlySubscriptions);

        this.setState({yearlyOtherExpenses: yearlyOtherExpenses}, () => {
            this.updateExpensesAndCashFlow();
        })
    }

    handleTotalMonthlyExpensesChange(event, calculatedValue){
        if (calculatedValue) {
            console.log(calculatedValue)
            this.setState({totalMonthlyExpenses: calculatedValue}, () => {
                this.recalculateMonthlyExpenses();
            })
        } else {
            let monthlyExpenses = FormUtils.parseIntegerInput(event.target.value);
            this.setState({totalMonthlyExpenses: monthlyExpenses}, () => {
                this.recalculateMonthlyExpenses();
                this.handleTotalYearlyExpensesChange(null, (monthlyExpenses * 12).toFixed(0));
            })
        }
    }

    recalculateMonthlyExpenses() {
        let monthlyOtherExpenses = FormUtils.parseIntegerInput(this.state.totalMonthlyExpenses)
            - FormUtils.parseIntegerInput(this.state.monthlyRent)
            - FormUtils.parseIntegerInput(this.state.monthlyPayroll)
            - FormUtils.parseIntegerInput(this.state.monthlySubscriptions);

        this.setState({monthlyOtherExpenses: monthlyOtherExpenses}, () => {
            this.updateExpensesAndCashFlow();
        })
    }

    handleYearlyRevenueChange(event){
        this.handleYearlyChange(event, "yearlyRevenue", "monthlyRevenue");
    }

    handleMonthlyRevenueChange(event){
        this.handleMonthlyChange(event, "yearlyRevenue", "monthlyRevenue");
    }

    handleYearlyRentChange(event){
        this.handleYearlyChange(event, "yearlyRent", "monthlyRent");
    }

    handleMonthlyRentChange(event){
        this.handleMonthlyChange(event, "yearlyRent", "monthlyRent");
    }

    handleYearlyLoanPaymentChange(event){
        this.handleYearlyChange(event, "yearlyLoanPayment", "monthlyLoanPayment");
    }

    handleMonthlyLoanPaymentChange(event){
        this.handleMonthlyChange(event, "yearlyLoanPayment", "monthlyLoanPayment");
    }

    handleYearlyPayrollChange(event){
        this.handleYearlyChange(event, "yearlyPayroll", "monthlyPayroll");
    }

    handleMonthlyPayrollChange(event){
        this.handleMonthlyChange(event, "yearlyPayroll", "monthlyPayroll");
    }

    handleYearlySubscriptionsChange(event){
        this.handleYearlyChange(event, "yearlySubscriptions", "monthlySubscriptions");
    }

    handleMonthlySubscriptionsChange(event){
        this.handleMonthlyChange(event, "yearlySubscriptions", "monthlySubscriptions");
    }

    handleYearlyOtherExpensesChange(event){
        this.handleYearlyChange(event, "yearlyOtherExpenses", "monthlyOtherExpenses");
    }

    handleMonthlyOtherExpensesChange(event){
        this.handleMonthlyChange(event, "yearlyOtherExpenses", "monthlyOtherExpenses");
    }

    handleYearlyChange(event, yearlyItemToUpdate, monthlyItemToUpdate) {
        let newState = JSON.parse(JSON.stringify(this.state));

        let newYearlyValue = FormUtils.parseIntegerInput(event.target.value);
        let newMonthlyValue = (newYearlyValue / 12).toFixed(0);

        newState[yearlyItemToUpdate] = newYearlyValue;
        newState[monthlyItemToUpdate] = newMonthlyValue;
        this.setState(newState, () => {
            this.updateExpensesAndCashFlow();
        });
    }

    handleMonthlyChange(event, yearlyItemToUpdate, monthlyItemToUpdate) {
        let newState = JSON.parse(JSON.stringify(this.state));

        let newMonthlyValue = FormUtils.parseIntegerInput(event.target.value);
        let newYearlyValue = (newMonthlyValue * 12).toFixed(0);

        newState[yearlyItemToUpdate] = newYearlyValue;
        newState[monthlyItemToUpdate] = newMonthlyValue;
        this.setState(newState, () => {
            this.updateExpensesAndCashFlow();
        });
    }

    updateExpensesAndCashFlow() {
        let totalYearlyExpenses = FormUtils.parseIntegerInput(this.state.yearlyRent) +
            FormUtils.parseIntegerInput(this.state.yearlyLoanPayment) +
            FormUtils.parseIntegerInput(this.state.yearlyPayroll) +
            FormUtils.parseIntegerInput(this.state.yearlySubscriptions) +
            FormUtils.parseIntegerInput(this.state.yearlyOtherExpenses);

        this.setState({totalYearlyExpenses: totalYearlyExpenses}, () => {
            this.updateMonthlyExpensesAndCashFlow(); //
        });
    }

    updateMonthlyExpensesAndCashFlow() {
        let totalMonthlyExpenses = FormUtils.parseIntegerInput(this.state.monthlyRent) +
            FormUtils.parseIntegerInput(this.state.monthlyLoanPayment) +
            FormUtils.parseIntegerInput(this.state.monthlyPayroll) +
            FormUtils.parseIntegerInput(this.state.monthlySubscriptions) +
            FormUtils.parseIntegerInput(this.state.monthlyOtherExpenses);

        this.setState({totalMonthlyExpenses: totalMonthlyExpenses}, () => {
            this.updateCashFlow();
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.formIsValid()) {
            this.setState(this.defaultState);
            this.props.onSubmission(this.state);
        }
    }

    formIsValid() {
        return true;
    }

    render() {
        return (
            <div className={"business-calculator " + Shared.determineVisibility(this.props)}>
                <form onSubmit={this.handleSubmit}>
                    <h2>Business Investment Calculator</h2>
                    <div>
                        <label>Expected Yearly Revenue</label>
                        <input
                            value={this.state.yearlyRevenue}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleYearlyRevenueChange}
                        />
                    </div>
                    <div>
                        <label>Expected Monthly Revenue</label>
                        <input
                            value={this.state.monthlyRevenue}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleMonthlyRevenueChange}
                        />
                    </div>
                    <h3>Expenses</h3>
                    <div>
                    <label>Total Yearly Expenses</label>
                    <input
                        value={this.state.totalYearlyExpenses}
                        onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                        onChange={this.handleTotalYearlyExpensesChange}
                    />
                </div>
                    <div className="yearly-expenses">
                        <label>Yearly Rent</label>
                        <input
                            value={this.state.yearlyRent}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleYearlyRentChange}
                        />
                    </div>
                    <div className="yearly-expenses">
                        <label>Yearly Loan Payments</label>
                        <input
                            value={this.state.yearlyLoanPayment}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleYearlyLoanPaymentChange}
                        />
                    </div>
                    <div className="yearly-expenses">
                        <label>Yearly Payroll</label>
                        <input
                            value={this.state.yearlyPayroll}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleYearlyPayrollChange}
                        />
                    </div>
                    <div className="yearly-expenses">
                        <label>Yearly Subscriptions</label>
                        <input
                            value={this.state.yearlySubscriptions}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleYearlySubscriptionsChange}
                        />
                    </div>
                    <div className="yearly-expenses">
                        <label>Yearly Other Expenses</label>
                        <input
                            value={this.state.yearlyOtherExpenses}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleYearlyOtherExpensesChange}
                        />
                    </div>
                    <div>
                        <label>Total Monthly Expenses</label>
                        <input
                            value={this.state.totalMonthlyExpenses}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleTotalMonthlyExpensesChange}
                        />
                    </div>
                    <div className="monthly-expenses">
                        <label>Monthly Rent</label>
                        <input
                            value={this.state.monthlyRent}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleMonthlyRentChange}
                        />
                    </div>
                    <div className="monthly-expenses">
                        <label>Monthly Loan Payments</label>
                        <input
                            value={this.state.monthlyLoanPayment}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleMonthlyLoanPaymentChange}
                        />
                    </div>
                    <div className="monthly-expenses">
                        <label>Monthly Payroll</label>
                        <input
                            value={this.state.monthlyPayroll}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleMonthlyPayrollChange}
                        />
                    </div>
                    <div className="monthly-expenses">
                        <label>Monthly Subscriptions</label>
                        <input
                            value={this.state.monthlySubscriptions}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleMonthlySubscriptionsChange}
                        />
                    </div>
                    <div className="monthly-expenses">
                        <label>Monthly Other Expenses</label>
                        <input
                            value={this.state.monthlyOtherExpenses}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleMonthlyOtherExpensesChange}
                        />
                    </div>
                    <h3>Cash Flow</h3>
                    <div>
                        Yearly Cash Flow: ${this.state.yearlyCashFlow}
                    </div>
                    <div>
                        Monthly Cash Flow: ${this.state.monthlyCashFlow}
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default BusinessCalculator;