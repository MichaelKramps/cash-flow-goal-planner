import React from 'react';
import './BusinessCalculator.css';
import Shared from "../Shared/Shared";
import FormUtils from "../Shared/FormUtils";
import InformationIcon from "../Shared/InformationIcon";

class BusinessCalculator extends React.Component {

    defaultState = {
        businessValue: this.props.businessValue || 0,
        downPayment: this.props.downPayment || 0,
        otherInitialCosts: this.props.otherInitialCosts || 0,
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
        initialInvestment: this.props.initialInvestment || 0,
        yearlyCashFlow: this.props.yearlyCashFlow || 0,
        monthlyCashFlow: this.props.monthlyCashFlow || 0,
        cashFlow: this.props.cashFlow || 0
    }

    constructor(props) {
        super(props);

        this.state = this.defaultState;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBusinessValueChange = this.handleBusinessValueChange.bind(this);
        this.handleDownPaymentChange = this.handleDownPaymentChange.bind(this);
        this.handleOtherInitialCostsChange = this.handleOtherInitialCostsChange.bind(this);
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

    handleBusinessValueChange(event) {
        this.setState({businessValue: event.target.value}, () => {
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

    updateInitialInvestment() {
        let initialInvestment = FormUtils.parseIntegerInput(this.state.downPayment);
        initialInvestment += FormUtils.parseIntegerInput(this.state.otherInitialCosts);

        this.setState({initialInvestment: initialInvestment});
    }

    updateCashFlow() {
        this.setState({yearlyCashFlow: this.calculateYearlyCashFlow()}, () => {
            let monthlyCashFlow = this.calculateMonthlyCashFlow();
            this.setState({monthlyCashFlow: monthlyCashFlow}, () => {
                this.setState({cashFlow: monthlyCashFlow});
            });
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
            this.updateDynamicFields();
        })
    }

    handleTotalMonthlyExpensesChange(event, calculatedValue){
        if (calculatedValue) {
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
            this.updateDynamicFields();
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

    otherInitialCostsInfo() {
        return(
            <InformationIcon>
                Depending on your specific business initial costs can include just about anything. Some examples are lawyer, accountant or other professional fees, new equipment, renovation costs, signing bonuses, or furnishing costs.
            </InformationIcon>
        )
    }

    payrollInfo() {
        return(
            <InformationIcon>
                Include employee salaries and the cost of any benefit programs like health insurance and retirement plans.
            </InformationIcon>
        )
    }

    subscriptionsInfo() {
        return(
            <InformationIcon>
                Include any monthly recurring fees. Some examples are licensing fees, taxes, analytics software, server costs, and Photoshop.
            </InformationIcon>
        )
    }

    otherExpensesInfo() {
        return(
            <InformationIcon>
                There are a huge number of expenses that may not fit into the other categories. For example travel expenses, conferences, business related meals, and contract work.
            </InformationIcon>
        )
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

    updateDynamicFields() {
        this.updateExpensesAndCashFlow();
        this.updateInitialInvestment();
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
            this.props.onSubmission(this.state);
            this.setState(this.defaultState);
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
                    <h3>Initial Investment</h3>
                    <div className="calculator-input-container">
                        <label>Purchase Price/Business Value: </label>
                        <input
                            value={this.state.businessValue}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleBusinessValueChange}
                        />
                    </div>
                    <div className="calculator-input-container">
                        <label>Down Payment: </label>
                        <input
                            value={this.state.downPayment}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleDownPaymentChange}
                        />
                    </div>
                    <div className="calculator-input-container">
                        <label>Other Initial Costs:
                            {this.otherInitialCostsInfo()}
                        </label>
                        <input
                            value={this.state.otherInitialCosts}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleOtherInitialCostsChange}
                        />
                    </div>
                    <div className="calculator-cash-flow-result">
                        Total Initial Investment: ${this.state.initialInvestment}
                    </div>
                    <h3>Revenue</h3>
                    <div className="calculator-input-container">
                        <label>Expected Yearly Revenue: </label>
                        <input
                            value={this.state.yearlyRevenue}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleYearlyRevenueChange}
                        />
                    </div>
                    <div className="calculator-input-container">
                        <label>Expected Monthly Revenue: </label>
                        <input
                            value={this.state.monthlyRevenue}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleMonthlyRevenueChange}
                        />
                    </div>
                    <h3>Expenses</h3>
                    <div className="calculator-input-container">
                        <label>Total Yearly Expenses: </label>
                        <input
                            value={this.state.totalYearlyExpenses}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleTotalYearlyExpensesChange}
                        />
                    </div>
                    <div className="calculator-input-container">
                        <label>Yearly Rent: </label>
                        <input
                            value={this.state.yearlyRent}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleYearlyRentChange}
                        />
                    </div>
                    <div className="calculator-input-container">
                        <label>Yearly Loan Payments: </label>
                        <input
                            value={this.state.yearlyLoanPayment}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleYearlyLoanPaymentChange}
                        />
                    </div>
                    <div className="calculator-input-container">
                        <label>Yearly Payroll:
                            {this.payrollInfo()}
                        </label>
                        <input
                            value={this.state.yearlyPayroll}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleYearlyPayrollChange}
                        />
                    </div>
                    <div className="calculator-input-container">
                        <label>Yearly Subscriptions:
                            {this.subscriptionsInfo()}
                        </label>
                        <input
                            value={this.state.yearlySubscriptions}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleYearlySubscriptionsChange}
                        />
                    </div>
                    <div className="calculator-input-container">
                        <label>Yearly Other Expenses:
                            {this.otherExpensesInfo()}
                        </label>
                        <input
                            value={this.state.yearlyOtherExpenses}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleYearlyOtherExpensesChange}
                        />
                    </div>
                    <div className="calculator-input-container">
                        <label>Total Monthly Expenses: </label>
                        <input
                            value={this.state.totalMonthlyExpenses}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleTotalMonthlyExpensesChange}
                        />
                    </div>
                    <div className="calculator-input-container">
                        <label>Monthly Rent: </label>
                        <input
                            value={this.state.monthlyRent}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleMonthlyRentChange}
                        />
                    </div>
                    <div className="calculator-input-container">
                        <label>Monthly Loan Payments: </label>
                        <input
                            value={this.state.monthlyLoanPayment}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleMonthlyLoanPaymentChange}
                        />
                    </div>
                    <div className="calculator-input-container">
                        <label>Monthly Payroll:
                            {this.payrollInfo()}
                        </label>
                        <input
                            value={this.state.monthlyPayroll}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleMonthlyPayrollChange}
                        />
                    </div>
                    <div className="calculator-input-container">
                        <label>Monthly Subscriptions:
                            {this.subscriptionsInfo()}
                        </label>
                        <input
                            value={this.state.monthlySubscriptions}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleMonthlySubscriptionsChange}
                        />
                    </div>
                    <div className="calculator-input-container">
                        <label>Monthly Other Expenses:
                            {this.otherExpensesInfo()}
                        </label>
                        <input
                            value={this.state.monthlyOtherExpenses}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleMonthlyOtherExpensesChange}
                        />
                    </div>
                    <h3>Cash Flow</h3>
                    <div className="calculator-cash-flow-result">
                        Yearly Cash Flow: ${this.state.yearlyCashFlow}
                    </div>
                    <div className="calculator-cash-flow-result">
                        Monthly Cash Flow: ${this.state.monthlyCashFlow}
                    </div>
                    <input type="submit" value="Submit" onChange={() => {}} />
                </form>
            </div>
        );
    }
}

export default BusinessCalculator;