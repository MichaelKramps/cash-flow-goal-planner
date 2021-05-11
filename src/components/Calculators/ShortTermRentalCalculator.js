import React from 'react';
import './ShortTermRentalCalculator.css'
import FormUtils from "../Shared/FormUtils";
import MortgageCalculatorForm from "./Forms/MortgageCalculatorForm";
import Modal from "../Shared/Modal";

class ShortTermRentalCalculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            monthlyIncome: this.props.monthlyIncome || 0,
            mortgage: this.props.mortgage,
            utilities: this.props.utilities,
            maintenance: this.props.maintenance,
            cleaning: this.props.cleaning,
            supplies: this.props.supplies,
            otherExpenses: this.props.otherExpenses,
            cashFlow: 0,
            modals: {
                mortgageCalculator: false
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMonthlyIncomeChange = this.handleMonthlyIncomeChange.bind(this);
        this.handleMortgageChange = this.handleMortgageChange.bind(this);
        this.handleUtilitiesChange = this.handleUtilitiesChange.bind(this);
        this.handleMaintenanceChange = this.handleMaintenanceChange.bind(this);
        this.handleCleaningChange = this.handleCleaningChange.bind(this);
        this.handleSuppliesChange = this.handleSuppliesChange.bind(this);
        this.handleOtherExpensesChange = this.handleOtherExpensesChange.bind(this);
        this.handleMortgageCalculatorSubmit = this.handleMortgageCalculatorSubmit.bind(this);
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

    handleCleaningChange(event) {
        this.setState({cleaning: event.target.value}, () => {
            this.updateCashFlow();
        });
    }

    handleSuppliesChange(event) {
        this.setState({supplies: event.target.value}, () => {
            this.updateCashFlow();
        });
    }

    handleOtherExpensesChange(event) {
        this.setState({mortgage: event.target.value}, () => {
            this.updateCashFlow();
        });
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

    handleMortgageCalculatorSubmit(state) {
        this.setState({mortgage: state.monthlyPayment}, () => {
            this.setState({modals: {mortgageCalculator: false}});
        })
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        let visible = this.props.visible ? "visible" : "";
        return (
            <div className={"short-term-rental-calculator " + visible}>
                <form>
                    <h2>Short Term Rental Calculator</h2>
                    <div>
                        <label>Expected Monthly Income</label>
                        <input
                            value={this.state.monthlyIncome}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleMonthlyIncomeChange}
                        />
                        <a href="#">Short Term Rental Income Calculator</a>
                        <p>Yearly increase to nightly rate</p>
                    </div>
                    <h3>Expenses</h3>
                    <div>
                        <label>Mortgage Payment</label>
                        <input
                            value={this.state.mortgage}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleMortgageChange}
                        />
                        <span onClick={() => {this.setState({modals: {mortgageCalculator: true}})}}>Mortgage Calculator</span>
                    </div>
                    <div>
                        <label>Utilities</label>
                        <input
                            value={this.state.utilities}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleUtilitiesChange}
                        />
                        <a href="#">Utilities Helper (lists out possible utilities like internet, water, trash, gas) find numbers by looking at past statements or calling the utility companies</a>
                    </div>
                    <div>
                        <label>Maintenance</label>
                        <input
                            value={this.state.maintenance}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleMaintenanceChange}
                        />
                        <p>Maintenance is 1-3% of the value of the property and includes things like lawn care, home repairs</p>
                    </div>
                    <div>
                        <label>Cleaning</label>
                        <input
                            value={this.state.cleaning}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleCleaningChange}
                        />
                        <p>$0 if you do your own cleaning, but short term rentals require regular cleans</p>
                    </div>
                    <div>
                        <label>Supplies</label>
                        <input
                            value={this.state.supplies}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleSuppliesChange} />
                        <p>Includes things like food, toiletries, coffee bar, cleaning supplies</p>
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
                        Inflation Rate
                    </div>
                    <div>
                        Monthly Cash Flow: ${this.state.cashFlow}
                    </div>
                    <h3>Considerations for Net Worth</h3>
                    <p>Value of the property, rate of appreciation, loan terms and years left on loan</p>
                    <h3>Considerations for ROI</h3>
                    <p>Down payment and Additional Initial investment (furniture, linens, etc)</p>
                </form>
                <Modal visible={this.state.modals.mortgageCalculator}>
                    <MortgageCalculatorForm onSubmission={this.handleMortgageCalculatorSubmit} />
                </Modal>
            </div>
        );
    }
}

export default ShortTermRentalCalculator;