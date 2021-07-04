import React from 'react';
import Shared from "./Shared";

class AdditionalActions extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showActions: false
        }
    }

    toggleShowActions() {
        if (this.state.showActions) {
            this.setState({showActions: false});
        } else {
            this.setState({showActions: true});
        }
    }


    render() {
        return (
            <React.Fragment>
                <span onClick={this.toggleShowActions}>
                    &#8942;
                </span>
                <div className={"additional-actions " + Shared.determineVisibility(this.state.showActions)}>
                    <div onClick={this.props.onEdit}>&#9998; Edit</div>
                    <div onClick={this.props.onDelete}>&#x1f5d1; Delete</div>
                    <a href={this.props.purchaseGuide}>View Purchase Guide</a>
                </div>
            </React.Fragment>
        )
    }

}

export default AdditionalActions;