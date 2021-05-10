import React from 'react';
import Modal from "../../Shared/Modal";
import './CreateComplexAsset.css';
import ShortTermRentalAsset from "./ShortTermRentalAsset";

class CreateComplexAsset extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            futureAssets: [],
            page: 1
        };

        this.changeView = this.changeView.bind(this);
    }

    changeView(viewName) {
        this.setState({view: viewName});
    }

    determineClassName() {
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

    render() {
        return (
            <Modal visible={this.props.visible} onSubmission={this.props.onSubmission} className={this.determineClassName()}>
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
                    page two
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