import SimpleAssetForm from "./SimpleAssetForm";

class EditSimpleAsset extends SimpleAssetForm {

    handleSubmit(event) {
        event.preventDefault();
        if (this.formIsValid()) {
            this.props.stopEditing(this.state);
            this.props.onSubmission(this.props.index, this.state);
        } else {
            alert("All fields are required.")
        }
    }
}

export default EditSimpleAsset;