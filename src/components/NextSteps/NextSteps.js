import React from 'react';
import Shared from "../Shared/Shared";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import StepFour from "./Steps/StepFour";
import StepsControls from "./Steps/StepsControls";

class NextSteps extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            step: 1
        }

        this.updateStep = this.updateStep.bind(this);
    }


    updateStep(number) {
        if(number){
            this.setState({step: number});
        } else {
            this.setState({step: this.suggestedStep()})
        }
    }

    suggestedStep() {
        return 1;
    }

    render() {
        return (
            <div className={"next-steps " + Shared.determineVisibility(this.props)}>
                <StepsControls updateStep={this.updateStep} />
                <StepOne visible={this.state.step === 1} />
                <StepTwo visible={this.state.step === 2} />
                <StepThree visible={this.state.step === 3} />
                <StepFour visible={this.state.step === 4} />
            </div>
        )
    }
}

export default NextSteps;