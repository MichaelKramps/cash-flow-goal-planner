import React from 'react';
import RoadMapCheckboxSection from "./RoadMapCheckboxSection";

class ShortTermRentalRoadMap extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            initialInvestment: this.props.initialInvestment || null
        }
    }

    render() {
        return (
            <div>
                <h1>Road Map: Short Term Rental</h1>
                <RoadMapCheckboxSection checked={this.state.initialInvestment} title="Save money for your initial investment">
                    <p>This is some information</p>
                </RoadMapCheckboxSection>
            </div>
        );
    }
}

export default ShortTermRentalRoadMap;