import React from 'react';
import './CashFlowOutlook.css';

class CashFlowOutlook extends React.Component {

    createYearsArray() {
        let yearsArray = [];
        let thisYear = new Date().getFullYear();

        yearsArray.push(thisYear);
        yearsArray.push(thisYear + 1);
        yearsArray.push(thisYear + 2);
        yearsArray.push(thisYear + 3);
        yearsArray.push(thisYear + 4);

        return yearsArray;
    }

    render() {
        let years = this.createYearsArray();
        return (
            <table className="cash-flow-outlook">
                <thead>
                    <tr>
                        <th>Asset</th>
                        <th>{years[0]}</th>
                        <th>{years[1]}</th>
                        <th>{years[2]}</th>
                        <th>{years[3]}</th>
                        <th>{years[4]}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>asset 1</td>
                        <td>cash flow asset 1 year 1</td>
                        <td>cash flow asset 1 year 2</td>
                        <td>cash flow asset 1 year 3</td>
                        <td>cash flow asset 1 year 4</td>
                        <td>cash flow asset 1 year 5</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>total cash flow year 1</td>
                        <td>total cash flow year 2</td>
                        <td>total cash flow year 3</td>
                        <td>total cash flow year 4</td>
                        <td>total cash flow year 5</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default CashFlowOutlook;