import React from 'react';
import SimpleAsset from './Assets/SimpleAssets/SimpleAsset';
import './Simulator.css';
import Highlights from "./Totals/Highlights";
import AddFutureAsset from "./Assets/AddFutureAsset";
import Shared from "./Shared/Shared";

class Simulator extends React.Component {

    render() {
        return (
            <div className={"simulator " + Shared.determineVisibility(this.props)}>
                <h1>Cash Flow Early Retirement Planner</h1>
                <div className="simulator-totals-container">
                    <Highlights />
                </div>
                <h2>Investment Plan</h2>
                <div>
                    <AddFutureAsset />
                </div>
            </div>
        );
    }
}

export default Simulator;