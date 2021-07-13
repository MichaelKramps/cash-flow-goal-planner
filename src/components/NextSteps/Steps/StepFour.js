import React from 'react';
import Shared from "../../Shared/Shared";
import ShortTermRentalRoadMap from "./RoadMaps/ShortTermRentalRoadMap";

class StepFour extends React.Component {
    render() {
        return (
            <div className={"step-four " + Shared.determineVisibility(this.props)}>
                <h2>Step Four: Work Towards Buying Your Next Investment</h2>
                <div>
                    <p>What type of investment?</p>
                    <button>Long Term Rental</button>
                    <button>Short Term Rental</button>
                    <button>Business Acquisition</button>
                    <button>Stocks</button>
                    <button>Other</button>
                </div>
                <div>
                    <ShortTermRentalRoadMap />
                </div>
            </div>
        )
    }
}

export default StepFour;