import React from 'react';
import Shared from "../../Shared/Shared";

class StepTwo extends React.Component {
    render() {
        return (
            <div className={"step-two " + Shared.determineVisibility(this.props)}>
                <h2>Step Two: Add Your Current Assets</h2>
            </div>
        )
    }
}

export default StepTwo;