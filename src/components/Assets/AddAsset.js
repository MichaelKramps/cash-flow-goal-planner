import AssetForm from "./AssetForm";

class AddAsset extends AssetForm {

    handleSubmit(event) {
        event.preventDefault();
        this.props.stopEditing(this.state);
        this.props.onSubmission(this.state);

        this.setState({
            name: "",
            type: "",
            initialInvestment: 0,
            cashFlow: 0
        })
    }
}

export default AddAsset;