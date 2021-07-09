import React from 'react';
import Shared from "../../Shared/Shared";

class StepFour extends React.Component {
    render() {
        return (
            <div className={"step-four " + Shared.determineVisibility(this.props)}>
                <h2>Step Four: Work Towards Buying Your Next Investment</h2>
                <p>I've made road maps for the most common types of cash flowing investments to help walk you through every actionable step. Following these guides can take you from knowing absolutely nothing to owning a cash flowing asset.</p>
            </div>
        )
    }
}

export default StepFour;