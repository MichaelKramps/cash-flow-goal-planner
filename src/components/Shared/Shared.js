class Shared {
    static determineVisibility(props) {
        if (props.visible) {
            return "visible";
        } else {
            return "invisible";
        }
    }
}

export default Shared;