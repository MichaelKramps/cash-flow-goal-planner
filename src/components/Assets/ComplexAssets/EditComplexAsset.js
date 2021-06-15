import React from 'react';
import ShortTermRentalCalculatorForm from "../../Calculators/Forms/ShortTermRentalCalculatorForm";
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
            year: this.props.year,
            advanced: this.props.advanced
        }

        this.determineVisibility = this.determineVisibility.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleSubmission = this.handleSubmission.bind(this);
    }

    determineVisibility(type) {
        if (this.state.type === type) {
            return true;
        } else {
            return false;
        }
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleTypeChange(event) {
        this.setState({type: event.target.value});
    }

    handleYearChange(event) {
        this.setState({year: event.target.value});
    }

    handleSubmission(state) {
        if (state.cashFlow) {
            let newState = JSON.parse(JSON.stringify(state));
            newState.name = this.state.name;
            newState.type = this.state.type;
            newState.year = this.state.year;
            newState.advanced = state;
            this.props.onSubmission(newState);
        } else {
            this.props.stopEditing();
        }
    }

    render() {
        let currentYear = new Date().getFullYear();
        return (
            <Modal visible={this.props.visible} onSubmission={this.handleSubmission}>
                <div>
                    <h3>Edit your investment...</h3>
                    <label>Give your investment a name: </label><input value={this.state.name} onChange={this.handleNameChange} />
                    <label>What type of investment is this?</label>
                    <select value={this.state.type} onChange={this.handleTypeChange}>
                        <option value=""></option>
                        <option value="Short Term Rental">Short Term Rental</option>
                        <option value="Long Term Rental">Long Term Rental</option>
                        <option value="Business">Business</option>
                        <option value="Stock Portfolio">Stock Portfolio</option>
                        <option value="Other">Other</option>
                    </select>
                    <label>When do you plan to buy?</label>
                    <select value={this.state.year} onChange={this.handleYearChange}>
                        <option value=""></option>
                        <option value={currentYear}>{currentYear}</option>
                        <option value={currentYear + 1}>{currentYear + 1}</option>
                        <option value={currentYear + 2}>{currentYear + 2}</option>
                        <option value={currentYear + 3}>{currentYear + 3}</option>
                        <option value={currentYear + 4}>{currentYear + 4}</option>
                        <option value={currentYear + 5}>{currentYear + 5}</option>
                        <option value={currentYear + 6}>{currentYear + 6}</option>
                        <option value={currentYear + 7}>{currentYear + 7}</option>
                        <option value={currentYear + 8}>{currentYear + 8}</option>
                        <option value={currentYear + 9}>{currentYear + 9}</option>
                    </select>
                </div>
                <ShortTermRentalCalculatorForm
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
