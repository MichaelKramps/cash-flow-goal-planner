import React from 'react';
import AddAsset from "./AddAsset";

class AddCurrentAsset extends React.Component {

    constructor(props){
        super(props);

        this.state = {editing: false}
    }

    render() {
        if (this.state.editing) {
            return (
                <AddAsset
                    onSubmission={this.props.onSubmission}
                    stopEditing={() => {this.setState({editing: false})}}
                />
            );
        } else {
            return(
                <button onClick={() => {this.setState({editing: true})}}>
                    Add an Asset
                </button>
            );
        }
    }
}

export default AddCurrentAsset;