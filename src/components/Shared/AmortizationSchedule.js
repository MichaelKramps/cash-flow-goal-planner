import React from 'react';
import './AmortizationSchedule.css';

class AmortizationSchedule extends React.Component {

    createRowHeaders() {
        let firstRow = this.props.amortization[0];
        if (firstRow.insurance || firstRow.propertyTax || firstRow.hoa) {
            return (

                <div className="amortization-row">
                    <div>Payment Number</div>
                    <div>Payment Amount</div>
                    <div>Principal Paid</div>
                    <div>Interest Paid</div>
                    <div>Property Insurance</div>
                    <div>Property Taxes</div>
                    <div>HOA Fee</div>
                    <div>Loan Balance</div>
                </div>
            );
        } else {
            return (
                <div className="amortization-row">
                    <div>Payment Number</div>
                    <div>Payment Amount</div>
                    <div>Principal Paid</div>
                    <div>Interest Paid</div>
                    <div>Loan Balance</div>
                </div>
            );
        }
    }

    createRows() {
        let firstRow = this.props.amortization[0];
        if (firstRow.insurance || firstRow.propertyTax || firstRow.hoa) {
            return this.createMortgageRows();
        } else {
            return this.createLoanRows();
        }
    }

    createLoanRows() {
        return this.props.amortization.map((month, index) => {
            return (
                <div key={index} className="amortization-row">
                    <div>{index + 1}</div>
                    <div>${month.payment}</div>
                    <div>${month.principalPaid}</div>
                    <div>${month.interestPaid}</div>
                    <div>${month.loanBalance}</div>
                </div>
            )
        })
    }

    createMortgageRows() {
        return this.props.amortization.map((month, index) => {
            return (
                <div key={index} className="amortization-row">
                    <div>{index + 1}</div>
                    <div>${month.payment}</div>
                    <div>${month.principalPaid}</div>
                    <div>${month.interestPaid}</div>
                    <div>${month.insurance}</div>
                    <div>${month.taxes}</div>
                    <div>${month.hoa}</div>
                    <div>${month.loanBalance}</div>
                </div>
            );
        })
    }

    render() {
        if (this.props.amortization.length === 0) {
            return null;
        } else {
            return (
                <React.Fragment>
                    <h2>Amortization Schedule</h2>
                    <div className="amortization-schedule">
                        {this.createRowHeaders()}
                        {this.createRows()}
                    </div>
                </React.Fragment>
            );
        }
    }
}

export default AmortizationSchedule;