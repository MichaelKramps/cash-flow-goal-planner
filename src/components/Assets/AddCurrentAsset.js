import React from 'react';
import AddAsset from "./AddAsset";

class AddCurrentAsset extends React.Component {

    constructor(props){
        super(props);

        this.state = {editing: false}
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={() => {this.setState({editing: true})}}>
                    Add an Asset
                </button>
                <AddAsset
                    visible={this.state.editing}
                    onSubmission={this.props.onSubmission}
                    stopEditing={() => {this.setState({editing: false})}}
                />
            </React.Fragment>
        );
    }
}

export default AddCurrentAsset;