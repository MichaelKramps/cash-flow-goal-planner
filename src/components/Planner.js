import React from 'react';
import './Planner.css';
import Highlights from "./Totals/Highlights";
import FutureAssets from "./Assets/FutureAssets";
import Shared from "./Shared/Shared";
import CashFlowOutlook from "./Outlook/CashFlowOutlook";
import CurrentAssets from "./Assets/CurrentAssets";

class Planner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            highlights: {},
            currentAssets: {},
            futureAssets: {}
        };

        this.updateHighlights = this.updateHighlights.bind(this);
        this.updateCurrentAssets = this.updateCurrentAssets.bind(this);
        this.updateFutureAssets = this.updateFutureAssets.bind(this);
    }

    updateHighlights(state) {
        this.setState({highlights: state});
    }

    updateCurrentAssets(state) {
        this.setState({currentAssets: state});
    }

    updateFutureAssets(state) {
        this.setState({futureAssets: state});
    }

    determineEmptyCashFlowClass() {
        if (this.state.highlights === undefined ||
            this.state.highlights.cashFlowGoal === undefined ||
            this.state.highlights.cashFlowGoal.cashFlowGoal === undefined ||
            this.state.highlights.cashFlowGoal.cashFlowGoal <= 0)
        {
            return "cash-flow-goal-empty";
        } else {
            return "cash-flow-goal-full";
        }
    }

    render() {
        console.log(this.state)
        return (
            <div className={"planner " + Shared.determineVisibility(this.props) + " " + this.determineEmptyCashFlowClass()}>
                <Highlights highlights={this.state.highlights} currentAssets={this.state.currentAssets} updateSimulator={this.updateHighlights} />
                <h2>Current Investments</h2>
                <div className="current-assets">
                    <CurrentAssets {...this.state.currentAssets} updateSimulator={this.updateCurrentAssets} />
                </div>
                <h2>Future Investments</h2>
                <div className="future-assets">
                    <FutureAssets {...this.state.futureAssets} updateSimulator={this.updateFutureAssets} />
                </div>
                <h2>Future Cash Flow Outlook</h2>
                    <CashFlowOutlook highlights={this.state.highlights} currentAssets={this.state.currentAssets} futureAssets={this.state.futureAssets} />
            </div>
        );
    }
}

export default Planner;