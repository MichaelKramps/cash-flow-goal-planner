import React from 'react';
import Shared from "../Shared/Shared";

class NextSteps extends React.Component {
    render() {
        return (
            <div className={"next-steps " + Shared.determineVisibility(this.props)}>
                Next steps
            </div>
        )
    }
}

export default NextSteps;