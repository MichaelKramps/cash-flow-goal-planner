import React from 'react';
import './Simulator.css';
import Highlights from "./Totals/Highlights";
import FutureAssets from "./Assets/FutureAssets";
import Shared from "./Shared/Shared";
import CashFlowOutlook from "./Outlook/CashFlowOutlook";

class Simulator extends React.Component {

    render() {
        return (
            <div className={"simulator " + Shared.determineVisibility(this.props)}>
                <h1>Cash Flow Early Retirement Planner</h1>
                <div className="simulator-totals-container">
                    <Highlights />
                </div>
                <h2>Future Investments</h2>
                <div>
                    <FutureAssets />
                </div>
                <h2>Future Cash Flow Outlook</h2>
                    <CashFlowOutlook />
            </div>
        );
    }
}

export default Simulator;