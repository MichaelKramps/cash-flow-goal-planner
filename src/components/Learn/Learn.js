import React from 'react';
import './Learn.css';
import Shared from "../Shared/Shared";

class Learn extends React.Component {

    render() {
        return (
            <div className={"investing-constants " + Shared.determineVisibility(this.props)}>
                Users need resources to better use the tool and understand next steps to take
                <ul>
                    <li>General tutorial for using the tool</li>
                    <li>Quick tutorials for calculators</li>
                    <li>Steps to take for each type of investment</li>
                </ul>
            </div>
        );
    }
}

export default Learn;