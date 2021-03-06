import React from 'react';

class StepsControls extends React.Component {

    updateStep(stepNumber) {
        this.props.updateStep(stepNumber)
    }

    render() {
        return (
            <div className="steps-controls">
                <button onClick={() => this.updateStep(null)}>My Suggested Next Step</button>
                <button onClick={() => this.updateStep(1)}>1. Enter Your Goal</button>
                <button onClick={() => this.updateStep(2)}>2. Enter Current Assets</button>
                <button onClick={() => this.updateStep(3)}>3. Plan Future Investments</button>
                <button onClick={() => this.updateStep(4)}>4. Buy Your Next Investment</button>
            </div>
        )
    }
}

export default StepsControls;