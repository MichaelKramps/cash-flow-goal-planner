import React from 'react';
import Shared from "../../Shared/Shared";

class StepFour extends React.Component {
    render() {
        return (
            <div className={"step-four " + Shared.determineVisibility(this.props)}>
                <h2>Step Four: Work Towards Buying Your Next Investment</h2>
            </div>
        )
    }
}

export default StepFour;