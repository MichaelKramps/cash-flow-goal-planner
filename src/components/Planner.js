import React from 'react';
import './Planner.css';
import Highlights from "./Totals/Highlights";
import FutureAssets from "./Assets/FutureAssets";
import Shared from "./Shared/Shared";
import CashFlowOutlook from "./Outlook/CashFlowOutlook";

class Planner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            highlights: {},
            futureAssets: {}
        };

        this.updateHighlights = this.updateHighlights.bind(this);
        this.updateFutureAssets = this.updateFutureAssets.bind(this);
    }

    updateHighlights(state) {
        this.setState({highlights: state});
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
        return (
            <div className={"planner " + Shared.determineVisibility(this.props) + " " + this.determineEmptyCashFlowClass()}>
                <Highlights {...this.state.highlights} updateSimulator={this.updateHighlights} />
                <h2>Future Investments</h2>
                <div className="future-assets">
                    <FutureAssets {...this.state.futureAssets} updateSimulator={this.updateFutureAssets} />
                </div>
                <h2>Future Cash Flow Outlook</h2>
                    <CashFlowOutlook highlights={this.state.highlights} futureAssets={this.state.futureAssets} />
            </div>
        );
    }
}

export default Planner;