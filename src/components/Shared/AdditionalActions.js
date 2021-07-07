import React from 'react';
import './AdditionalActions.css';

class AdditionalActions extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showActions: "invisible"
        }

        this.toggleShowActions = this.toggleShowActions.bind(this);
    }

    toggleShowActions() {
        if (this.state.showActions === "invisible") {
            this.setState({showActions: "visible"});
        } else {
            this.setState({showActions: "invisible"});
        }
    }

    renderPurchaseGuide() {
        if (this.props.purchaseGuide) {
            return (<a href={this.props.purchaseGuide}>View Purchase Guide</a>);
        } else {
            return null;
        }
    }


    render() {
        return (
            <React.Fragment>
                <span className="additional-actions-button" onClick={this.toggleShowActions}>
                    &#8942;
                </span>
                <div className={"additional-actions " + this.state.showActions}>
                    <div onClick={this.props.onEdit}><span>&#9998;</span>Edit</div>
                    <div onClick={this.props.onDelete}><span>&#x1f5d1;</span>Delete</div>
                    {this.renderPurchaseGuide()}
                </div>
            </React.Fragment>
        )
    }

}

export default AdditionalActions;