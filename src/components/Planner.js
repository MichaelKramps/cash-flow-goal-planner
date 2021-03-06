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
            highlights: this.props.highlights || {},
            currentAssets: this.props.currentAssets || {},
            futureAssets: this.props.futureAssets || {}
        };

        this.updateHighlights = this.updateHighlights.bind(this);
        this.updateCurrentAssets = this.updateCurrentAssets.bind(this);
        this.updateFutureAssets = this.updateFutureAssets.bind(this);
    }

    updateHighlights(state) {
        this.setState({highlights: state}, () => {
            this.props.updateApp(this.state);
        });
    }

    updateCurrentAssets(state) {
        this.setState({currentAssets: state}, () => {
            this.props.updateApp(this.state);
        });
    }

    updateFutureAssets(state) {
        this.setState({futureAssets: state}, () => {
            this.props.updateApp(this.state);
        });
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps) {
            this.setState({
                highlights: this.props.highlights || {},
                currentAssets: this.props.currentAssets || {},
                futureAssets: this.props.futureAssets || {}
            })
        }
    }

    render() {
        return (
            <div className={"planner " + Shared.determineVisibility(this.props) + " " + this.determineEmptyCashFlowClass()}>
                <Highlights highlights={this.state.highlights} currentAssets={this.state.currentAssets} updateSimulator={this.updateHighlights} />
                <div className="full-width-card">
                    <div className="current-asset-headings">
                        <div>Current Investments</div>
                        <div>Type</div>
                        <div>Initial Cost</div>
                        <div>Monthly Cash Flow</div>
                        <div>Cash on Cash Return</div>
                        <div>Actions</div>
                    </div>
                    <div className="current-assets">
                        <CurrentAssets {...this.state.currentAssets} updateSimulator={this.updateCurrentAssets} />
                    </div>
                </div>
                <div className="full-width-card">
                    <div className="future-asset-headings">
                        <div>Future Investments</div>
                        <div>Type</div>
                        <div>Initial Cost</div>
                        <div>Monthly Cash Flow</div>
                        <div>Cash on Cash Return</div>
                        <div>Actions</div>
                    </div>
                    <div className="future-assets">
                        <FutureAssets {...this.state.futureAssets} updateSimulator={this.updateFutureAssets} />
                    </div>
                </div>
                <div className="full-width-card">
                    <h2>Future Cash Flow Outlook</h2>
                    <CashFlowOutlook highlights={this.state.highlights} currentAssets={this.state.currentAssets} futureAssets={this.state.futureAssets} />
                </div>
            </div>
        );
    }
}

export default Planner;