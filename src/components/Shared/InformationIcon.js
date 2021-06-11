import React from 'react';
import './InformationIcon.css';

class InformationIcon extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showContent: false
        };

        this.toggleContentVisibility = this.toggleContentVisibility.bind(this);
        this.determineContent = this.determineContent.bind(this);
    }

    toggleContentVisibility() {
        let visibility = this.state.showContent ? false : true;
        this.setState({showContent: visibility});
    }

    determineContent() {
        if (this.state.showContent) {
            return(
                <div className="information-icon-content">
                    {this.props.children}
                </div>
            )
        } else {
            return (
                null
            )
        }
    }

    render(){
        return(
            <div className="information-icon"  onClick={this.toggleContentVisibility}>
                <span>&#9432;</span>
                {this.determineContent()}
            </div>
        )
    }
}

export default InformationIcon;