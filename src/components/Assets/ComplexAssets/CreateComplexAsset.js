import React from 'react';
import Modal from "../../Shared/Modal";
import './CreateComplexAsset.css';
import ShortTermRentalAsset from "./ShortTermRentalAsset";

class CreateComplexAsset extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            futureAssets: [],
            view: 'list-view'
        };

        this.changeView = this.changeView.bind(this);
    }

    changeView(viewName) {
        this.setState({view: viewName});
    }

    render() {
        return (
            <Modal visible={this.props.visible} onSubmission={this.props.onSubmission} className={this.state.view}>
                <h3>What type of investment will you buy next?</h3>
                <div className='investment-type-list'>
                    <button>Long Term Rental</button>
                    <button onClick={() => {this.changeView('short-term-rental-view')}}>Short Term Rental</button>
                    <button>Business</button>
                    <button>Stock</button>
                    <button>Retirement Account</button>
                </div>
                <ShortTermRentalAsset />
                {/*<LongTermRentalAsset />*/}
                {/*<BusinessAsset />*/}
                {/*<StockAsset />*/}
                {/*<RetirementFundAsset />*/}
            </Modal>
        );
    }
}

export default CreateComplexAsset;