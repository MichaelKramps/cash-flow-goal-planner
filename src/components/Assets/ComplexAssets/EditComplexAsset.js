import React from 'react';

class EditComplexAsset extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            type: this.props.type,
            advanced: this.props.advanced
        }

        this.stopEditing = this.stopEditing.bind(this);
    }

    render() {
        return (
            <div>hi</div>
        )
    }
}

export default EditComplexAsset;
