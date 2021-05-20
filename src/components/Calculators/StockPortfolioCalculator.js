import React from 'react';
import './StockPortfolioCalculator.css';
import Shared from "../Shared/Shared";
import FormUtils from "../Shared/FormUtils";

class StockPortfolioCalculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value || 0,
            returnOnValue: this.props.returnOnValue,
            dividendYield: this.props.dividendYield,
            cashFlow: 0,
            fiveYearCashFlow: 0,
            tenYearCashFlow: 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleReturnOnValueChange = this.handleReturnOnValueChange.bind(this);
        this.handleDividendYieldChange = this.handleDividendYieldChange.bind(this);
    }

    handleValueChange(event) {
        this.setState({value: event.target.value}, () => {
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
        console.log(newFiveYearCashFlow)
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
                    <div>
                        <label>Value of Portfolio</label>
                        <input
                            value={this.state.value}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleValueChange}
                        />
                    </div>
                    <div>
                        <label>Yearly Percentage Increase in Value</label>
                        <input
                            value={this.state.returnOnValue}
                            onKeyDown={(event) => {FormUtils.validateFloatInput(event)}}
                            onChange={this.handleReturnOnValueChange}
                        />
                    </div>
                    <div>
                        <label>Yearly Dividend Yield</label>
                        <input
                            value={this.state.dividendYield}
                            onKeyDown={(event) => {FormUtils.validateFloatInput(event)}}
                            onChange={this.handleDividendYieldChange}
                        />
                    </div>
                    <div>
                        Current Monthly Cash Flow: ${this.state.cashFlow}
                    </div>
                    <div>
                        Monthly Cash Flow in 5 years: ${this.state.fiveYearCashFlow}
                    </div>
                    <div>
                        Monthly Cash Flow in 10 years: ${this.state.tenYearCashFlow}
                    </div>
                    <input type="Submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default StockPortfolioCalculator;