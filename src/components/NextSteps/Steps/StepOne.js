import React from 'react';
import Shared from "../../Shared/Shared";

class StepOne extends React.Component {
    render() {
        return (
            <div className={"step-one " + Shared.determineVisibility(this.props)}>
                <h2>Step One: Enter Your Cash Flow Goal</h2>

            </div>
        )
    }
}

export default StepOne;