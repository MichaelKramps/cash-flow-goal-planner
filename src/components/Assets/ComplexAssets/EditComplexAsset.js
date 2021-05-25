import React from 'react';
import ShortTermRentalCalculator from "../../Calculators/ShortTermRentalCalculator";
import LongTermRentalCalculator from "../../Calculators/LongTermRentalCalculator";
import BusinessCalculator from "../../Calculators/BusinessCalculator";
import StockPortfolioCalculator from "../../Calculators/StockPortfolioCalculator";
import GenericInvestmentCalculator from "../../Calculators/GenericInvestmentCalculator";
import Modal from "../../Shared/Modal";

class EditComplexAsset extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            type: this.props.type,
            advanced: this.props.advanced
        }

        this.determineVisibility = this.determineVisibility.bind(this);
        this.handleSubmission = this.handleSubmission.bind(this);
    }

    determineVisibility(type) {
        if (this.state.type === type) {
            return true;
        } else {
            return false;
        }
    }

    handleSubmission(state) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.name = this.state.name;
        newState.type = this.state.type;
        newState.advanced = state;
        this.props.onSubmission(newState);
    }

    render() {
        return (
            <Modal visible={this.props.visible} onSubmission={this.handleSubmission}>
                <ShortTermRentalCalculator
                    {...this.state.advanced}
                    visible={this.determineVisibility("Short Term Rental")}
                    onSubmission={this.handleSubmission}
                />
                <LongTermRentalCalculator
                    {...this.state.advanced}
                    visible={this.determineVisibility("Long Term Rental")}
                    onSubmission={this.handleSubmission}
                />
                <BusinessCalculator
                    {...this.state.advanced}
                    visible={this.determineVisibility("Business")}
                    onSubmission={this.handleSubmission}
                />
                <StockPortfolioCalculator
                    {...this.state.advanced}
                    visible={this.determineVisibility("Stock Portfolio")}
                    onSubmission={this.handleSubmission}
                />
                <GenericInvestmentCalculator
                    {...this.state.advanced}
                    visible={this.determineVisibility("Other")}
                    onSubmission={this.handleSubmission}
                />
            </Modal>
        )
    }
}

export default EditComplexAsset;
