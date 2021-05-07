import React from 'react';
import Modal from "../../Shared/Modal";

class CreateComplexAsset extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            futureAssets: []
        };

        this.foo = this.foo.bind(this);
    }

    foo() {
        return null
    }

    render() {
        return (
            <Modal visible={this.props.visible} onSubmission={this.props.onSubmission}>
                <h3>What type of investment will you buy next?</h3>
                <div>
                    <button>Long Term Rental</button>
                    <button>Short Term Rental</button>
                    <button>Business</button>
                    <button>Stock</button>
                    <button>Retirement Account</button>
                </div>
                {/*<ShortTermRentalAsset />*/}
                {/*<LongTermRentalAsset />*/}
                {/*<BusinessAsset />*/}
                {/*<StockAsset />*/}
                {/*<RetirementFundAsset />*/}
            </Modal>
        );
    }
}

export default CreateComplexAsset;