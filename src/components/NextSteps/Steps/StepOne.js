import React from 'react';
import Shared from "../../Shared/Shared";

class StepOne extends React.Component {
    render() {
        return (
            <div className={"step-one " + Shared.determineVisibility(this.props)}>
                Step One
            </div>
        )
    }
}

export default StepOne;