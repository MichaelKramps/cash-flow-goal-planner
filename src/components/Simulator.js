import React from 'react';
import SimpleAsset from './Assets/SimpleAsset';
import './Simulator.css';

class Simulator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            targetCashFlow: 2000,
            assets: [{name: "westridge", type: "real estate", initialInvestment: "30000", cashFlow: "500"}],
            totals: []
        };
    }

    listAssets() {
        return this.state.assets.map((asset, index) => {
            return <SimpleAsset
                key={index}
                name={asset.name}
                type={asset.type}
                initialInvestment={asset.initialInvestment}
                cashFlow={asset.cashFlow}
            />
        })
    }

    render() {
        return (
            <div>
                <div className="simulator-header-container">
                    <div>Name</div>
                    <div>Type</div>
                    <div>Initial Investment</div>
                    <div>Cash Flow</div>
                </div>
                <h2>Assets</h2>
                <div>
                    {this.listAssets()}
                </div>
                <h2>Totals</h2>
                <div className="simulator-totals-container">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Simulator;