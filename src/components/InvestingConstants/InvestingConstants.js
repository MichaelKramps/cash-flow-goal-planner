import React from 'react';
import './InvestingConstants.css';
import Shared from "../Shared/Shared";

class InvestingConstants extends React.Component {

    render() {
        return (
            <div className={"investing-constants " + Shared.determineVisibility(this.props)}>
                Investing Constants
            </div>
        );
    }
}

export default InvestingConstants;