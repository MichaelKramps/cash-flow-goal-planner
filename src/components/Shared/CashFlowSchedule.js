import React from 'react';
import './CashFlowSchedule.css'
import Shared from "./Shared";

class CashFlowSchedule extends React.Component {

    createRowHeaders() {
        return (
            <div className="cash-flow-schedule-row">
                <div>Year</div>
                <div>Monthly Revenue</div>
                <div>Monthly Expenses</div>
                <div>Monthly Cash Flow</div>
            </div>
        );
    }

    createRows() {
        return this.props.cashFlowSchedule.map((year, index) => {
            return (
                <div key={index} className="cash-flow-schedule-row">
                    <div>{year.year}</div>
                    <div>${year.revenue}</div>
                    <div>${year.expenses}</div>
                    <div>${year.cashFlow}</div>
                </div>
            )
        })
    }

    render() {
        return (
            <React.Fragment>
                <h2>Cash Flow Schedule</h2>
                <div className={"cash-flow-schedule " + Shared.determineVisibility(this.props)}>
                    {this.createRowHeaders()}
                    {this.createRows()}
                </div>
            </React.Fragment>
        );
    }
}

export default CashFlowSchedule;