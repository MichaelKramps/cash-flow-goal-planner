import React from 'react';
import Shared from "../../Shared/Shared";
import ShortTermRentalRoadMap from "./RoadMaps/ShortTermRentalRoadMap";

class StepFour extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            roadMap: ""
        }

        this.listFutureAssets = this.listFutureAssets.bind(this);
        this.setRoadMap = this.setRoadMap.bind(this);
    }

    listFutureAssets() {
        if (this.props.futureAssets.length > 0) {
            return this.props.futureAssets.map((asset) => {
                return (
                    <button onClick={() => {this.setRoadMap(asset.type)}}>{asset.name}</button>
                )
            })
        } else {
            return <div>Add some future assets to your cash flow planner.</div>
        }
    }

    setRoadMap(investmentType) {
        let type = investmentType.toLowerCase().split(" ").join("-");

        this.setState({roadMap: type});
    }

    render() {
        return (
            <div className={"step-four " + Shared.determineVisibility(this.props)}>
                <h2>Step Four: Work Towards Buying Your Next Investment</h2>
                <div>
                    <p>Which investment are you working on?</p>
                    {this.listFutureAssets()}
                </div>
                <div>
                    <ShortTermRentalRoadMap visible={this.state.roadMap === "short-term-rental"} />
                </div>
            </div>
        )
    }
}

export default StepFour;