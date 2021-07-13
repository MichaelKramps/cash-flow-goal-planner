import React from 'react';
import './RoadMapCheckboxSection.css';

class RoadMapCheckboxSection extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            checked: this.props.checked || null,
            showContent: this.props.showContent || null
        }

        this.toggleChecked = this.toggleChecked.bind(this);
        this.toggleShowContent = this.toggleShowContent.bind(this);
    }

    toggleChecked() {
        return this.state.checked ? null : "checked";
    }

    toggleShowContent() {
        return this.state.showContent ? null : "show-content";
    }

    render () {
        return (
            <div className={"road-map-checkbox " + this.state.showContent}>
                <div className="road-map-title">
                    <div>
                        <input onClick={() => {this.setState({checked: this.toggleChecked()})}}
                               type="checkbox"
                               checked={this.state.checked} />
                        <h2>{this.props.title}</h2>
                    </div>
                    <span onClick={() => {this.setState({showContent: this.toggleShowContent()})}}>+</span>
                </div>
                <div className="road-map-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default RoadMapCheckboxSection;