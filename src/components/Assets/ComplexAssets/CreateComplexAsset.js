import React from 'react';
import Modal from "../../Shared/Modal";
import './CreateComplexAsset.css';
import ShortTermRentalCalculator from "../../Calculators/ShortTermRentalCalculator";

class CreateComplexAsset extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            type: ""
        };

        this.changeView = this.changeView.bind(this);
        this.determinePageNumber = this.determinePageNumber.bind(this);
        this.pageForward = this.pageForward.bind(this);
        this.pageBackward = this.pageBackward.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
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
            case 3:
                return "page-three";
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
        if (this.state.page < 3) {
            this.setState({page: this.state.page + 1})
        }
    }

    pageBackward() {
        if (this.state.page > 1) {
            this.setState({page: this.state.page - 1})
        }
    }

    handleTypeChange(event) {
        this.setState({type: event.target.value});
    }

    render() {
        return (
            <Modal visible={this.props.visible} onSubmission={this.props.onSubmission} className={this.determinePageNumber()}>
                <div className='page-one'>
                    <h3>Tell me about your next investment...</h3>
                    <label>Give your investment a name: </label><input />
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
                    <ShortTermRentalCalculator visible={this.determineVisibility("Short Term Rental")} />
                </div>
                <div className='page-three'>
                    page three
                </div>
                <button onClick={() => {this.pageBackward()}}>Back</button>
                <button onClick={() => {this.pageForward()}}>Next</button>
            </Modal>
        );
    }
}

export default CreateComplexAsset;