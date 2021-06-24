import React from 'react';
import './ShortTermRentalCalculatorForm.css'
import FormUtils from "../../Shared/FormUtils";
import Shared from "../../Shared/Shared";
import InformationIcon from "../../Shared/InformationIcon";

class ShortTermRentalCalculatorForm extends React.Component {

    defaultState = {
        propertyValue: this.props.propertyValue || 0,
        downPayment: this.props.downPayment || 0,
        renovationCosts: this.props.renovationCosts || 0,
        furnishingCosts: this.props.furnishingCosts || 0,
        otherInitialCosts: this.props.otherInitialCosts || 0,
        monthlyIncome: this.props.monthlyIncome || 0,
        mortgage: this.props.mortgage || 0,
        utilities: this.props.utilities || 0,
        maintenance: this.props.maintenance || 0,
        cleaning: this.props.cleaning || 0,
        supplies: this.props.supplies || 0,
        otherExpenses: this.props.otherExpenses || 0,
        totalMonthlyExpenses: this.props.totalMonthlyExpenses || 0,
        initialInvestment: this.props.initialInvestment || 0,
        cashFlow: this.props.cashFlow || 0
    };

    constructor(props) {
        super(props);

        this.state = this.defaultState;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePropertyValueChange = this.handlePropertyValueChange.bind(this);
        this.handleDownPaymentChange = this.handleDownPaymentChange.bind(this);
        this.handleRenovationCostsChange = this.handleRenovationCostsChange.bind(this);
        this.handleFurnishingCostsChange = this.handleFurnishingCostsChange.bind(this);
        this.handleOtherInitialCostsChange = this.handleOtherInitialCostsChange.bind(this);
        this.handleMonthlyIncomeChange = this.handleMonthlyIncomeChange.bind(this);
        this.handleMortgageChange = this.handleMortgageChange.bind(this);
        this.handleUtilitiesChange = this.handleUtilitiesChange.bind(this);
        this.handleMaintenanceChange = this.handleMaintenanceChange.bind(this);
        this.handleCleaningChange = this.handleCleaningChange.bind(this);
        this.handleSuppliesChange = this.handleSuppliesChange.bind(this);
        this.handleOtherExpensesChange = this.handleOtherExpensesChange.bind(this);
        this.formIsValid = this.formIsValid.bind(this);
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

    handleFurnishingCostsChange(event) {
        this.setState({furnishingCosts: event.target.value}, () => {
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

    handleCleaningChange(event) {
        this.setState({cleaning: event.target.value}, () => {
            this.updateDynamicFields();
        });
    }

    handleSuppliesChange(event) {
        this.setState({supplies: event.target.value}, () => {
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
        initialInvestment += FormUtils.parseIntegerInput(this.state.furnishingCosts);
        initialInvestment += FormUtils.parseIntegerInput(this.state.otherInitialCosts);

        this.setState({initialInvestment: initialInvestment});
    }

    updateCashFlow() {
        let newCashFlow = FormUtils.parseIntegerInput(this.state.monthlyIncome);
        newCashFlow -= FormUtils.parseIntegerInput(this.state.mortgage);
        newCashFlow -= FormUtils.parseIntegerInput(this.state.utilities);
        newCashFlow -= FormUtils.parseIntegerInput(this.state.maintenance);
        newCashFlow -= FormUtils.parseIntegerInput(this.state.cleaning);
        newCashFlow -= FormUtils.parseIntegerInput(this.state.supplies);
        newCashFlow -= FormUtils.parseIntegerInput(this.state.otherExpenses);

        this.setState({cashFlow: newCashFlow});
    }

    updateTotalExpenses() {
        let totalExpenses = FormUtils.parseIntegerInput(this.state.mortgage);
        totalExpenses += FormUtils.parseIntegerInput(this.state.utilities);
        totalExpenses += FormUtils.parseIntegerInput(this.state.maintenance);
        totalExpenses += FormUtils.parseIntegerInput(this.state.cleaning);
        totalExpenses += FormUtils.parseIntegerInput(this.state.supplies);
        totalExpenses += FormUtils.parseIntegerInput(this.state.otherExpenses);

        this.setState({totalMonthlyExpenses: totalExpenses});
    }

    updateDynamicFields() {
        this.updateCashFlow();
        this.updateTotalExpenses();
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
            <div className={"short-term-rental-calculator " + Shared.determineVisibility(this.props)}>
                <form onSubmit={this.handleSubmit}>
                    <h2>Short Term Rental Calculator</h2>
                    <h3>Initial Investment</h3>
                    <div className="calculator-input-container">
                        <label>Purchase Price/Property Value: </label>
                        <input
                            value={this.state.propertyValue}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handlePropertyValueChange}
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
                        <label>Renovation Costs: </label>
                        <input
                            value={this.state.renovationCosts}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleRenovationCostsChange}
                        />
                    </div>
                    <div className="calculator-input-container">
                        <label>Furnishing Costs:
                            <InformationIcon>
                                You must furnish your short term rental, so include the cost of couches, TVs, beds, sheets, towels, rugs and anything else you plan to put in your rental.
                            </InformationIcon>
                        </label>
                        <input
                            value={this.state.furnishingCosts}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleFurnishingCostsChange}
                        />
                    </div>
                    <div className="calculator-input-container">
                        <label>Other Initial Costs:
                            <InformationIcon>
                                This can include a number of things, but a common one is consulting fees for a lawyer or accountant.
                            </InformationIcon>
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
                        <label>Expected Monthly Income: </label>
                        <input
                            value={this.state.monthlyIncome}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleMonthlyIncomeChange}
                        />
                    </div>
                    <h3>Expenses</h3>
                    <div className="calculator-input-container">
                        <label>Mortgage Payment:
                            <InformationIcon>
                                Include your property taxes and insurance here in addition to your loan payment.
                            </InformationIcon>
                        </label>
                        <input
                            value={this.state.mortgage}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleMortgageChange}
                        />
                    </div>
                    <div className="calculator-input-container">
                        <label>Utilities:
                            <InformationIcon>
                                Include internet in addition to water, sewer, electricity, gas, etc.
                            </InformationIcon>
                        </label>
                        <input
                            value={this.state.utilities}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleUtilitiesChange}
                        />
                    </div>
                    <div className="calculator-input-container">
                        <label>Maintenance:
                            <InformationIcon>
                                For maintenance costs, I generally use 1-2% of the property's value and divide that number by 12. You can also include lawn maintenance here.
                            </InformationIcon>
                        </label>
                        <input
                            value={this.state.maintenance}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleMaintenanceChange}
                        />
                    </div>
                    <div className="calculator-input-container">
                        <label>Cleaning:
                            <InformationIcon>
                                If you will do your own cleaning this number is 0.
                            </InformationIcon>
                        </label>
                        <input
                            value={this.state.cleaning}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleCleaningChange}
                        />
                    </div>
                    <div className="calculator-input-container">
                        <label>Supplies:
                            <InformationIcon>
                                We spend money regularly on food, coffee, toilet paper, paper towels, cleaning solutions, and soap for the washer and dishwasher.
                            </InformationIcon>
                        </label>
                        <input
                            value={this.state.supplies}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleSuppliesChange} />
                    </div>
                    <div className="calculator-input-container">
                        <label>Other Expenses:
                            <InformationIcon>
                                HOA fees would fit here and any other regular or unexpected expense. Some examples would be if you pay for a pool membership for your guests or maybe a monthly dock fee for a lake property.
                            </InformationIcon>
                        </label>
                        <input
                            value={this.state.otherExpenses}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleOtherExpensesChange}
                        />
                    </div>
                    <div className="calculator-cash-flow-result">
                        Monthly Cash Flow: ${this.state.cashFlow}
                    </div>
                    <input type="Submit" value="Submit" onChange={() => {}} />
                </form>
            </div>
        );
    }
}

export default ShortTermRentalCalculatorForm;