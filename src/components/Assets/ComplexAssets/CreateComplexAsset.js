import React from 'react';
import Modal from "../../Shared/Modal";
import './CreateComplexAsset.css';
import ShortTermRentalCalculator from "../../Calculators/ShortTermRentalCalculator";
import LongTermRentalCalculator from "../../Calculators/LongTermRentalCalculator";

class CreateComplexAsset extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            type: "",
            name: ""
        };

        this.changeView = this.changeView.bind(this);
        this.determinePageNumber = this.determinePageNumber.bind(this);
        this.pageForward = this.pageForward.bind(this);
        this.pageBackward = this.pageBackward.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
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
        if (this.state.page < 2) {
            this.setState({page: this.state.page + 1})
        }
    }

    pageBackward() {
        if (this.state.page > 1) {
            this.setState({page: this.state.page - 1})
        }
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleTypeChange(event) {
        this.setState({type: event.target.value});
    }

    handleAssetSubmission(state) {
        let fullState = state;
        fullState.name = this.state.name;
        fullState.type = this.state.type;
        this.props.onSubmission(fullState);
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
        return (
            <Modal visible={this.props.visible} onSubmission={this.props.onSubmission} className={this.determinePageNumber()}>
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
                        <option value="Retirement Account">Retirement Account</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className='page-two'>
                    <ShortTermRentalCalculator
                        visible={this.determineVisibility("Short Term Rental")}
                        onSubmission={this.handleAssetSubmission}
                    />
                    <LongTermRentalCalculator visible={this.determineVisibility("Long Term Rental")} />
                </div>
                {this.renderButtons()}
            </Modal>
        );
    }
}

export default CreateComplexAsset;