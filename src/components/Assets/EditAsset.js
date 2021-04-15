import React from 'react';
import AssetForm from "./AssetForm";

class EditAsset extends AssetForm {

    handleSubmit(event) {
        event.preventDefault();
        this.props.stopEditing(this.state);
        this.props.onSubmission(this.props.index, this.state);
    }
}

export default EditAsset;