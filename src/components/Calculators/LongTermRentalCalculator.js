import React from 'react';
import LongTermRentalCalculatorForm from "./Forms/LongTermRentalCalculatorForm";
import CashFlowSchedule from "../Shared/CashFlowSchedule";
import Shared from "../Shared/Shared";

class LongTermRentalCalculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cashFlowSchedule: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(state) {
        let cashFlowSchedule = this.createCashFlowSchedule(state);
        this.setState({cashFlowSchedule: cashFlowSchedule});
    }

    createCashFlowSchedule(state) {
        let cashFlowSchedule = [];

        for (let year = 0; year < 10; year++) {
            let thisYear = {};
            thisYear.year = new Date().getFullYear() + year;
            thisYear.revenue = (Math.pow(1.03, year) * state.monthlyIncome).toFixed(2);
            thisYear.expenses = (Math.pow(1.03, year) * state.totalMonthlyExpenses).toFixed(2);
            thisYear.cashFlow = (thisYear.revenue - thisYear.expenses).toFixed(2);
            cashFlowSchedule.push(thisYear);
        }

        return cashFlowSchedule;
    }

    render() {
        return (
            <div className={"long-term-rental " + Shared.determineVisibility(this.props)}>
                <LongTermRentalCalculatorForm onSubmission={this.handleSubmit} visible={true} />
                <CashFlowSchedule cashFlowSchedule={this.state.cashFlowSchedule} visible={this.state.cashFlowSchedule.length > 0} />
            </div>
        );
    }
}

export default LongTermRentalCalculator;