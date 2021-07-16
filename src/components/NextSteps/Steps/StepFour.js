import React from 'react';
import Shared from "../../Shared/Shared";
import ShortTermRentalRoadMap from "./RoadMaps/ShortTermRentalRoadMap";
import './StepFour.css';
import LongTermRentalRoadMap from "./RoadMaps/LongTermRentalRoadMap";

class StepFour extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            roadMap: "",
            assetNumber: null,
        }

        this.listFutureAssets = this.listFutureAssets.bind(this);
        this.setStepState = this.setStepState.bind(this);
    }

    listFutureAssets() {
        if (this.props.futureAssets.length > 0) {
            return this.props.futureAssets.map((asset, index) => {
                let className = index === this.state.assetNumber ? "selected" : "";
                return (
                    <button
                        className={className}
                        onClick={() => {this.setStepState(asset.type, index)}}>
                        {asset.name}
                    </button>
                )
            })
        } else {
            return <div>Add some future assets to your cash flow planner.</div>
        }
    }

    setStepState(investmentType, index) {
        let type = investmentType.toLowerCase().split(" ").join("-");

        this.setState({roadMap: type, assetNumber: index});
    }

    render() {
        return (
            <div className={"step-four " + Shared.determineVisibility(this.props)}>
                <h2>Step Four: Work Towards Buying Your Next Investment</h2>
                <div className={"future-asset-list " + this.state.assetNumber}>
                    {this.listFutureAssets()}
                </div>
                <div>
                    <ShortTermRentalRoadMap visible={this.state.roadMap === "short-term-rental"} />
                    <LongTermRentalRoadMap visible={this.state.roadMap === "long-term-rental"} />
                </div>
            </div>
        )
    }
}

export default StepFour;