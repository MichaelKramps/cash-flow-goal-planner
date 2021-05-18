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
            cashFlow: 0
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
        let newCashFlow = (FormUtils.parseIntegerInput(this.state.value) * FormUtils.parseIntegerInput(this.state.dividendYield) / 1200).toFixed(0);

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
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleReturnOnValueChange}
                        />
                    </div>
                    <div>
                        <label>Yearly Dividend Yield</label>
                        <input
                            value={this.state.dividendYield}
                            onKeyDown={(event) => {FormUtils.validateIntegerInput(event)}}
                            onChange={this.handleDividendYieldChange}
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

export default StockPortfolioCalculator;