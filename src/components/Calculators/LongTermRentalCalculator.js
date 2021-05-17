import React from 'react';
import './LongTermRentalCalculator.css'
import Shared from "../Shared/Shared";
import FormUtils from "../Shared/FormUtils";

class LongTermRentalCalculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            monthlyIncome: this.props.monthlyIncome || 0,
            mortgage: this.props.mortgage,
            utilities: this.props.utilities,
            maintenance: this.props.maintenance,
            vacancy: this.props.vacancy,
            management: this.props.management,
            otherExpenses: this.props.otherExpenses,
            cashFlow: 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMonthlyIncomeChange = this.handleMonthlyIncomeChange.bind(this);
        this.handleMortgageChange = this.handleMortgageChange.bind(this);
        this.handleUtilitiesChange = this.handleUtilitiesChange.bind(this);
        this.handleMaintenanceChange = this.handleMaintenanceChange.bind(this);
        this.handleVacancyChange = this.handleVacancyChange.bind(this);
        this.handleManagementChange = this.handleManagementChange.bind(this);
        this.handleOtherExpensesChange = this.handleOtherExpensesChange.bind(this);
    }

    handleMonthlyIncomeChange(event) {
        this.setState({monthlyIncome: event.target.value}, () => {
            this.updateCashFlow();
        });
    }

    handleMortgageChange(event) {
        this.setState({mortgage: event.target.value}, () => {
            this.updateCashFlow();
        });
    }

    handleUtilitiesChange(event) {
        this.setState({utilities: event.target.value}, () => {
            this.updateCashFlow();
        });
    }

    handleMaintenanceChange(event) {
        this.setState({maintenance: event.target.value}, () => {
            this.updateCashFlow();
        });
    }

    handleVacancyChange(event) {
        this.setState({vacancy: event.target.value}, () => {
            this.updateCashFlow();
        });
    }

    handleManagementChange(event) {
        this.setState({management: event.target.value}, () => {
            this.updateCashFlow();
        });
    }

    handleOtherExpensesChange(event) {
        this.setState({otherExpenses: event.target.value}, () => {
            this.updateCashFlow();
        });
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

    handleSubmit(event) {
        event.preventDefault();
        if (this.formIsValid()) {
            this.props.onSubmission(this.state);
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
                    <input type="Submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default LongTermRentalCalculator;