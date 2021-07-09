import React from 'react';
import Shared from "../../Shared/Shared";

class StepOne extends React.Component {
    render() {
        return (
            <div className={"step-one " + Shared.determineVisibility(this.props)}>
                <h2>Step One: Enter Your Cash Flow Goal</h2>
                <p>First, you should head over to the cash flow planner and edit your cash flow goal. The cash flow planner will help you create a cash flow goal based on your monthly expenses and investing goals.</p>
                <p>In order to achieve financial freedom you must know exactly how much money you need to make. And you should know exactly when you want to get there. Most retirement plans have you aim for a particular net worth, but the simplest way to set a retirement/financial freedom goal is by looking at your monthly cash flow.</p>
                <h3>Determine Your Monthly Expenses</h3>
                <p>When you create a budget, you typically categorize your expenses. It helps visualize where your money is going and highlight opportunities to improve your spending.</p>
                <p>The planner should be treated like a future budget. Not the budget that you have today, but the one you'd like to have in the future. Part of this future budget includes what you'd like to be able to spend on yourself, on things like shopping and travelling.</p>
                <h3>Create Room For Future Investing</h3>
                <p>I believe you should continue investing even when you reach your financial goal.</p>
                <p>Why? Because the price of goods and services increases over time. The force of inflation guarantees that money has less buying power over time. By continuing to invest you can ensure that your cash flow continues to increase to offset inflation.</p>
            </div>
        )
    }
}

export default StepOne;