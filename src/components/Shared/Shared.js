class Shared {
    static determineVisibility(props) {
        console.log(props)
        if (props.visible) {
            return "visible";
        } else {
            return "invisible";
        }
    }
}

export default Shared;