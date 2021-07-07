import React from 'react';
import Shared from "../../Shared/Shared";

class StepTwo extends React.Component {
    render() {
        return (
            <div className={"step-two " + Shared.determineVisibility(this.props)}>
                Step Two
            </div>
        )
    }
}

export default StepTwo;