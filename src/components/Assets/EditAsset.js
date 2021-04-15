import React from 'react';
import AddAsset from "./AddAsset";

class EditAsset extends AddAsset {

    handleSubmit(event) {
        event.preventDefault();
        this.props.stopEditing(this.state);
        this.props.onSubmission(this.props.index, this.state);
    }
}

export default EditAsset;