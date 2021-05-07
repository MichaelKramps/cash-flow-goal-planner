import SimpleAssetForm from "./SimpleAssetForm";

class EditSimpleAsset extends SimpleAssetForm {

    handleSubmit(event) {
        event.preventDefault();
        this.props.stopEditing(this.state);
        this.props.onSubmission(this.props.index, this.state);
    }
}

export default EditSimpleAsset;