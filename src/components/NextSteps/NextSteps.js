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
            step: this.suggestedStep()
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
        if (this.cashFlowGoalEmpty()) {
            return 1;
        } else if (this.currentAssetsEmpty()) {
            return 2;
        } else if (this.futureAssetsEmpty()) {
            return 3;
        } else {
            return 4;
        }
    }

    cashFlowGoalEmpty() {
        if (this.props.highlights &&
            this.props.highlights.cashFlowGoal &&
            this.props.highlights.cashFlowGoal.cashFlowGoal &&
            this.props.highlights.cashFlowGoal.cashFlowGoal > 0)
        {
            return false;
        }
        return true;
    }

    currentAssetsEmpty() {
        if (this.props.currentAssets &&
            this.props.currentAssets.currentAssets &&
            this.props.currentAssets.currentAssets.length > 0)
        {
            return false;
        }
        return true;
    }

    futureAssetsEmpty() {
        if (this.props.futureAssets &&
            this.props.futureAssets.futureAssets &&
            this.props.futureAssets.futureAssets.length > 0)
        {
            return false;
        }
        return true;
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