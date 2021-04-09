import React from 'react';

class SimpleAsset extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="simple-asset">
                <div>{this.props.name}</div>
                <div>{this.props.type}</div>
                <div>{this.props.initialInvestment}</div>
                <div>{this.props.cashFlow}</div>
            </div>
        );
    }
}

export default SimpleAsset;
