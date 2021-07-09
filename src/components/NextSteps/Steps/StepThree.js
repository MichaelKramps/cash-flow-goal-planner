import React from 'react';
import Shared from "../../Shared/Shared";

class StepThree extends React.Component {
    render() {
        return (
            <div className={"step-three " + Shared.determineVisibility(this.props)}>
                <h2>Step Three: Plan Your Future Investments</h2>
            </div>
        )
    }
}

export default StepThree;