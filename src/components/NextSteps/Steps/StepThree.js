import React from 'react';
import Shared from "../../Shared/Shared";

class StepThree extends React.Component {
    render() {
        return (
            <div className={"step-three " + Shared.determineVisibility(this.props)}>
                Step Three
            </div>
        )
    }
}

export default StepThree;