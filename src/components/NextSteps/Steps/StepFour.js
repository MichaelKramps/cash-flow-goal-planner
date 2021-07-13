import React from 'react';
import Shared from "../../Shared/Shared";
import ShortTermRentalRoadMap from "./RoadMaps/ShortTermRentalRoadMap";

class StepFour extends React.Component {
    render() {
        return (
            <div className={"step-four " + Shared.determineVisibility(this.props)}>
                <h2>Step Four: Work Towards Buying Your Next Investment</h2>
                <div>
                    <p>Which investment are you working on?</p>
                    {/*<button>1st investment in future investments list</button>*/}
                    {/*<button>2nd investment in future investment list</button>*/}
                </div>
                <div>
                    <ShortTermRentalRoadMap />
                </div>
            </div>
        )
    }
}

export default StepFour;