import React from 'react';
import Modal from "../../Shared/Modal";
import './CreateComplexAsset.css';
import ShortTermRentalCalculatorForm from "../../Calculators/Forms/ShortTermRentalCalculatorForm";
import LongTermRentalCalculator from "../../Calculators/LongTermRentalCalculator";
import BusinessCalculator from "../../Calculators/BusinessCalculator";
import StockPortfolioCalculator from "../../Calculators/StockPortfolioCalculator";
import GenericInvestmentCalculator from "../../Calculators/GenericInvestmentCalculator";

class CreateComplexAsset extends React.Component {

    defaultState = {
        page: 1,
        type: "",
        name: "",
        year: ""
    }

    constructor(props) {
        super(props);

        this.state = this.defaultState;

        this.changeView = this.changeView.bind(this);
        this.determinePageNumber = this.determinePageNumber.bind(this);
        this.pageForward = this.pageForward.bind(this);
        this.pageBackward = this.pageBackward.bind(this);
        this.validateNameAndType = this.validateNameAndType.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleAssetSubmission = this.handleAssetSubmission.bind(this);
    }

    changeView(viewName) {
        this.setState({view: viewName});
    }

    determinePageNumber() {
        switch(this.state.page){
            case 1:
                return "page-one";
            case 2:
                return "page-two";
            default:
                return "page-one";
        }
    }

    determineVisibility(type) {
        if (this.state.type === type) {
            return true;
        } else {
            return false;
        }
    }

    pageForward() {
        if (this.state.page < 2 && this.validateNameAndType()) {
            this.setState({page: this.state.page + 1})
        } else {
            alert ("All fields are required")
        }
    }

    pageBackward() {
        if (this.state.page > 1) {
            this.setState({page: this.state.page - 1})
        }
    }

    validateNameAndType() {
        return this.state.name && this.state.type;
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

    handleAssetSubmission(state) {
        if (this.state.page === 2 && (state.cashFlow || state.monthlyCashFlow)) {
            let fullState = state;
            fullState.name = this.state.name;
            fullState.type = this.state.type;
            fullState.year = this.state.year;
            this.props.onSubmission(fullState);

            this.setState(this.defaultState);
        } else {
            this.props.stopEditing();
        }
    }

    renderButtons() {
        if (this.state.page === 1) {
            return (
                <button onClick={() => {this.pageForward()}}>Next</button>
            )
        } else {
            return (
                <button onClick={() => {this.pageBackward()}}>Back</button>
            )
        }
    }

    render() {
        let currentYear = new Date().getFullYear();
        return (
            <Modal visible={this.props.visible} onSubmission={this.handleAssetSubmission} className={this.determinePageNumber()}>
                <div className='page-one'>
                    <h3>Tell me about your next investment...</h3>
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
                <div className='page-two'>
                    <ShortTermRentalCalculatorForm
                        visible={this.determineVisibility("Short Term Rental")}
                        onSubmission={this.handleAssetSubmission}
                        resetFormOnSubmission={true}
                    />
                    <LongTermRentalCalculator
                        visible={this.determineVisibility("Long Term Rental")}
                        onSubmission={this.handleAssetSubmission}
                    />
                    <BusinessCalculator
                        visible={this.determineVisibility("Business")}
                        onSubmission={this.handleAssetSubmission}
                    />
                    <StockPortfolioCalculator
                        visible={this.determineVisibility("Stock Portfolio")}
                        onSubmission={this.handleAssetSubmission}
                    />
                    <GenericInvestmentCalculator
                        visible={this.determineVisibility("Other")}
                        onSubmission={this.handleAssetSubmission}
                    />
                </div>
                {this.renderButtons()}
            </Modal>
        );
    }
}

export default CreateComplexAsset;