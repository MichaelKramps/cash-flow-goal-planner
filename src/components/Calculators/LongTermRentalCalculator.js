import React from 'react';
import './LongTermRentalCalculator.css'
import Shared from "../Shared/Shared";
import FormUtils from "../Shared/FormUtils";

class LongTermRentalCalculator extends React.Component {

    defaultState = {
        propertyValue: this.props.propertyValue || 0,
        downPayment: this.props.downPayment || 0,
        renovationCosts: this.props.renovationCosts || 0,
        holdingCosts: this.props.holdingCosts || 0,
        otherInitialCosts: this.props.otherInitialCosts || 0,
        monthlyIncome: this.props.monthlyIncome || 0,
        mortgage: this.props.mortgage || 0,
        utilities: this.props.utilities || 0,
        maintenance: this.props.maintenance || 0,
        vacancy: this.props.vacancy || 0,
        management: this.props.management || 0,
        otherExpenses: this.props.otherExpenses || 0,
        cashFlow: this.props.cashFlow || 0
    }

    constructor(props) {
        super(props);

        this.state = this.defaultState;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePropertyValueChange = this.handlePropertyValueChange.bind(this);
        this.handleDownPaymentChange = this.handleDownPaymentChange.bind(this);
        this.handleRenovationCostsChange = this.handleRenovationCostsChange.bind(this);
        this.handleHoldingCostsChange = this.handleHoldingCostsChange.bind(this);
        this.handleOtherInitialCostsChange = this.handleOtherInitialCostsChange.bind(this);
        this.handleMonthlyIncomeChange = this.handleMonthlyIncomeChange.bind(this);
        this.handleMortgageChange = this.handleMortgageChange.bind(this);
        this.handleUtilitiesChange = this.handleUtilitiesChange.bind(this);
        this.handleMaintenanceChange = this.handleMaintenanceChange.bind(this);
        this.handleVacancyChange = this.handleVacancyChange.bind(this);
        this.handleManagementChange = this.handleManagementChange.bind(this);
        this.handleOtherExpensesChange = this.handleOtherExpensesChange.bind(this);
    }

    handlePropertyValueChange(event) {
        this.setState({propertyValue: event.target.value}, () => {
            this.updateDynamicFields();
        });
    }

    handleDownPaymentChange(event) {
        this.setState({downPayment: event.target.value}, () => {
            this.updateDynamicFields();
        });
    }

    handleRenovationCostsChange(event) {
        this.setState({renovationCosts: event.target.value}, () => {
            this.updateDynamicFields();
        });
    }

    handleHoldingCostsChange(event) {
        this.setState({holdingCosts: event.target.value}, () => {
            this.updateDynamicFields();
        });
    }

    handleOtherInitialCostsChange(event) {
        this.setState({otherInitialCosts: event.target.value}, () => {
            this.updateDynamicFields();
        });
    }

    handleMonthlyIncomeChange(event) {
        this.setState({monthlyIncome: event.target.value}, () => {
            this.updateDynamicFields();
        });
    }

    handleMortgageChange(event) {
        this.setState({mortgage: event.target.value}, () => {
            this.updateDynamicFields();
        });
    }

    handleUtilitiesChange(event) {
        this.setState({utilities: event.target.value}, () => {
            this.updateDynamicFields();
        });
    }

    handleMaintenanceChange(event) {
        this.setState({maintenance: event.target.value}, () => {
            this.updateDynamicFields();
        });
    }

    handleVacancyChange(event) {
        this.setState({vacancy: event.target.value}, () => {
            this.updateDynamicFields();
        });
    }

    handleManagementChange(event) {
        this.setState({management: event.target.value}, () => {
            this.updateDynamicFields();
        });
    }

    handleOtherExpensesChange(event) {
        this.setState({otherExpenses: event.target.value}, () => {
            this.updateDynamicFields();
        });
    }

    updateInitialInvestment() {
        let initialInvestment = FormUtils.parseIntegerInput(this.state.downPayment);
        initialInvestment += FormUtils.parseIntegerInput(this.state.renovationCosts);
        initialInvestment += FormUtils.parseIntegerInput(this.state.holdingCosts);
        initialInvestment += FormUtils.parseIntegerInput(this.state.otherInitialCosts);

        this.setState({initialInvestment: initialInvestment});
    }

    updateCashFlow() {
        let newCashFlow = FormUtils.parseIntegerInput(this.state.monthlyIncome);
        newCashFlow -= FormUtils.parseIntegerInput(this.state.mortgage);
        newCashFlow -= FormUtils.parseIntegerInput(this.state.utilities);
        newCashFlow -= FormUtils.parseIntegerInput(this.state.maintenance);
        newCashFlow -= FormUtils.parseIntegerInput(this.state.vacancy);
        newCashFlow -= FormUtils.parseIntegerInput(this.state.management);
        newCashFlow -= FormUtils.parseIntegerInput(this.state.otherExpenses);

        this.setState({cashFlow: newCashFlow});
    }

    updateDynamicFields() {
        this.updateCashFlow();
        this.updateInitialInvestment();
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
            <div className={"long-term-rental-calculator " + Shared.determineVisibility(this.props)}>
                <form onSubmit={this.handleSubmit}>
                    <h2>Long Term Rental Calculator</h2>
                    <h3>Initial Investment</h3>
                    <div>
                        <label>Purchase Price/Property Value</label>
                        <input
                            value={this.state.propertyValue}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handlePropertyValueChange}
                        />
                    </div>
                    <div>
                        <label>Down Payment</label>
                        <input
                            value={this.state.downPayment}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleDownPaymentChange}
                        />
                    </div>
                    <div>
                        <label>Renovation Costs</label>
                        <input
                            value={this.state.renovationCosts}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleRenovationCostsChange}
                        />
                    </div>
                    <div>
                        <label>Holding Costs</label>
                        <input
                            value={this.state.holdingCosts}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleHoldingCostsChange}
                        />
                    </div>
                    <div>
                        <label>Other Initial Costs</label>
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
                        <label>Expected Monthly Income</label>
                        <input
                            value={this.state.monthlyIncome}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleMonthlyIncomeChange}
                        />
                    </div>
                    <h3>Expenses</h3>
                    <div>
                        <label>Mortgage Payment</label>
                        <input
                            value={this.state.mortgage}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleMortgageChange}
                        />
                    </div>
                    <div>
                        <label>Utilities</label>
                        <input
                            value={this.state.utilities}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleUtilitiesChange}
                        />
                    </div>
                    <div>
                        <label>Maintenance</label>
                        <input
                            value={this.state.maintenance}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleMaintenanceChange}
                        />
                    </div>
                    <div>
                        <label>Vacancy</label>
                        <input
                            value={this.state.vacancy}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleVacancyChange}
                        />
                    </div>
                    <div>
                        <label>Property Management</label>
                        <input
                            value={this.state.management}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleManagementChange} />
                    </div>
                    <div>
                        <label>Other Expenses</label>
                        <input
                            value={this.state.otherExpenses}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleOtherExpensesChange}
                        />
                    </div>
                    <div>
                        Monthly Cash Flow: ${this.state.cashFlow}
                    </div>
                    <input type="Submit" value="Submit" onChange={() => {}} />
                </form>
            </div>
        );
    }
}

export default LongTermRentalCalculator;