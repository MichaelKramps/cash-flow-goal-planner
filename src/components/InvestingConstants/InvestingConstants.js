import React from 'react';
import './InvestingConstants.css';
import Shared from "../Shared/Shared";

class InvestingConstants extends React.Component {

    render() {
        return (
            <div className={"investing-constants " + Shared.determineVisibility(this.props)}>
                Investing Constants
                Start with U.S. only? then try to add other countries...
                <ul>
                    <li>real estate appreciation</li>
                    <li>inflation rate</li>
                    <li>average stock market return</li>
                    <li>base loan interest rate</li>
                </ul>
            </div>
        );
    }
}

export default InvestingConstants;