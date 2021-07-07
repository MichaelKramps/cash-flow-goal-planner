import React from 'react';
import Shared from "../../Shared/Shared";

class StepFour extends React.Component {
    render() {
        return (
            <div className={"step-four " + Shared.determineVisibility(this.props)}>
                Step Four
            </div>
        )
    }
}

export default StepFour;