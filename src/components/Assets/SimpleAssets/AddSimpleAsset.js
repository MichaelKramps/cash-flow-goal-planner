import SimpleAssetForm from "./SimpleAssetForm";

class AddSimpleAsset extends SimpleAssetForm {

    handleSubmit(event) {
        event.preventDefault();
        if (this.formIsValid()) {
            this.props.stopEditing(this.state);
            this.props.onSubmission(this.state);

            this.setState({
                name: "",
                type: "",
                initialInvestment: 0,
                cashFlow: 0
            })
        } else {
            alert("All fields are required.")
        }
    }
}

export default AddSimpleAsset;