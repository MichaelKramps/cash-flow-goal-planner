import React from 'react';
import './Simulator.css';
import Highlights from "./Totals/Highlights";
import FutureAssets from "./Assets/FutureAssets";
import Shared from "./Shared/Shared";
import CashFlowOutlook from "./Outlook/CashFlowOutlook";

class Simulator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            highlights: {},
            futureAssets: {},
            cashFlowOutlook: {}
        };

        this.updateHighlights = this.updateHighlights.bind(this);
        this.updateFutureAssets = this.updateFutureAssets.bind(this);
        this.updateCashFlowOutlook = this.updateCashFlowOutlook.bind(this);
    }

    updateHighlights(state) {
        this.setState({highlights: state});
    }

    updateFutureAssets(state) {
        this.setState({futureAssets: state});
    }

    updateCashFlowOutlook(state) {
        this.setState({cashFlowOutlook: state});
    }

    render() {
        console.log(this.state);
        return (
            <div className={"simulator " + Shared.determineVisibility(this.props)}>
                <h1>Cash Flow Early Retirement Planner</h1>
                <div className="simulator-totals-container">
                    <Highlights {...this.state.highlights} updateSimulator={this.updateHighlights} />
                </div>
                <h2>Future Investments</h2>
                <div>
                    <FutureAssets {...this.state.futureAssets} updateSimulator={this.updateFutureAssets} />
                </div>
                <h2>Future Cash Flow Outlook</h2>
                    <CashFlowOutlook {...this.state.cashFlowOutlook} updateSimulator={this.updateCashFlowOutlook} />
            </div>
        );
    }
}

export default Simulator;