import React from 'react';
import Shared from "../../Shared/Shared";

class StepTwo extends React.Component {
    render() {
        return (
            <div className={"step-two " + Shared.determineVisibility(this.props)}>
                <h2>Step Two: Add Your Current Assets</h2>
                <p>Add any investments you already have to the cash flow planner. If you already have a stock portfolio, some real estate or some other cash flow producing asset, add it to the list.</p>
                <p>Your cash flow goal determines how much cash flow your investments need to produce in order to support the life you want. But many of us aren't starting from zero. Adding your current assets will show how much more cash flow you need to create in order to reach your goal.</p>
            </div>
        )
    }
}

export default StepTwo;