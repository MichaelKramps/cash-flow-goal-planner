import React from 'react';
import './StockPortfolioCalculator.css';
import Shared from "../Shared/Shared";
import FormUtils from "../Shared/FormUtils";
import InformationIcon from "../Shared/InformationIcon";

class StockPortfolioCalculator extends React.Component {

    defaultState = {
        value: this.props.value || 0,
        initialInvestment: this.props.initialInvestment || 0,
        returnOnValue: this.props.returnOnValue || 0,
        dividendYield: this.props.dividendYield || 0,
        cashFlow: this.props.cashFlow || 0,
        fiveYearCashFlow: this.props.fiveYearCashFlow || 0,
        tenYearCashFlow: this.props.tenYearCashFlow || 0
    };

    constructor(props) {
        super(props);

        this.state = this.defaultState;

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleInitialInvestmentChange = this.handleInitialInvestmentChange.bind(this);
        this.handleReturnOnValueChange = this.handleReturnOnValueChange.bind(this);
        this.handleDividendYieldChange = this.handleDividendYieldChange.bind(this);
    }

    handleValueChange(event) {
        this.setState({value: event.target.value}, () => {
            this.updateCashFlow();
        });
    }
    handleInitialInvestmentChange(event) {
        this.setState({initialInvestment: event.target.value}, () => {
            this.updateCashFlow();
        });
    }

    handleReturnOnValueChange(event) {
        this.setState({returnOnValue: event.target.value}, () => {
            this.updateCashFlow();
        });
    }

    handleDividendYieldChange(event) {
        this.setState({dividendYield: event.target.value}, () => {
            this.updateCashFlow();
        });
    }

    updateCashFlow() {
        let value = FormUtils.parseIntegerInput(this.state.value);
        let dividendYield = FormUtils.parseFloatInput(this.state.dividendYield) / 100;
        let returnOnValue = FormUtils.parseFloatInput(this.state.returnOnValue) / 100;

        let newCashFlow = (value * dividendYield / 12).toFixed(0);
        let newFiveYearCashFlow = (value * Math.pow(1 + returnOnValue, 5) * dividendYield / 12).toFixed(0);
        let newTenYearCashFlow = (value * Math.pow(1 + returnOnValue, 10) * dividendYield / 12).toFixed(0);

        let newState = JSON.parse(JSON.stringify(this.state));

        newState.cashFlow = newCashFlow;
        newState.fiveYearCashFlow = newFiveYearCashFlow;
        newState.tenYearCashFlow = newTenYearCashFlow;

        this.setState(newState);
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
            <div className={"stock-calculator " + Shared.determineVisibility(this.props)}>
                <form onSubmit={this.handleSubmit}>
                    <h2>Stock Portfolio Calculator</h2>
                    <h3>Initial Investment</h3>
                    <div className="calculator-input-container">
                        <label>Value of Portfolio: </label>
                        <input
                            value={this.state.value}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleValueChange}
                        />
                    </div>
                    <div className="calculator-input-container">
                        <label>Cash Put In To Portfolio:
                            <InformationIcon>
                                This should be the amount of your own cash that you used to buy the portfolio. Unless you used a loan, this number should be identical to the value of the portfolio.
                            </InformationIcon>
                        </label>
                        <input
                            value={this.state.initialInvestment}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleInitialInvestmentChange}
                        />
                    </div>
                    <div className="calculator-input-container">
                        <label>Yearly Percentage Increase in Value:
                            <InformationIcon>
                                This is the average yearly increase in the value of your stock portfolio. A long term average of the S&P 500 is about 7%. If you reinvest your dividends, add your dividend yield to this number. For S&P 500 the total would be around 9-10%.
                            </InformationIcon>
                        </label>
                        <input
                            value={this.state.returnOnValue}
                            onKeyDown={(event) => {FormUtils.validateFloatInput(event)}}
                            onChange={this.handleReturnOnValueChange}
                        />
                    </div>
                    <div className="calculator-input-container">
                        <label>Yearly Dividend Yield:
                            <InformationIcon>
                                This is the percentage of the value of your portfolio that gets paid out in dividends each year. For the S&P 500 this number would be 2-3%.
                            </InformationIcon>
                        </label>
                        <input
                            value={this.state.dividendYield}
                            onKeyDown={(event) => {FormUtils.validateFloatInput(event)}}
                            onChange={this.handleDividendYieldChange}
                        />
                    </div>
                    <div className="calculator-cash-flow-result">
                        Current Monthly Cash Flow: ${this.state.cashFlow}
                    </div>
                    <div className="calculator-cash-flow-result">
                        Monthly Cash Flow in 5 years: ${this.state.fiveYearCashFlow}
                    </div>
                    <div className="calculator-cash-flow-result">
                        Monthly Cash Flow in 10 years: ${this.state.tenYearCashFlow}
                    </div>
                    <input type="Submit" value="Submit" onChange={() => {}} />
                </form>
            </div>
        );
    }
}

export default StockPortfolioCalculator;